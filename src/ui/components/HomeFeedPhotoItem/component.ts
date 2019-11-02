import Component, { tracked } from '@glimmer/component';
import { action, Navigation } from 'glimmer-native';
import { NavigationOptions } from 'glimmer-native/dist/src/glimmer/navigation';
import * as dialogs from 'tns-core-modules/ui/dialogs';

interface Args {
    item: any;
    fullDescription: boolean;
}
const maxHeight = 500;
export default class HomeFeedListItem extends Component<Args> {
    @tracked item = this.args.item;
    @tracked
    get fullDescription() {
        return this.args.item.fullDescription || false;
    }

    // @action
    // showFullDescription() {
    //     if (this.fullDescription) {
    //         this.args.item.fullDescription = false;
    //     } else {
    //         this.args.item.fullDescription = true;
    //     }
    // }
    // @tracked
    // get fullDescription() {
    //     return this.defaultFullDescription;
    // }
    // @tracked
    // get fullDescription() {
    //     return this.args.fullDescription || false;
    //     return this.args.item.fullDescription === true || this.args.item.fullDescription === false
    //         ? this.args.item.fullDescription
    //         : this.defaultFullDescription;
    // }
    // set fullDescription(value) {
    //     this.args.fullDescription = value;
    // }

    get resultForComponent() {
        // the grandparent node is null on android
        const parent = this.bounds.firstNode.parentNode as any;
        const grandparent = parent.parentNode as any;
        return grandparent ? grandparent.nativeView.__GlimmerComponent__ : parent.nativeView.__GlimmerComponent__;
    }

    @action
    toggleColor(args) {
        // set the height to the measured size so there is no repaint flash
        // this.height = args.object.getActualSize().height;
        // Tracked properties dont work in listview generated components
        // this is because the component isn't part of the actually application
        // and therefore is not inside the applicationr result to be re-rendered
        const oldState = this.resultForComponent.state.value();
        this.resultForComponent.update({
            ...oldState,
            showOriginal: !oldState.showOriginal
        });
    }

    @action
    async toggleLikeStatus(event) {
        // let item = this.args.item as any;
        // let updatedItem = null;
        // const oldState = this.resultForComponent.state.value();
        // if (item.likedByUser === false) {
        //     try {
        //         updatedItem = {
        //             ...oldState.item,
        //             likes: item.likes + 1,
        //             likedByUser: true
        //         };
        //         FetchService.fetch(`/posts/${item.id}/like`, {
        //             method: 'PATCH'
        //         });
        //     } catch (errors) {
        //         item.likes = item.likes - 1;
        //         item.likedByUser = false;
        //     }
        // } else {
        //     try {
        //         updatedItem = {
        //             ...oldState.item,
        //             likes: item.likes - 1,
        //             likedByUser: false
        //         };
        //         // item.likes = item.likes - 1;
        //         // item.likedByUser = false;
        //         FetchService.fetch(`/posts/${item.id}/un-like`, {
        //             method: 'PATCH'
        //         });
        //     } catch (errors) {
        //         item.likes = item.likes + 1;
        //         item.likedByUser = true;
        //     }
        // }
        // // Tracked properties dont work in listview generated components
        // // this is because the component isn't part of the actually application
        // // and therefore is not inside the applicationr result to be re-rendered
        // this.resultForComponent.update({
        //     ...oldState,
        //     item: updatedItem
        // });
        // item.likes = updatedItem.likes;
        // item.likedByUser = updatedItem.likedByUser;
    }

    /**
     * Go to users profile from click of tag in post description
     *
     * @param {string} userName
     * @memberof PostDescription
     */
    @action
    async viewUsersProfile(userName) {
        // Remove @ symbol from userName
        if (userName) {
            userName = userName.substr(1);
            // const model = await FetchService.fetch(`/users?username=${userName}`);
            // Navigation.navigate('Profile', model.data[0], {} as any);
        }
    }

    @action
    async showActionsMenu() {
        const actions = ['Report', 'Delete'];

        const result = await dialogs.action({
            message: 'Post Actions',
            cancelButtonText: 'Cancel',
            actions
        });

        switch (result) {
            case 'Report':
                return this.reportPost();
            case 'Delete':
                return this.deletePost();
        }
    }

    @action
    async reportPost() {
        const response = await dialogs.prompt({
            title: 'Report Post',
            message: 'Why are you reporting this post?',
            okButtonText: 'Report',
            cancelButtonText: 'Cancel',
            inputType: dialogs.inputType.text
        });
    }

    @action
    async deletePost() {
        const response = await dialogs.confirm({
            title: 'Delete Post',
            message: 'Are you sure you want to delete this post?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        });
    }

    @action
    viewProfile() {
        const options = {} as NavigationOptions;
        Navigation.navigate('Profile', this.args.item.user, options);
    }

    @action
    showFullDescription() {
        if (this.fullDescription) {
            this.args.item.fullDescription = false;
        } else {
            this.args.item.fullDescription = true;
        }
    }
}
