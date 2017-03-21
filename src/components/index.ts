import { NtsMenuComponent, NtsMenuTriggerDirective } from './ui/menu/menu.component';
import { NtsPopupComponent, NtsPopupTriggerDirective } from './containers/popup/popup.component';

import { FilteredDatagridComponent } from './views/filtered-datagrid/filtered-datagrid.component';
import { NtsAccordionComponent } from './containers/accordion/accordion.component';
import { NtsAsideComponent } from './containers/aside/aside.component';
import { NtsBadgeComponent } from './utils/badge/badge.component';
import { NtsBodyComponent } from './containers/body/body.component';
import { NtsBoxComponent } from './containers/box/box.component';
import { NtsButtonComponent } from './ui/button/button.component';
import { NtsButtonFileComponent } from './ui/button-file/button-file.component';
import { NtsButtonHeaderComponent } from './ui/button-header/button-header.component';
import { NtsButtonMenuComponent } from './ui/button-menu/button-menu.component';
import { NtsButtonPopupComponent } from './ui/button-popup/button-popup.component';
import { NtsButtonToggleComponent } from './forms/button-toggle/button-toggle.component';
import { NtsCalendarComponent } from './ui/calendar/calendar.component';
import { NtsCarouselDirective } from './ui/carousel/carousel.directive';
import { NtsChartComponent } from './charts/chart/chart.component';
import { NtsChartLegendComponent } from './charts/chart-legend/chart-legend.component';
import { NtsChartTooltipComponent } from './charts/chart-tooltip/chart-tooltip.component';
import { NtsCheckboxComponent } from './forms/checkbox/checkbox.component';
import { NtsChipComponent } from './utils/chip/chip.component';
import { NtsClockComponent } from './ui/clock/clock.component';
import { NtsDatagridCellComponent } from './ui/datagrid/cell/cell.component';
import { NtsDatagridCellDirective } from './ui/datagrid/cell/cell-variables.directive';
import { NtsDatagridColumnComponent } from './ui/datagrid/column/column.component';
import { NtsDatagridComponent } from './ui/datagrid/datagrid.component';
import { NtsDatagridDeleteComponent } from './ui/datagrid/delete/delete.component';
import { NtsDatagridHeaderComponent } from './ui/datagrid/header/header.component';
import { NtsDatagridRowComponent } from './ui/datagrid/row/row.component';
import { NtsDatagridRowDirective } from './ui/datagrid/row/row-variables.directive';
import { NtsDatePickerComponent } from './forms/date-picker/date-picker.component';
import { NtsDaterangePickerComponent } from './forms/daterange-picker/daterange-picker.component';
import { NtsDatetimePickerComponent } from './forms/datetime-picker/datetime-picker.component';
import { NtsFaceComponent } from './utils/face/face.component';
import { NtsFiltersAdvancedComponent } from './ui/filters/filters-advanced/filters-advanced.component';
import { NtsFiltersComponent } from './ui/filters/filters.component';
import { NtsFiltersListComponent } from './ui/filters-list/filters-list.component';
import { NtsFiltersMainComponent } from './ui/filters/filters-main/filters-main.component';
import { NtsHeaderComponent } from './containers/header/header.component';
import { NtsIconComponent } from './utils/icon/icon.component';
import { NtsImagePickerComponent } from './forms/image-picker/image-picker.component';
import { NtsInputComponent } from './forms/input/input.component';
import { NtsLayoutComponent } from './containers/layout/layout.component';
import { NtsListComponent } from './ui/list/list.component';
import { NtsMenuContainerComponent } from './ui/menu/container/container.component';
import { NtsMenuItemComponent } from './ui/menu/item/item.component';
import { NtsPaginatorComponent } from './ui/paginator/paginator.component';
import { NtsPopupContainerComponent } from './containers/popup/container/container.component';
import { NtsProgressComponent } from './utils/progress/progress.component';
import { NtsRadioComponent } from './forms/radio/radio.component';
import { NtsRowComponent } from './containers/row/row.component';
import { NtsRowSpacerComponent } from './containers/row-spacer/row-spacer.component';
import { NtsSearchHeaderComponent } from './views/search-header/search.component';
import { NtsSelectComponent } from './forms/select/select.component';
import { NtsSeparatorComponent } from './utils/separator/separator.component';
import { NtsTabsComponent } from './containers/tabs/tabs.component';
import { NtsTimePickerComponent } from './forms/time-picker/time-picker.component';
import { NtsToggleComponent } from './forms/toggle/toggle.component';

export const NTS_COMPONENTS = [
    NtsPopupComponent, NtsPopupTriggerDirective, NtsPopupContainerComponent, NtsMenuComponent, NtsMenuTriggerDirective,
    NtsMenuContainerComponent, NtsMenuItemComponent, NtsInputComponent, NtsCheckboxComponent, NtsRadioComponent,
    NtsButtonComponent, NtsHeaderComponent, NtsSelectComponent, NtsSeparatorComponent, NtsBodyComponent, NtsDatetimePickerComponent,
    NtsClockComponent, NtsIconComponent, NtsCalendarComponent, NtsAsideComponent, NtsLayoutComponent, NtsSearchHeaderComponent,
    NtsAccordionComponent, NtsImagePickerComponent, NtsListComponent, NtsBoxComponent, NtsRowComponent, NtsButtonToggleComponent,
    NtsChipComponent, NtsProgressComponent, NtsFaceComponent, NtsBadgeComponent, NtsPaginatorComponent, NtsDaterangePickerComponent,
    NtsTabsComponent, NtsChartComponent, NtsChartLegendComponent, NtsChartTooltipComponent, NtsRowSpacerComponent, NtsToggleComponent,
    NtsDatePickerComponent, NtsTimePickerComponent, NtsButtonMenuComponent, NtsButtonPopupComponent, NtsButtonFileComponent,
    NtsButtonHeaderComponent, NtsDatagridComponent, NtsDatagridColumnComponent, NtsDatagridRowComponent, NtsDatagridRowDirective,
    NtsDatagridCellComponent, NtsDatagridCellDirective, NtsDatagridHeaderComponent, NtsFiltersComponent, NtsFiltersAdvancedComponent,
    NtsFiltersMainComponent, NtsCarouselDirective, NtsDatagridDeleteComponent, FilteredDatagridComponent, NtsFiltersListComponent
];
