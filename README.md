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
| **Charts**     | Chart             | `<uni-chart>`             | :large_blue_circle: | [+ Info][charts/chart]
| "              | Legend            | `<uni-chart-legend>`      | :large_blue_circle: | [+ Info][charts/chart-legend]
| "              | Tooltip           | `<uni-chart-tooltip>`     | :red_circle:        | [+ Info][charts/chart-tooltip]
| **Containers** | Accordion         | `<uni-accordion>`         | :white_check_mark:  | [+ Info][containers/accordion]
| "              | Aside             | `<uni-aside>`             | :white_check_mark:  | [+ Info][containers/aside]
| "              | Body              | `<uni-body>`              | :white_check_mark:  | [+ Info][containers/body]
| "              | Box               | `<uni-box>`               | :white_check_mark:  | [+ Info][containers/box]
| "              | Header            | `<uni-header>`            | :white_check_mark:  | [+ Info][containers/header]
| "              | Layout            | `<uni-layout>`            | :white_check_mark:  | [+ Info][containers/layout]
| "              | Modal             | `<uni-modal>`             | :white_check_mark:  | [+ Info][containers/modal]
| "              | Popup             | `<uni-popup>`             | :white_check_mark:  | [+ Info][containers/popup]
| "              | Row               | `<uni-row>`               | :white_check_mark:  | [+ Info][containers/row]
| "              | Row Spacer        | `<uni-row-spacer>`        | :white_check_mark:  | [+ Info][containers/row-spacer]
| "              | Tabs              | `<uni-tabs>`              | :white_check_mark:  | [+ Info][containers/tabs]
| **Forms**      | Button toggle     | `<uni-button-toggle>`     | :white_check_mark:  | [+ Info][forms/button-toggle]
| "              | Checkbox          | `<uni-checkbox>`          | :white_check_mark:  | [+ Info][forms/checkbox]
| "              | Code Editor       | `<uni-code-editor>`       | :red_circle:        | [+ Info][forms/code-editor]
| "              | Date Picker       | `<uni-date-picker>`       | :white_check_mark:  | [+ Info][forms/date-picker]
| "              | Date Range Picker | `<uni-daterange-picker>`  | :white_check_mark:  | [+ Info][forms/daterange-picker]
| "              | Date Time Picker  | `<uni-datetime-picker>`   | :white_check_mark:  | [+ Info][forms/datetime-picker]
| "              | Image Picker      | `<uni-image-picker>`      | :large_blue_circle: | [+ Info][forms/image-picker]
| "              | Input             | `<uni-input>`             | :white_check_mark:  | [+ Info][forms/input]
| "              | Radio             | `<uni-radio>`             | :white_check_mark:  | [+ Info][forms/radio]
| "              | Select            | `<uni-select>`            | :white_check_mark:  | [+ Info][forms/select]
| "              | Slider            | `<uni-slider>`            | :large_blue_circle: | [+ Info][forms/slider]
| "              | Slider Range      | `<uni-slider-range>`      | :white_circle:      | [+ Info][forms/slider-range]
| "              | Time Picker       | `<uni-time-picker>`       | :white_check_mark:  | [+ Info][forms/time-picker]
| "              | Toggle            | `<uni-toggle>`            | :white_check_mark:  | [+ Info][forms/toggle]
| **UI**         | Button            | `<uni-button>`            | :white_check_mark:  | [+ Info][ui/button]
| "              | Button File       | `<uni-button-file>`       | :large_blue_circle: | [+ Info][ui/button-file]
| "              | Button Group      | `<uni-button-group>`      | :white_check_mark:  | [+ Info][ui/button-group]
| "              | Button Header     | `<uni-button-header>`     | :white_check_mark:  | [+ Info][ui/button-header]
| "              | Button Menu       | `<uni-button-menu>`       | :white_check_mark:  | [+ Info][ui/button-menu]
| "              | Button Popup      | `<uni-button-popup>`      | :white_check_mark:  | [+ Info][ui/button-popup]
| "              | Calendar          | `<uni-calendar>`          | :white_check_mark:  | [+ Info][ui/calendar]
| "              | Carousel          | `<uni-carousel>`          | :large_blue_circle: | [+ Info][ui/carousel]
| "              | Clock             | `<uni-clock>`             | :white_check_mark:  | [+ Info][ui/clock]
| "              | Datagrid          | `<uni-datagrid>`          | :large_blue_circle: | [+ Info][ui/datagrid]
| "              | Filters           | `<uni-filters>`           | :large_blue_circle: | [+ Info][ui/filters]
| "              | Filters List      | `<uni-filters-list>`      | :large_blue_circle: | [+ Info][ui/filters-list]
| "              | List              | `<uni-list>`              | :large_blue_circle: | [+ Info][ui/list]
| "              | Menu              | `<uni-menu>`              | :white_check_mark:  | [+ Info][ui/menu]
| "              | Paginator         | `<uni-paginator>`         | :white_check_mark:  | [+ Info][ui/paginator]
| "              | Tree              | `<uni-tree>`              | :white_circle:      | [+ Info][ui/tree]
| **Utils**      | Alert             | `<uni-alert>`             | :white_check_mark:  | [+ Info][utils/alert]
| "              | Badge             | `<uni-badge>`             | :white_check_mark:  | [+ Info][utils/badge]
| "              | Chip              | `<uni-chip>`              | :large_blue_circle: | [+ Info][utils/chip]
| "              | Face              | `<uni-face>`              | :white_check_mark:  | [+ Info][utils/face]
| "              | Icon              | `<uni-icon>`              | :white_check_mark:  | [+ Info][utils/icon]
| "              | Progress          | `<uni-progress>`          | :white_check_mark:  | [+ Info][utils/progress]
| "              | Separator         | `<uni-separator>`         | :white_check_mark:  | [+ Info][utils/separator]
| "              | Spinner           | `<uni-spinner>`           | :white_check_mark:  | [+ Info][utils/spinner]
| "              | Toast             | `<uni-toast>`             | :red_circle:        | [+ Info][utils/toast]
| "              | Tooltip           | `<uni-tooltip>`           | :red_circle:        | [+ Info][utils/tooltip]
| **Views**      | Filtered Datagrid | `<uni-filtered-datagrid>` | :large_blue_circle: | [+ Info][views/filtered-datagrid]
| "              | Search Header     | `<uni-search-header>`     | :large_blue_circle: | [+ Info][views/search-header]

