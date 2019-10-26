import Component, { tracked } from '@glimmer/component';

interface Args {
    type: string;
}
export default class Icon extends Component<Args> {
    icon: string;
    duoIcon: string;
    defaultType = 'fa';
    constructor(owner, args) {
        super(owner, args);
        // this.icon = `&#x${args.icon};`;
        const string = `0x${args.icon}`;
        this.icon = String.fromCharCode(Number(string));
        if (args.type === 'fad') {
            const duoString = `0x${args.duoIcon}`;
            const duoNumber = Number(duoString);
            this.duoIcon = String.fromCharCode(duoNumber);
        }
    }

    @tracked
    get type() {
        return this.args.type || this.defaultType;
    }
}
