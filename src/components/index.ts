import { NtsAccordionComponent } from './accordion/accordion.component';
import { NtsSearchHeaderComponent } from './search-header/search.component';
import { NtsLayoutComponent } from './layout/layout.component';
import { NtsAsideComponent } from './aside/aside.component';
import { NtsSeparatorComponent } from './separator/separator.component';
import { NtsInputComponent } from './input/index';
import { NtsCheckboxComponent } from './checkbox/index';
import { NtsSelectComponent } from './select/index';
import { NtsHeaderComponent } from './header/index';
import { NtsBodyComponent } from './body/index';
import { NtsButtonComponent } from './button/index';
import { NtsIconComponent } from './icon/index';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { NtsDatetimePickerComponent } from './datetime-picker/index';
import { NtsClockComponent } from './clock/index';
import { NtsCalendarComponent } from './calendar/index';
import { DROPDOWN_DIRECTIVES } from './dropdown/index';
import { POPUP_DIRECTIVES } from './popup/index';
import {  NtsColorPickerComponent } from './color-picker/color-picker.component';


export const NTS_COMPONENTS = [
    DROPDOWN_DIRECTIVES, POPUP_DIRECTIVES, NtsInputComponent, NtsCheckboxComponent,
    NtsButtonComponent, NtsHeaderComponent, NtsSelectComponent, NtsSeparatorComponent,
    NtsBodyComponent, NtsDatetimePickerComponent, NtsClockComponent, NtsIconComponent,
    NtsCalendarComponent, NtsAsideComponent, NtsLayoutComponent, SimpleListComponent,
    NtsSearchHeaderComponent, NtsAccordionComponent,  NtsColorPickerComponent
];
