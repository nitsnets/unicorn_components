import { GoAccordionComponent } from './accordion/accordion.component';
import { GoSearchHeaderComponent } from './search-header/search.component';
import { GoLayoutComponent } from './layout/layout.component';
import { GoAsideComponent } from './aside/aside.component';
import { GoSeparatorComponent } from './separator/separator.component';
import { GoInputComponent } from './input/index';
import { GoCheckboxComponent } from './checkbox/index';
import { GoSelectComponent } from './select/index';
import { GoHeaderComponent } from './header/index';
import { GoBodyComponent } from './body/index';
import { GoButtonComponent } from './button/index';
import { GoIconComponent } from './icon/index';
import { GoLinkPickerComponent } from './link-picker/link-picker.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { GoDatetimePickerComponent } from './datetime-picker/index';
import { GoClockComponent } from './clock/index';
import { GoCalendarComponent } from './calendar/index';
import { DROPDOWN_DIRECTIVES } from './dropdown/index';
import { POPUP_DIRECTIVES } from './popup/index';
import { CodeEditorComponent } from './code-editor.component/code-editor.component';

export const BASIC_GO_COMPONENTS = [
    DROPDOWN_DIRECTIVES, POPUP_DIRECTIVES, GoInputComponent, GoCheckboxComponent,
    GoButtonComponent, GoHeaderComponent, GoSelectComponent, GoSeparatorComponent,
    GoBodyComponent, GoDatetimePickerComponent, GoClockComponent, GoIconComponent,
    GoCalendarComponent, GoAsideComponent, GoLayoutComponent, GoLinkPickerComponent,
    SimpleListComponent, GoSearchHeaderComponent, GoAccordionComponent, CodeEditorComponent
];
