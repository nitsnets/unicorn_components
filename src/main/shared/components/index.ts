import { GoSeparatorComponent } from './separator/separator.component';
import { GoInputComponent } from './input/index';
import { GoCheckboxComponent } from './checkbox/index';
import { GoSelectComponent } from './select/index';
import { GoHeaderComponent } from './header/index';
import { GoBodyComponent } from './body/index';
import { GoButtonComponent } from './button/index';
import { GoIconComponent } from './icon/index';
import { GoDatetimePickerComponent } from './datetime-picker/index';
import { GoClockComponent } from './clock/index';
import { GoCalendarComponent } from './calendar/index';
import { DROPDOWN_DIRECTIVES } from './dropdown/index';
import { POPUP_DIRECTIVES } from './popup/index';

export const BASIC_GO_COMPONENTS = [
    GoInputComponent, GoCheckboxComponent, GoSelectComponent, GoSeparatorComponent,
    GoButtonComponent, GoHeaderComponent, DROPDOWN_DIRECTIVES, POPUP_DIRECTIVES,
    GoBodyComponent, GoDatetimePickerComponent, GoClockComponent, GoIconComponent,
    GoCalendarComponent
];
