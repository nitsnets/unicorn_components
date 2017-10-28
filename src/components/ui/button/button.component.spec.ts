import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement, ViewRef } from '@angular/core';

import { UniButtonComponent } from './button.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from './../../utils/spinner/spinner.component';

describe('<uni-button>', () => {
    let fixture: ComponentFixture<UniButtonComponent>;
    let component: UniButtonComponent;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UniButtonComponent,
                UniIconComponent,
                UniSpinnerComponent
            ],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UniButtonComponent);
            component = fixture.debugElement.componentInstance;
            element = fixture.debugElement.nativeElement;
        });
    }));
    it(`- Should create the button`, async(() => {
        expect(component).toBeTruthy();
    }));
    /**
     * LABEL
     */
    it(`- Should add text content when 'label' param is set`, async(() => {
        component.label = 'Click me!';
        fixture.detectChanges();
        expect(element.querySelector('button').textContent).toContain('Click me!');
    }));
    it(`- Should add additional text content when 'sublabel' param is set`, async(() => {
        component.label = 'Click me!';
        component.sublabel = 'Do it, please';
        fixture.detectChanges();
        expect(element.querySelector('button').textContent).toContain('Click me!');
        expect(element.querySelector('button').textContent).toContain('Do it, please');
    }));
    /**
     * ICONS
     */
    it(`- Should add <uni-icon> when 'icon' param is set`, async(() => {
        component.icon = 'description';
        fixture.detectChanges();
        expect(element.querySelector('uni-icon')).not.toBe(null);
    }));
    it(`- Should add right icon when 'iconRight' param is set`, async(() => {
        component.iconRight = 'description';
        fixture.detectChanges();
        expect(element.querySelector('uni-icon')).not.toBe(null);
    }));
    it(`- Should add both left left and right icon when 'icon' and 'iconRight' params are set`, async(() => {
        component.iconRight = 'description';
        fixture.detectChanges();
        expect(element.querySelector('uni-icon')).not.toBe(null);
    }));
    it(`- Should add a <uni-spinner> instead of a regular icon when 'icon' param is set to 'loading'`, async(() => {
        component.icon = 'loading';
        fixture.detectChanges();
        expect(element.querySelector('uni-spinner')).not.toBe(null);
        expect(element.querySelector('uni-icon')).toBe(null);
    }));
    /**
     * DISABLE AND TYPE
     */
    it(`- Should disable internal button when when 'dissable' param is set`, async(() => {
        component.disabled = true;
        fixture.detectChanges();
        expect(element.querySelector('button').disabled).toBe(true);
    }));
    it(`- Should set 'type' to internal button as 'type' param`, async(() => {
        ['reset', 'submit', 'button'].forEach(type => {
            component.type = type;
            fixture.detectChanges();
            expect(element.querySelector('button').type).toBe(type);
        })
    }));
    it(`- Should set 'button' type when no type param is specify`, async(() => {
        component.type = null;
        fixture.detectChanges();
        expect(element.querySelector('button').type).toBe('button');
    }));

});
