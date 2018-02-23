import { UniListItem } from './list-item';
export class UniOption implements UniListItem {
    value?: string;
    label: string;
    sublabel?: string;
    obj?: any;
    icon?: string;
    constructor(obj: Object) {
        Object.assign(this, obj);
    }
}