**Legend**:

:white_circle: **Coming soon** 

:large_blue_circle: **Initial**

:white_check_mark: **Stable**

:red_circle: **Unstable**

:black_circle: **Deprecated**

[charts/chart]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/charts/chart
[charts/chart-legend]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/charts/chart-legend
[charts/chart-tooltip]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/charts/chart-tooltip
[containers/accordion]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/accordion
[containers/aside]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/aside
[containers/body]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/body
[containers/box]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/box
[containers/header]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/header
[containers/layout]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/layout
[containers/modal]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/modal
[containers/popup]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/popup
[containers/row]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/row
[containers/row-spacer]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/row-spacer
[containers/tabs]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/containers/tabs
[forms/button-toggle]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/button-toggle
[forms/checkbox]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/checkbox
[forms/code-editor]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/code-editor
[forms/date-picker]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/date-picker
[forms/daterange-picker]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/daterange-picker
[forms/datetime-picker]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/datetime-picker
[forms/image-picker]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/image-picker
[forms/input]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/input
[forms/radio]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/radio
[forms/select]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/select
[forms/slider]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/slider
[forms/slider-range]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/slider-range
[forms/time-picker]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/time-picker
[forms/toggle]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/forms/toggle
[ui/button]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/button
[ui/button-file]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/button
[ui/button-group]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/button-group
[ui/button-header]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/button-header
[ui/button-menu]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/button-menu
[ui/button-popup]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/button-popup
[ui/calendar]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/calendar
[ui/carousel]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/carousel
[ui/clock]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/clock
[ui/datagrid]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/datagrid
[ui/filters]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/filters
[ui/filters-list]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/filters-list
[ui/list]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/list
[ui/menu]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/menu
[ui/paginator]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/paginator
[ui/tree]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/tree
[utils/alert]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/alert
[utils/badge]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/badge
[utils/chip]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/chip
[utils/face]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/face
[utils/icon]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/icon
[utils/progress]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/progress
[utils/separator]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/separator
[utils/spinner]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/spinner
[utils/toast]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/toast
[utils/tooltip]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/utils/tooltip
[views/filtered-datagrid]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/views/filtered-datagrid
[views/search-header]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/views/search-header