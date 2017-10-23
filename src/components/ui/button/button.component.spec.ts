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
    it('should create the button', async(() => {
        expect(component).toBeTruthy();
    }));
    it(`should add <uni-icon> when 'icon' param is set`, async(() => {
        component.icon = 'description';
        fixture.detectChanges();
        expect(element.querySelector('uni-icon')).not.toBe(null);
    }));
    it(`should add a <uni-spinner> instead of a regular icon when 'icon' param is set to 'loading'`, async(() => {
        component.icon = 'loading';
        fixture.detectChanges();
        expect(element.querySelector('uni-spinner')).not.toBe(null);
        expect(element.querySelector('uni-icon')).toBe(null);
    }));
    it(`should add text content when 'label' param is set`, async(() => {
        component.label = 'Click me!';
        fixture.detectChanges();
        expect(element.querySelector('button').textContent).toContain('Click me!');
    }));
});
