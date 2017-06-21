import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    Injector,
    Input,
    OnChanges,
    Output,
    Provider,
    ReflectiveInjector,
    SimpleChanges,
    Type,
    ViewContainerRef,
} from '@angular/core';

@Directive({ selector: '[uniComponentLoader]' })
export class UniComponentLoaderDirective implements OnChanges {
    @Input() uniComponentLoader: Type<any>;
    @Input() uniComponentLoaderInjector: Injector;
    @Input() uniComponentLoaderProviders: Provider[];
    @Input() uniComponentLoaderProjectableNodes: any[][];

    @Output() uniComponentLoaded = new EventEmitter<ComponentRef<any>>(false);

    constructor(
        private _cmpFactoryResolver: ComponentFactoryResolver,
        private _viewContainerRef: ViewContainerRef
    ) { }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.hasOwnProperty('uniComponentLoader')) {
            this._viewContainerRef.clear();

            if (this.uniComponentLoader) {
                let injector = this.uniComponentLoaderInjector || this._viewContainerRef.parentInjector;

                if (Array.isArray(this.uniComponentLoaderProviders) && this.uniComponentLoaderProviders.length > 0) {
                    injector = ReflectiveInjector.resolveAndCreate(this.uniComponentLoaderProviders, injector);
                }

                const cmpRef = this._viewContainerRef.createComponent(
                    this._cmpFactoryResolver.resolveComponentFactory(this.uniComponentLoader),
                    this._viewContainerRef.length, injector, this.uniComponentLoaderProjectableNodes
                );

                this.uniComponentLoaded.emit(cmpRef);
            }
        }
    }
}
