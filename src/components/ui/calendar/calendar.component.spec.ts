import * as moment from 'moment';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement, SimpleChange, ViewRef } from '@angular/core';

import { UniButtonComponent } from './../button/button.component';
import { UniCalendarComponent } from './calendar.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from './../../utils/spinner/spinner.component';

describe('<uni-calendar>', () => {
    let fixture: ComponentFixture<UniCalendarComponent>,
        component: UniCalendarComponent,
        element: HTMLElement

    beforeEach(async(() =>
        TestBed.configureTestingModule({
            declarations: [
                UniCalendarComponent,
                UniButtonComponent,
                UniIconComponent,
                UniSpinnerComponent
            ],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UniCalendarComponent)
            component = fixture.debugElement.componentInstance
            element = fixture.debugElement.nativeElement

            component.model = '1992-12-17'
        })
    ))
    it(`- Should create the calendar`, async(() => {
        expect(component).toBeTruthy()
    }))
    /**
     * SLECTED DAY AND MONTH
     */
    it(`- Should update 'selected' attribute when 'model' changes`, async(() => {
        expect(component.selected).toBeTruthy()
        expect(component.selected.format('YYYY-MM-DD')).toEqual('1992-12-17')
    }))
    it(`- Should select the month of 'model' attr when it is set`, async(() => {
        expect(component.month).toBeTruthy()
        expect(component.month.format('YYYY-MM')).toEqual(component.selected.format('YYYY-MM'))
    }))
    it(`- Should navigate to the next month when calling 'next()'`, async(() => {
        component.next()
        expect(component.month.month).toEqual(component.selected.add(1, 'month').month)
    }))
    it(`- Should navigate to the previous month when calling 'previous'`, async(() => {
        component.previous()
        expect(component.month.month).toEqual(component.selected.subtract(1, 'month').month)
    }))
    it(`- Should have seven day names`, async(() =>
        expect(component.dayNames.length).toEqual(7)
    ))
    it(`- Should start the week on Monday`, async(() =>
        expect(component.dayNames[0]).toEqual('Mo')
    ))
    it(`- Should select current month if no 'model' specified`, async(() => {
        component.model = null;
        expect(component.month.format('YYYY-MM')).toEqual(moment().format('YYYY-MM'))
    }))
    /**
     * SELECTION AND BOUNDARIES
     */
    it(`- Should select max date when triying to select a date higher that the max`, async(() => {
        component.max = '2016-12-31'
        component.select(moment('2017-01-01', 'YYYY-MM-DD'))
        expect(component.selected.format('YYYY-MM-DD')).toEqual('2016-12-31')
    }))
    it(`- Should select min date when triying to select a date lower that the min`, async(() => {
        component.min = '2017-01-01'
        component.select(moment('2016-12-31', 'YYYY-MM-DD'))
        expect(component.selected.format('YYYY-MM-DD')).toEqual('2017-01-01')
    }))
    /**
     * RENDER AND CLASSES
     */
    it(`- Should render the calendar in the right month when 'model' is set`, async(() => {
        component.renderCalendar();
        fixture.detectChanges();
        expect(element.querySelector('.uni-calendar__month-name').textContent).toContain('December 1992');
    }))
    it(`- Should render the day names on the top`, async(() => {
        component.renderCalendar();
        fixture.detectChanges();
        expect(element.querySelectorAll('.uni-calendar__days-name p').length).toEqual(7);
    }))
    it(`- Should render all the days of the month, pkus the days before and anfter`, async(() => {
        component.renderCalendar();
        fixture.detectChanges();
        expect(element.querySelectorAll('.uni-calendar__day').length).toBeGreaterThan(31);
    }))

    it(`- Should render exactly the 28 days when February have four perfect weeks`, async(() => {
        component.model = '2010-02-01' // That year February started on Monday and ended on Sunday
        component.renderCalendar();
        fixture.detectChanges();
        expect(element.querySelectorAll('.uni-calendar__day').length).toEqual(28);
    }))
    it(`- Should render the day selected when 'model' is set`, async(() => {
        component.renderCalendar();
        fixture.detectChanges();
        expect(element.querySelector('.uni-calendar__day--selected').textContent).toContain('17');
    }))

})
