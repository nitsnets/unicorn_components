<img src="https://bitbucket-assetroot.s3.amazonaws.com/c/photos/2017/Jul/07/2615006260-5-nitsnetsstudios-ondemand-UNI_avatar.png" align="left">

Unicorn Components
==================

Angular UI componentes kit of Unicorn Platform.

----

## Install

```shell
npm install unicorn_components --save
```

## Usage

```typescript
import { UnicornComponentsModule } from 'unicorn_components';

@NgModule({
  imports: [
    UnicornComponentsModule
  ],
  ...
})
export class AppModule { }
```

```html
<uni-button label="My button"></uni-button>
```

## Demo

http://components.servidorbeta.com


## List of components

| Grupo          | Componente        | Nomenclatura              | Estado              | + Info 
| -------------- | ----------------- | ------------------------- | ------------------- | ------- 
| **Charts**     | Chart             | `<uni-chart>`             | :large_blue_circle: | [+ Info](components/charts/chart/README)
| "              | Legend            | `<uni-chart-legend>`      | :large_blue_circle: | [+ Info](components/charts/chart-legend/README)
| "              | Tooltip           | `<uni-chart-tooltip>`     | :red_circle:        | [+ Info](components/charts/chart-tooltip/README)
| **Containers** | Accordion         | `<uni-accordion>`         | :white_check_mark:  | [+ Info](components/containers/accordion/README)
| "              | Aside             | `<uni-aside>`             | :white_check_mark:  | [+ Info](components/containers/aside/README)
| "              | Body              | `<uni-body>`              | :white_check_mark:  | [+ Info](components/containers/body/README)
| "              | Box               | `<uni-box>`               | :white_check_mark:  | [+ Info](components/containers/box/README)
| "              | Header            | `<uni-header>`            | :white_check_mark:  | [+ Info](components/containers/header/README)
| "              | Layout            | `<uni-layout>`            | :white_check_mark:  | [+ Info](components/containers/layout/README)
| "              | Modal             | `<uni-modal>`             | :white_check_mark:  | [+ Info](components/containers/modal/README)
| "              | Popup             | `<uni-popup>`             | :white_check_mark:  | [+ Info](components/containers/popup/README)
| "              | Row               | `<uni-row>`               | :white_check_mark:  | [+ Info](components/containers/row/README)
| "              | Row Spacer        | `<uni-row-spacer>`        | :white_check_mark:  | [+ Info](components/containers/row-spacer/README)
| "              | Tabs              | `<uni-tabs>`              | :white_check_mark:  | [+ Info](components/containers/tabs/README)
| **Forms**      | Button toggle     | `<uni-button-toggle>`     | :white_check_mark:  | [+ Info](components/forms/button-toggle/README)
| "              | Checkbox          | `<uni-checkbox>`          | :white_check_mark:  | [+ Info](components/forms/checkbox/README)
| "              | Code Editor       | `<uni-code-editor>`       | :red_circle:        | [+ Info](components/forms/code-editor/README)
| "              | Date Picker       | `<uni-date-picker>`       | :white_check_mark:  | [+ Info](components/forms/date-picker/README)
| "              | Date Range Picker | `<uni-daterange-picker>`  | :white_check_mark:  | [+ Info](components/forms/daterange-picker/README)
| "              | Date Time Picker  | `<uni-datetime-picker>`   | :white_check_mark:  | [+ Info](components/forms/datetime-picker/README)
| "              | Image Picker      | `<uni-image-picker>`      | :large_blue_circle: | [+ Info](components/forms/image-picker/README)
| "              | Input             | `<uni-input>`             | :white_check_mark:  | [+ Info](components/forms/input/README)
| "              | Radio             | `<uni-radio>`             | :white_check_mark:  | [+ Info](components/forms/radio/README)
| "              | Select            | `<uni-select>`            | :white_check_mark:  | [+ Info](components/forms/select/README)
| "              | Slider            | `<uni-slider>`            | :large_blue_circle: | [+ Info](components/forms/slider/README)
| "              | Slider Range      | `<uni-slider-range>`      | :white_circle:      | [+ Info](components/forms/slider-range/README)
| "              | Time Picker       | `<uni-time-picker>`       | :white_check_mark:  | [+ Info](components/forms/time-picker/README)
| "              | Toggle            | `<uni-toggle>`            | :white_check_mark:  | [+ Info](components/forms/toggle/README)
| **UI**         | Button            | `<uni-button>`            | :white_check_mark:  | [+ Info](components/ui/button/README)
| "              | Button File       | `<uni-button-file>`       | :large_blue_circle: | [+ Info](components/ui/button/README)
| "              | Button Group      | `<uni-button-group>`      | :white_check_mark:  | [+ Info](components/ui/button-group/README)
| "              | Button Header     | `<uni-button-header>`     | :white_check_mark:  | [+ Info](components/ui/button-header/README)
| "              | Button Menu       | `<uni-button-menu>`       | :white_check_mark:  | [+ Info](components/ui/button-menu/README)
| "              | Button Popup      | `<uni-button-popup>`      | :white_check_mark:  | [+ Info](components/ui/button-popup/README)
| "              | Calendar          | `<uni-calendar>`          | :white_check_mark:  | [+ Info](components/ui/calendar/README)
| "              | Carousel          | `<uni-carousel>`          | :large_blue_circle: | [+ Info](components/ui/carousel/README)
| "              | Clock             | `<uni-clock>`             | :white_check_mark:  | [+ Info](components/ui/clock/README)
| "              | Datagrid          | `<uni-datagrid>`          | :large_blue_circle: | [+ Info](components/ui/datagrid/README)
| "              | Filters           | `<uni-filters>`           | :large_blue_circle: | [+ Info](components/ui/filters/README)
| "              | Filters List      | `<uni-filters-list>`      | :large_blue_circle: | [+ Info](components/ui/filters-list/README)
| "              | List              | `<uni-list>`              | :large_blue_circle: | [+ Info](components/ui/list/README)
| "              | Menu              | `<uni-menu>`              | :white_check_mark:  | [+ Info](components/ui/menu/README)
| "              | Paginator         | `<uni-paginator>`         | :white_check_mark:  | [+ Info](components/ui/paginator/README)
| "              | Tree              | `<uni-tree>`              | :white_circle:      | [+ Info](components/ui/tree/README)
| **Utils**      | Alert             | `<uni-alert>`             | :white_check_mark:  | [+ Info](components/utils/alert/README)
| "              | Badge             | `<uni-badge>`             | :white_check_mark:  | [+ Info](components/utils/badge/README)
| "              | Chip              | `<uni-chip>`              | :large_blue_circle: | [+ Info](components/utils/chip/README)
| "              | Face              | `<uni-face>`              | :white_check_mark:  | [+ Info](components/utils/face/README)
| "              | Icon              | `<uni-icon>`              | :white_check_mark:  | [+ Info](components/utils/icon/README)
| "              | Progress          | `<uni-progress>`          | :white_check_mark:  | [+ Info](components/utils/progress/README)
| "              | Separator         | `<uni-separator>`         | :white_check_mark:  | [+ Info](components/utils/separator/README)
| "              | Spinner           | `<uni-spinner>`           | :white_check_mark:  | [+ Info](components/utils/spinner/README)
| "              | Toast             | `<uni-toast>`             | :red_circle:        | [+ Info](components/utils/toast/README)
| "              | Tooltip           | `<uni-tooltip>`           | :red_circle:        | [+ Info](components/utils/tooltip/README)
| **Views**      | Filtered Datagrid | `<uni-filtered-datagrid>` | :large_blue_circle: | [+ Info](components/views/filtered-datagrid/README)
| "              | Search Header     | `<uni-search-header>`     | :large_blue_circle: | [+ Info](components/views/search-header/README)

**Legend**:

:white_circle: **Coming soon** 

:large_blue_circle: **Initial**

:white_check_mark: **Stable**

:red_circle: **Unstable**

:black_circle: **Deprecated**
