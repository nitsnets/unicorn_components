import {
    Component, Type, Input, Output, EventEmitter, ElementRef,
    ComponentRef, HostListener, AfterContentInit
} from '@angular/core';

@Component({
    selector: 'nts-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss'],
})
export class NtsModalComponent implements AfterContentInit {
    contentComponent: Type<any>;
    contentComponentRef: ComponentRef<any>;

    @Input() modalOptions = {};

    @Output() loaded = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() submit = new EventEmitter();

    @HostListener('keyup', ['$event']) onKeyup(e: KeyboardEvent) {
        console.log('key up', e);
        if (e.key === 'Escape') { this.onCancel(); }
    }

    constructor(private elementRef: ElementRef) { }

    ngAfterContentInit() { }
    initContent(component: Type<any>, options) {
        this.contentComponent = component;
        this.modalOptions = options;
    }
    componentLoaded(componentRef: ComponentRef<any>) {
        this.contentComponentRef = componentRef;
        if (this.contentComponentRef.instance.submitModal) {
            this.contentComponentRef.instance.submitModal.subscribe(ev => this.onSubmit(ev));
        }
        if (this.contentComponentRef.instance.cancelModal) {
            this.contentComponentRef.instance.cancelModal.subscribe(ev => this.onCancel());
        }
        if (this.contentComponentRef.instance.initModalOptions) {
            this.contentComponentRef.instance.initModalOptions(this.modalOptions);
        }
    }

    onCancel() { this.cancel.emit(true); }
    onSubmit(obj) { this.submit.emit(obj); }
    onClickOutside(event) { if (this.elementRef.nativeElement.contains(event.target)) { this.onCancel(); } }
}
