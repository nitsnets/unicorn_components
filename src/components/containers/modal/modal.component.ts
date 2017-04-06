import {
    AfterContentInit,
    Component,
    ComponentRef,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    Type,
} from '@angular/core';

@Component({
    selector: 'nts-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss']
})
export class NtsModalComponent implements AfterContentInit {
    component: Type<any>;
    componentRef: ComponentRef<any>;

    @Input() options = {};

    @Output() loaded = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() submit = new EventEmitter();

    leaving = false;

    @HostListener('document:keyup', ['$event']) onKeyup(e: KeyboardEvent) {
        if (e.key === 'Escape') { this.onCancel(); }
    }

    constructor(private elementRef: ElementRef) { }

    ngAfterContentInit() { }
    initContent(component: Type<any>, options) {
        this.component = component;
        this.options = options;
    }
    componentLoaded(componentRef: ComponentRef<any>) {
        this.componentRef = componentRef;
        if (this.componentRef.instance.submitModal) {
            this.componentRef.instance.submitModal.subscribe(ev => this.onSubmit(ev));
        }
        if (this.componentRef.instance.cancelModal) {
            this.componentRef.instance.cancelModal.subscribe(ev => this.onCancel());
        }
        if (this.componentRef.instance.initModalOptions) {
            this.componentRef.instance.initModalOptions(this.options);
        }
    }
    onCancel() {
        this.leaving = true;
        setTimeout(_ => this.cancel.emit(true), 200);
    }
    onSubmit(obj) {
        this.leaving = true;
        setTimeout(_ => this.submit.emit(obj), 200);
    }
    onClickOutside(event) { if (this.elementRef.nativeElement.contains(event.target)) { this.onCancel(); } }
}
