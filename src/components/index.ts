import { UniMenuComponent, UniMenuTriggerDirective } from './ui/menu/menu.component';
import { UniPopupComponent, UniPopupTriggerDirective } from './containers/popup/popup.component';

import { FilteredDatagridComponent } from './views/filtered-datagrid/filtered-datagrid.component';
import { ModalService } from './containers/modal/modal.service';
import { ToastService } from './utils/toast/toast.service';
import { TooltipService } from './utils/tooltip/tooltip.service';
import { UniAccordionComponent } from './containers/accordion/accordion.component';
import { UniAccordionItemComponent } from './containers/accordion/item/item.component';
import { UniAlertComponent } from './utils/alert/alert.component';
import { UniAsideComponent } from './containers/aside/aside.component';
import { UniBadgeComponent } from './utils/badge/badge.component';
import { UniBodyComponent } from './containers/body/body.component';
import { UniBoxComponent } from './containers/box/box.component';
import { UniButtonComponent } from './ui/button/button.component';
import { UniButtonFileComponent } from './ui/button-file/button-file.component';
import { UniButtonGroupComponent } from './ui/button-group/button-group.component';
import { UniButtonHeaderComponent } from './ui/button-header/button-header.component';
import { UniButtonMenuComponent } from './ui/button-menu/button-menu.component';
import { UniButtonPopupComponent } from './ui/button-popup/button-popup.component';
import { UniButtonToggleComponent } from './forms/button-toggle/button-toggle.component';
import { UniButtonToggleGroupComponent } from './forms/button-toggle-group/button-toggle-group.component';
import { UniCalendarComponent } from './ui/calendar/calendar.component';
import { UniCarouselDirective } from './ui/carousel/carousel.directive';
import { UniChartComponent } from './charts/chart/chart.component';
import { UniChartLegendComponent } from './charts/chart-legend/chart-legend.component';
import { UniChartTooltipComponent } from './charts/chart-tooltip/chart-tooltip.component';
import { UniCheckboxComponent } from './forms/checkbox/checkbox.component';
import { UniChipComponent } from './utils/chip/chip.component';
import { UniClockComponent } from './ui/clock/clock.component';
import { UniDatagridCellComponent } from './ui/datagrid/cell/cell.component';
import { UniDatagridCellDirective } from './ui/datagrid/cell/cell-variables.directive';
import { UniDatagridColumnComponent } from './ui/datagrid/column/column.component';
import { UniDatagridComponent } from './ui/datagrid/datagrid.component';
import { UniDatagridDeleteComponent } from './ui/datagrid/delete/delete.component';
import { UniDatagridHeaderComponent } from './ui/datagrid/header/header.component';
import { UniDatagridRowComponent } from './ui/datagrid/row/row.component';
import { UniDatagridRowDirective } from './ui/datagrid/row/row-variables.directive';
import { UniDatePickerComponent } from './forms/date-picker/date-picker.component';
import { UniDaterangePickerComponent } from './forms/daterange-picker/daterange-picker.component';
import { UniDatetimePickerComponent } from './forms/datetime-picker/datetime-picker.component';
import { UniFaceComponent } from './utils/face/face.component';
import { UniFiltersAdvancedComponent } from './ui/filters/filters-advanced/filters-advanced.component';
import { UniFiltersComponent } from './ui/filters/filters.component';
import { UniFiltersListComponent } from './ui/filters-list/filters-list.component';
import { UniFiltersMainComponent } from './ui/filters/filters-main/filters-main.component';
import { UniGalleryComponent } from './ui/gallery/gallery.component';
import { UniGalleryFullImageComponent } from './ui/gallery/full-image/full-image.component';
import { UniGalleryImageComponent } from './ui/gallery/image/image.component';
import { UniHeaderComponent } from './containers/header/header.component';
import { UniIconComponent } from './utils/icon/icon.component';
import { UniImageComponent } from './utils/image/image.component';
import { UniImagePickerComponent } from './forms/image-picker/image-picker.component';
import { UniInputComponent } from './forms/input/input.component';
import { UniLayoutComponent } from './containers/layout/layout.component';
import { UniListComponent } from './ui/list/list.component';
import { UniMenuContainerComponent } from './ui/menu/container/container.component';
import { UniMenuItemComponent } from './ui/menu/item/item.component';
import { UniModalComponent } from './containers/modal/modal.component';
import { UniPaginatorComponent } from './ui/paginator/paginator.component';
import { UniPopupContainerComponent } from './containers/popup/container/container.component';
import { UniProgressComponent } from './utils/progress/progress.component';
import { UniRadioComponent } from './forms/radio/radio.component';
import { UniRadioGroupComponent } from './forms/radio-group/radio-group.component';
import { UniRowComponent } from './containers/row/row.component';
import { UniRowSpacerComponent } from './containers/row-spacer/row-spacer.component';
import { UniSearchHeaderComponent } from './views/search-header/search.component';
import { UniSelectComponent } from './forms/select/select.component';
import { UniSeparatorComponent } from './utils/separator/separator.component';
import { UniSliderComponent } from './forms/slider/slider.component';
import { UniSliderRangeComponent } from './forms/slider-range/slider-range.component';
import { UniSpinnerComponent } from './utils/spinner/spinner.component';
import { UniTabsComponent } from './containers/tabs/tabs.component';
import { UniTabsItemComponent } from './containers/tabs/item/item.component';
import { UniTextareaComponent } from './forms/textarea/textarea.component';
import { UniTimePickerComponent } from './forms/time-picker/time-picker.component';
import { UniToastComponent } from './utils/toast/toast.component';
import { UniToggleComponent } from './forms/toggle/toggle.component';
import { UniTooltipComponent } from './utils/tooltip/tooltip.component';
import { UniTooltipDirective } from './utils/tooltip/tooltip.directive';

