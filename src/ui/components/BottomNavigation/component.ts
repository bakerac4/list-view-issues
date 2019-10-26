import Component, { tracked } from '@glimmer/component';
import { action } from 'glimmer-native';

interface Args {
    row: number;
    onPostIconLoaded?: Function;
    onHomeIconLoaded?: Function;
}
export default class BottomNavigation extends Component<Args> {
    @tracked
    get row() {
        return this.args.row || this.defaultRow;
    }

    defaultRow = 2;

    @action
    onNavTap(route: string) {}

    @action
    onPostIconLoaded(args) {
        if (this.args.onPostIconLoaded) {
            this.args.onPostIconLoaded(args);
        }
    }

    @action
    onHomeIconLoaded(args) {
        if (this.args.onHomeIconLoaded) {
            this.args.onHomeIconLoaded(args);
        }
    }
}
