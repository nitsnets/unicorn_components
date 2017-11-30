import { Component, ViewChild, ViewRef } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { FormatPipe } from '../../../pipes/format.pipe';
import { FormsModule } from '@angular/forms';
import { ModalService } from './../../containers/modal/modal.service';
import { UniBadgeComponent } from './../../utils/badge/badge.component';
import { UniButtonComponent } from './../../ui/button/button.component';
import { UniCheckboxComponent } from '../../forms/checkbox/checkbox.component';
import { UniDatagridCellComponent } from './cell/cell.component';
import { UniDatagridColumnComponent } from './column/column.component';
import { UniDatagridComponent } from './datagrid.component';
import { UniDatagridHeaderComponent } from './header/header.component';
import { UniDatagridRowComponent } from './row/row.component';
import { UniFaceComponent } from './../../utils/face/face.component';
import { UniFillMapPipe } from './../../../pipes/fill-map.pipe';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniPaginatePipe } from './../../../pipes/paginate.pipe';
import { UniPaginatorComponent } from '../paginator/paginator.component';
import { UniProgressComponent } from './../../utils/progress/progress.component';
import { UniRowComponent } from '../../containers/row/row.component';
import { UniSeparatorComponent } from './../../utils/separator/separator.component';
import { UniSortPipe } from './../../../pipes/sort.pipe';
import { UniSpinnerComponent } from './../../utils/spinner/spinner.component';

const mockData = [
    {
        id: 1,
        name: 'Alvaro',
        surname: 'Yuste',
        position: 'Frontend Dev'
    },
    {
        id: 2,
        name: 'Elad',
        surname: 'Rodriguez',
        position: 'CEO'
    }
];
const mockColumns = [
    { field: 'name', title: 'Name' },
    { field: 'surname', title: 'Surname' },
    { field: 'position', title: 'Position' },
]
@Component({
    template: `
    <uni-datagrid [data]="data">
        <uni-datagrid-column title="First name" field="name" [sort]="sortByName"></uni-datagrid-column>
        <uni-datagrid-column title="Surname" field="surname"></uni-datagrid-column>
        <uni-datagrid-column title="Position" field="position"></uni-datagrid-column>
    </uni-datagrid>
    `
})
class TestUniDatagridComponent {
    @ViewChild(UniDatagridComponent) datagrid;
    data: Object[];
    sortByName: 'desc' | 'asc' = null;
}

describe('<uni-datagrid>', () => {
    let fixture: ComponentFixture<TestUniDatagridComponent>,
        hostComponent: TestUniDatagridComponent,
        component: UniDatagridComponent,
        element: HTMLElement

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [ModalService],
            declarations: [TestUniDatagridComponent,
                UniDatagridComponent, UniDatagridHeaderComponent, UniDatagridColumnComponent, UniDatagridRowComponent,
                UniDatagridCellComponent,
                // Aux Components
                UniButtonComponent, UniIconComponent, UniSpinnerComponent, UniSeparatorComponent, UniFaceComponent,
                UniPaginatorComponent, UniCheckboxComponent, UniRowComponent, UniProgressComponent, UniBadgeComponent,
                // Pipes
                UniPaginatePipe, UniSortPipe, UniFillMapPipe, FormatPipe,
            ],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(TestUniDatagridComponent);
            hostComponent = fixture.debugElement.componentInstance;
            component = hostComponent.datagrid;
            element = fixture.debugElement.nativeElement;
        })
    }))
    it(`- Should create the datagrid`, async(() => {
        expect(component).toBeTruthy();
    }))
    /**
     * DATA AND INDEXES
     */
    it(`- Should index the data introduced`, async(() => {
        component.data = mockData;
        expect(component.dataSource).toBeTruthy();
        expect(component.dataView).toBeTruthy();
        expect(component.dataView.length).toEqual(component.data.length)
        expect(Object.keys(component.dataSource).length).toEqual(component.data.length)
        expect((new UniFillMapPipe()).transform(component.dataView, component.dataSource)).toEqual(component.data)
    }))
    /**
     * VISUALIZATION
     */
    it(`- Should render rows`, async(() => {
        hostComponent.data = mockData;
        fixture.detectChanges();
        expect(element.querySelectorAll('uni-datagrid-row').length).toEqual(component.data.length);
    }))
    it(`- Should sort rows by default`, async(() => {
        hostComponent.data = mockData;
        hostComponent.sortByName = 'desc';
        fixture.detectChanges();
        component.ngAfterContentInit();
        fixture.detectChanges();
        expect(element.querySelector('.uni-datagrid-cell__value').textContent).toContain(mockData[1].name);
    }))

})