export const UNI_COMPONENTS = [
    UniPopupComponent, UniPopupTriggerDirective, UniPopupContainerComponent, UniMenuComponent, UniMenuTriggerDirective,
    UniMenuContainerComponent, UniMenuItemComponent, UniInputComponent, UniCheckboxComponent, UniRadioComponent,
    UniButtonComponent, UniHeaderComponent, UniSelectComponent, UniSeparatorComponent, UniBodyComponent,
    UniDatetimePickerComponent, UniClockComponent, UniIconComponent, UniCalendarComponent, UniAsideComponent,
    UniLayoutComponent, UniSearchHeaderComponent, UniAccordionComponent, UniImagePickerComponent, UniListComponent,
    UniBoxComponent, UniRowComponent, UniButtonToggleComponent, UniChipComponent, UniProgressComponent,
    UniFaceComponent, UniBadgeComponent, UniPaginatorComponent, UniDaterangePickerComponent, UniTabsComponent,
    UniChartComponent, UniChartLegendComponent, UniChartTooltipComponent, UniRowSpacerComponent, UniToggleComponent,
    UniDatePickerComponent, UniTimePickerComponent, UniButtonMenuComponent, UniButtonPopupComponent,
    UniButtonFileComponent, UniButtonHeaderComponent, UniDatagridComponent, UniDatagridColumnComponent,
    UniDatagridRowComponent, UniDatagridRowDirective, UniDatagridCellComponent, UniDatagridCellDirective,
    UniDatagridHeaderComponent, UniFiltersComponent, UniFiltersAdvancedComponent, UniFiltersMainComponent,
    UniCarouselDirective, UniDatagridDeleteComponent, FilteredDatagridComponent, UniFiltersListComponent,
    UniSpinnerComponent, UniAccordionItemComponent, UniButtonGroupComponent, UniRadioGroupComponent,
    UniButtonToggleGroupComponent, UniSliderComponent, UniAlertComponent, UniTabsItemComponent, UniTextareaComponent,
    UniSliderRangeComponent, UniImageComponent, UniGalleryImageComponent, UniGalleryComponent,
    UniGalleryFullImageComponent, UniModalComponent, UniTooltipComponent, UniTooltipDirective, UniToastComponent
];
export const UNI_ENTRY_COMPONENTS = [
    UniDatagridDeleteComponent, UniGalleryFullImageComponent, UniModalComponent, UniTooltipComponent, UniToastComponent
]
export const UNI_SERVICES = [
    ModalService, TooltipService, ToastService
]
