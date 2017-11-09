export class UniOption {
    value;
    label;
    sublabel?;
    obj?;
    constructor(obj: Object) {
        Object.assign(this, obj);
    }
}
