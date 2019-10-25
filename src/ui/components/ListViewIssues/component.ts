import Component, { tracked } from '@glimmer/component';
import { action } from 'glimmer-native';
import { ListViewEventData, ListViewLinearLayout, RadListView } from 'nativescript-ui-listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { isIOS } from 'tns-core-modules/platform';
import { screen } from 'tns-core-modules/platform/platform';
import { ListView } from 'tns-core-modules/ui/list-view';

export default class ListViewIssues extends Component {
    // TODO; Find way to remove this and still have compiler know about paging decorator methods
    @tracked loadMode = 'Auto';
    @tracked loadingInitialPosts = true;
    @tracked _dataItems: ObservableArray<any>;
    @tracked keyedTemplates = ['photo', 'video'];
    listView: ListView;

    @tracked listViewPhotoTemplate = `<HomeFeedPhotoItem @item={{this.item}} @showOriginal={{this.showOriginal}}/>`;
    @tracked listViewVideoTemplate = `<HomeFeedVideoItem @item={{this.item}} @showOriginal={{this.showOriginal}} />`;

    private layout: ListViewLinearLayout;

    async didInsertElement() {
        this.layout = new ListViewLinearLayout();
        // this.layout.scrollDirection = ListViewScrollDirection.Vertical;
        // this.layout.itemInsertAnimation = ListViewItemAnimation.Scale;
        this._dataItems = new ObservableArray<any>();
        let posts: any = await this.loadModels();
        posts = this.calculateCorrectMediaHeight(posts);
        this._dataItems.push(posts);
        this.loadingInitialPosts = false;
    }

    calculateCorrectMediaHeight(posts: any) {
        const screenWidth = screen.mainScreen.widthDIPs;
        const screenHeight = screen.mainScreen.heightDIPs;
        // TODO: Max height is breaking things - figure out why
        // set a max media height of half the device's overall screen height
        const maxHeight = Math.round(screenHeight / 2);
        posts.forEach((post) => {
            let aspectRatio = post.imageWidth / post.imageHeight;
            let imageHeight = screenWidth / aspectRatio;
            post.imageHeight = imageHeight;
        });
        return posts;
    }

    @tracked
    public get posts(): ObservableArray<any> {
        return this._dataItems;
    }

    public set posts(value) {
        let newValue = value as any;
        this._dataItems = new ObservableArray<any>(newValue);
    }

    @action
    async loadMore(args) {
        const that = new WeakRef(this);
        const listView: RadListView = args.object;
        let posts: any[] = await this.loadMoreModels();
        if (posts.length > 0) {
            posts = this.calculateCorrectMediaHeight(posts);
            that.get()._dataItems.push(posts);
            listView.notifyLoadOnDemandFinished();
        } else {
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
    }

    @action
    itemLoading(args: ListViewEventData) {
        if (isIOS) {
            const ios = args.ios;
            ios.selectionStyle = UITableViewCellSelectionStyle.None;
        }

        const view = args.view as any;

        if (view) {
            const component = view.__GlimmerComponent__;
            const oldState = component.state.value();
            // set showOriginal to false
            component.update({
                ...oldState,
                showOriginal: false
            });
        }
    }
    @action
    selectItemTemplate(item, index, items) {
        if (item.isVideo) {
            return 'video';
        } else {
            return 'photo';
        }
    }
}
