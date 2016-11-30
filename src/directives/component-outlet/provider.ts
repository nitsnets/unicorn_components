import {OpaqueToken, NgModule} from '@angular/core';

export const COMPONENT_OUTLET_MODULE = new OpaqueToken('COMPONENT_OUTLET_MODULE');

export function provideComponentOutletModule(metadata: NgModule): any[] {
    return [
        { provide: COMPONENT_OUTLET_MODULE, useValue: metadata }
    ];
}
