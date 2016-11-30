import {
    ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Injector, Input,
    OnChanges, Output, Provider, ReflectiveInjector, SimpleChanges, Type, ViewContainerRef
} from '@angular/core';

@Directive({ selector: '[goComponentLoader]' })
export class ComponentLoaderDirective implements OnChanges {
    @Input() goComponentLoader: Type<any>;
    @Input() goComponentLoaderInjector: Injector;
    @Input() goComponentLoaderProviders: Provider[];
    @Input() goComponentLoaderProjectableNodes: any[][];

    @Output() goComponentLoaded = new EventEmitter<ComponentRef<any>>(false);

    constructor(
        private _cmpFactoryResolver: ComponentFactoryResolver,
        private _viewContainerRef: ViewContainerRef
    ) { }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.hasOwnProperty('goComponentLoader')) {
            this._viewContainerRef.clear();

            if (this.goComponentLoader) {
                let injector = this.goComponentLoaderInjector || this._viewContainerRef.parentInjector;

                if (Array.isArray(this.goComponentLoaderProviders) && this.goComponentLoaderProviders.length > 0) {
                    injector = ReflectiveInjector.resolveAndCreate(this.goComponentLoaderProviders, injector);
                }

                const cmpRef = this._viewContainerRef.createComponent(
                    this._cmpFactoryResolver.resolveComponentFactory(this.goComponentLoader),
                    this._viewContainerRef.length, injector, this.goComponentLoaderProjectableNodes
                );

                this.goComponentLoaded.emit(cmpRef);
            }
        }
    }
}
