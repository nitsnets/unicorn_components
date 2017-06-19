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

@Directive({ selector: '[ntsComponentLoader]' })
export class UniComponentLoaderDirective implements OnChanges {
    @Input() ntsComponentLoader: Type<any>;
    @Input() ntsComponentLoaderInjector: Injector;
    @Input() ntsComponentLoaderProviders: Provider[];
    @Input() ntsComponentLoaderProjectableNodes: any[][];

    @Output() ntsComponentLoaded = new EventEmitter<ComponentRef<any>>(false);

    constructor(
        private _cmpFactoryResolver: ComponentFactoryResolver,
        private _viewContainerRef: ViewContainerRef
    ) { }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.hasOwnProperty('ntsComponentLoader')) {
            this._viewContainerRef.clear();

            if (this.ntsComponentLoader) {
                let injector = this.ntsComponentLoaderInjector || this._viewContainerRef.parentInjector;

                if (Array.isArray(this.ntsComponentLoaderProviders) && this.ntsComponentLoaderProviders.length > 0) {
                    injector = ReflectiveInjector.resolveAndCreate(this.ntsComponentLoaderProviders, injector);
                }

                const cmpRef = this._viewContainerRef.createComponent(
                    this._cmpFactoryResolver.resolveComponentFactory(this.ntsComponentLoader),
                    this._viewContainerRef.length, injector, this.ntsComponentLoaderProjectableNodes
                );

                this.ntsComponentLoaded.emit(cmpRef);
            }
        }
    }
}
