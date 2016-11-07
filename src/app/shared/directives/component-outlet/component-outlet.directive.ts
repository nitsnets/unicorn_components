import {
    Component, ComponentRef, Compiler, Directive, Inject, Input, Output, EventEmitter, NgModule,
     SimpleChanges, Type, ViewContainerRef, ReflectiveInjector, OnInit, OnDestroy, OnChanges
} from '@angular/core';

import { COMPONENT_OUTLET_MODULE } from './provider';

@Directive({
    selector: '[goComponentOutlet]',
})
export class ComponentOutletDirective implements OnDestroy, OnChanges {
    @Input() goComponentOutletTemplate: string;
    @Input() goComponentOutletSelector: string;
    @Input() goComponentOutletContext: any;

    @Output() goComponentOutletLoaded = new EventEmitter();

    private component: ComponentRef<any>;
    private moduleType: any;
    private cmpType: any;

    constructor(
        @Inject(COMPONENT_OUTLET_MODULE) private moduleMeta: any, /** NgModule (workaround for AoT) */
        private vcRef: ViewContainerRef,
        private compiler: Compiler
    ) { }

    private _createDynamicComponent(): Type<any> {
        let ctx = this.goComponentOutletContext;

        const metadata = new Component({ selector: this.goComponentOutletSelector, template: this.goComponentOutletTemplate, });

        const cmpClass = class DynamicComponentClass implements OnInit, OnDestroy {
            // context = ctx;
            constructor() {
                (<any>Object).assign(this, ctx);
            }
            ngOnInit() {
                console.log(this);
            }
            ngOnDestroy() {
                ctx = null;
            }
        };

        return Component(metadata)(cmpClass);
    }

    private _createDynamicModule(componentType: Type<any>) {
        const declarations = this.moduleMeta.declarations || [];
        declarations.push(componentType);
        const moduleMeta: NgModule = {
            imports: this.moduleMeta.imports,
            providers: this.moduleMeta.providers,
            schemas: this.moduleMeta.schemas,
            declarations: declarations
        };
        return NgModule(moduleMeta)(class DynamicComponentModule { });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.goComponentOutletTemplate) { return; }
        this.cmpType = this._createDynamicComponent();
        this.moduleType = this._createDynamicModule(this.cmpType);
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);

        this.compiler.compileModuleAndAllComponentsAsync<any>(this.moduleType)
            .then(factory => {
                let cmpFactory: any;
                for (let i = factory.componentFactories.length - 1; i >= 0; i--) {
                    if (factory.componentFactories[i].componentType === this.cmpType) {
                        cmpFactory = factory.componentFactories[i];
                        break;
                    }
                }
                return cmpFactory;
            })
            .then(cmpFactory => {
                if (cmpFactory) {
                    this.vcRef.clear();
                    this.component = this.vcRef.createComponent(cmpFactory, 0, injector);
                    this.component.changeDetectorRef.detectChanges();
                    this.goComponentOutletLoaded.emit(this.component);
                }
            });
    }

    ngOnDestroy() {
        if (this.component) {
            this.component.destroy();
        }

        if (this.compiler) {
            if (this.cmpType) {
                this.compiler.clearCacheFor(this.cmpType);
            }
            if (this.moduleType) {
                this.compiler.clearCacheFor(this.moduleType);
            }
        }
    }
}
