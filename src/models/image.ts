export class UniGalleryImage {
    name?: string;

    width?: number;
    height?: number;

    originalWidth?: number;
    originalHeight?: number;

    aspectRatio?: number;
    src: string;
    thumbSrc?: string;

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}
