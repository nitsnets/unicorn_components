<a target="_blank" href="https://getunicorn.io"><img src="https://bitbucket-assetroot.s3.amazonaws.com/c/photos/2017/Jul/07/2615006260-5-nitsnetsstudios-ondemand-UNI_avatar.png" align="left"></a>

Unicorn Components
==================

<a target="_blank" href="https://travis-ci.org/nitsnets/unicorn_components"><img src="https://travis-ci.org/nitsnets/unicorn_components.svg?branch=master" align="right"></a>

<a href="https://badge.fury.io/js/%40unicorn.io%2Fcomponents"><img src="https://badge.fury.io/js/%40unicorn.io%2Fcomponents.svg" align="right"></a>

<a target="_blank" href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" align="right"></a>



Angular UI components kit of Unicorn Platform.


----

## Install

```shell
npm install --save @unicorn.io/components
```

## Demo

https://nitsnets.github.io/unicorn_components


## Usage

Import the module
```typescript
import { UnicornComponentsModule } from '@unicorn.io/components';

@NgModule({
  imports: [
    UnicornComponentsModule.forRoot()
  ],
  ...
})
export class AppModule { }
```
Start using components

```html
<uni-button label="My button"></uni-button>
```
Select styles theme _(Optional)_

```scss
@import './node_modules/@unicorn.io/components/styles/themes/cms/all'
```

## List of components

| Group          | Component         | Naming                    | Status              | Docs                            | Demo                                            |
| -------------- | ----------------- | ------------------------- | ------------------- | ------------------------------- | ----------------------------------------------- |
| **Charts**     | Chart             | `<uni-chart>`             | :large_blue_circle: | [Docs][charts/chart]            | - <!-- [Demo][charts/chart/demo]-->             |
| "              | Legend            | `<uni-chart-legend>`      | :large_blue_circle: | [Docs][charts/chart-legend]     | - <!-- [Demo][charts/chart-legend/demo]-->      |
| "              | Tooltip           | `<uni-chart-tooltip>`     | :red_circle:        | [Docs][charts/chart-tooltip]    | - <!-- [Demo][charts/chart-tooltip/demo]-->     |
| **Containers** | Accordion         | `<uni-accordion>`         | :white_check_mark:  | [Docs][containers/accordion]    | [Demo][containers/accordion/demo]               |
| "              | Aside             | `<uni-aside>`             | :white_check_mark:  | [Docs][containers/aside]        | [Demo][containers/aside/demo]                   |
| "              | Body              | `<uni-body>`              | :white_check_mark:  | [Docs][containers/body]         | [Demo][containers/body/demo]                    |
| "              | Box               | `<uni-box>`               | :white_check_mark:  | [Docs][containers/box]          | [Demo][containers/box/demo]                     |
| "              | Header            | `<uni-header>`            | :white_check_mark:  | [Docs][containers/header]       | [Demo][containers/header/demo]                  |
| "              | Layout            | `<uni-layout>`            | :white_check_mark:  | [Docs][containers/layout]       | [Demo][containers/layout/demo]                  |
| "              | Modal             | `<uni-modal>`             | :white_check_mark:  | [Docs][containers/modal]        | - <!-- [Demo][containers/modal/demo] -->        |
| "              | Popup             | `<uni-popup>`             | :white_check_mark:  | [Docs][containers/popup]        | [Demo][containers/popup/demo]                   |
| "              | Row               | `<uni-row>`               | :white_check_mark:  | [Docs][containers/row]          | [Demo][containers/row/demo]                     |
| "              | Row Spacer        | `<uni-row-spacer>`        | :white_check_mark:  | [Docs][containers/row-spacer]   | [Demo][containers/row-spacer/demo]              |
| "              | Tabs              | `<uni-tabs>`              | :white_check_mark:  | [Docs][containers/tabs]         | [Demo][containers/tabs/demo]                    |
| **Forms**      | Button toggle     | `<uni-button-toggle>`     | :white_check_mark:  | [Docs][forms/button-toggle]     | [Demo][forms/button-toggle/demo]                |
| "              | Checkbox          | `<uni-checkbox>`          | :white_check_mark:  | [Docs][forms/checkbox]          | [Demo][forms/checkbox/demo]                     |
| "              | Code Editor       | `<uni-code-editor>`       | :red_circle:        | [Docs][forms/code-editor]       | - <!-- [Demo][forms/code-editor/demo] -->       |
| "              | Date Picker       | `<uni-date-picker>`       | :white_check_mark:  | [Docs][forms/date-picker]       | [Demo][forms/date-picker/demo]                  |
| "              | Date Range Picker | `<uni-daterange-picker>`  | :white_check_mark:  | [Docs][forms/daterange-picker]  | [Demo][forms/daterange-picker/demo]             |
| "              | Date Time Picker  | `<uni-datetime-picker>`   | :white_check_mark:  | [Docs][forms/datetime-picker]   | [Demo][forms/datetime-picker/demo]              |
| "              | Image Picker      | `<uni-image-picker>`      | :large_blue_circle: | [Docs][forms/image-picker]      | - <!-- [Demo][forms/image-picker/demo] -->      |
| "              | Input             | `<uni-input>`             | :white_check_mark:  | [Docs][forms/input]             | [Demo][forms/input/demo]                        |
| "              | Radio             | `<uni-radio>`             | :white_check_mark:  | [Docs][forms/radio]             | [Demo][forms/radio/demo]                        |
| "              | Select            | `<uni-select>`            | :white_check_mark:  | [Docs][forms/select]            | [Demo][forms/select/demo]                       |
| "              | Slider            | `<uni-slider>`            | :large_blue_circle: | [Docs][forms/slider]            | [Demo][forms/slider/demo]                       |
| "              | Slider Range      | `<uni-slider-range>`      | :large_blue_circle: | [Docs][forms/slider-range]      | [Demo][forms/slider-range/demo]                 |
| "              | Time Picker       | `<uni-time-picker>`       | :white_check_mark:  | [Docs][forms/time-picker]       | [Demo][forms/time-picker/demo]                  |
| "              | Toggle            | `<uni-toggle>`            | :white_check_mark:  | [Docs][forms/toggle]            | [Demo][forms/toggle/demo]                       |
| **UI**         | Button            | `<uni-button>`            | :white_check_mark:  | [Docs][ui/button]               | [Demo][ui/button/demo]                          |
| "              | Button File       | `<uni-button-file>`       | :large_blue_circle: | [Docs][ui/button-file]          | [Demo][ui/button-file/demo]                     |
| "              | Button Group      | `<uni-button-group>`      | :white_check_mark:  | [Docs][ui/button-group]         | [Demo][ui/button-group/demo]                    |
| "              | Button Header     | `<uni-button-header>`     | :white_check_mark:  | [Docs][ui/button-header]        | [Demo][ui/button-header/demo]                   |
| "              | Button Menu       | `<uni-button-menu>`       | :white_check_mark:  | [Docs][ui/button-menu]          | [Demo][ui/button-menu/demo]                     |
| "              | Button Popup      | `<uni-button-popup>`      | :white_check_mark:  | [Docs][ui/button-popup]         | [Demo][ui/button-popup/demo]                    |
| "              | Calendar          | `<uni-calendar>`          | :white_check_mark:  | [Docs][ui/calendar]             | [Demo][ui/calendar/demo]                        |
| "              | Carousel          | `<uni-carousel>`          | :large_blue_circle: | [Docs][ui/carousel]             | - <!-- [Demo][ui/carousel/demo] -->             |
| "              | Clock             | `<uni-clock>`             | :white_check_mark:  | [Docs][ui/clock]                | [Demo][ui/clock/demo]                           |
| "              | Datagrid          | `<uni-datagrid>`          | :large_blue_circle: | [Docs][ui/datagrid]             | [Demo][ui/datagrid/demo]                        |
| "              | Filters           | `<uni-filters>`           | :large_blue_circle: | [Docs][ui/filters]              | [Demo][ui/filters/demo]                         |
| "              | Filters List      | `<uni-filters-list>`      | :large_blue_circle: | [Docs][ui/filters-list]         | - <!-- [Demo][ui/filters-list/demo] -->         |
| "              | List              | `<uni-list>`              | :large_blue_circle: | [Docs][ui/list]                 | [Demo][ui/list/demo]                            |
| "              | Menu              | `<uni-menu>`              | :white_check_mark:  | [Docs][ui/menu]                 | [Demo][ui/menu/demo]                            |
| "              | Paginator         | `<uni-paginator>`         | :white_check_mark:  | [Docs][ui/paginator]            | [Demo][ui/paginator/demo]                       |
| "              | Tree              | `<uni-tree>`              | :white_circle:      | [Docs][ui/tree]                 | - <!-- [Demo][ui/tree/demo] -->                 |
| **Utils**      | Alert             | `<uni-alert>`             | :white_check_mark:  | [Docs][utils/alert]             | [Demo][utils/alert/demo]                        |
| "              | Badge             | `<uni-badge>`             | :white_check_mark:  | [Docs][utils/badge]             | [Demo][utils/badge/demo]                        |
| "              | Chip              | `<uni-chip>`              | :large_blue_circle: | [Docs][utils/chip]              | [Demo][utils/chip/demo]                         |
| "              | Face              | `<uni-face>`              | :white_check_mark:  | [Docs][utils/face]              | [Demo][utils/face/demo]                         |
| "              | Icon              | `<uni-icon>`              | :white_check_mark:  | [Docs][utils/icon]              | - <!-- [Demo][utils/icon/demo] -->                        |
| "              | Progress          | `<uni-progress>`          | :white_check_mark:  | [Docs][utils/progress]          | [Demo][utils/progress/demo]                     |
| "              | Separator         | `<uni-separator>`         | :white_check_mark:  | [Docs][utils/separator]         | - <!-- [Demo][utils/separator/demo] -->         |
| "              | Spinner           | `<uni-spinner>`           | :white_check_mark:  | [Docs][utils/spinner]           | [Demo][utils/spinner/demo]                      |
| "              | Toast             | `<uni-toast>`             | :red_circle:        | [Docs][utils/toast]             | - <!-- [Demo][utils/toast/demo] -->             |
| "              | Tooltip           | `<uni-tooltip>`           | :red_circle:        | [Docs][utils/tooltip]           | - <!-- [Demo][utils/tooltip/demo] -->           |
| **Views**      | Filtered Datagrid | `<uni-filtered-datagrid>` | :large_blue_circle: | [Docs][views/filtered-datagrid] | - <!-- [Demo][views/filtered-datagrid/demo] --> |
| "              | Search Header     | `<uni-search-header>`     | :large_blue_circle: | [Docs][views/search-header]     | - <!-- [Demo][views/search-header/demo] -->     |

**Legend**:

:white_circle: **Coming soon** 

:large_blue_circle: **Initial**

:white_check_mark: **Stable**

:red_circle: **Unstable**

:black_circle: **Deprecated**


[unicorn]: https://getunicorn.io
[demo]: http://components.servidorbeta.com

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
[ui/button-file]: https://github.com/nitsnets/unicorn_components/tree/master/src/components/ui/button-file
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

<!-- [charts/chart/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
<!-- [charts/chart-legend/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
<!-- [charts/chart-tooltip/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[containers/accordion/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Accordion
[containers/aside/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Layout
[containers/body/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Layout
[containers/box/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Layout&selectedStory=Row%20of%20boxes
[containers/header/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Layout&selectedStory=Header%2C%20aside%20and%20body
[containers/layout/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Layout
<!-- [containers/modal/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[containers/popup/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Popup
[containers/row/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Layout&selectedStory=Row%20of%20boxes
[containers/row-spacer/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Layout&selectedStory=Row%20spacer
[containers/tabs/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Tabs
[forms/button-toggle/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Checkables%2FButton%20toggle
[forms/checkbox/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Checkables%2FCheckbox
<!-- [forms/code-editor/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[forms/date-picker/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Date%20and%20time%2FDate%20picker
[forms/daterange-picker/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Date%20and%20time%2FDate-range%20picker
[forms/datetime-picker/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Date%20and%20time%2FDate-time%20picker
<!-- [forms/image-picker/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[forms/input/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Input
[forms/radio/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Radio
[forms/select/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Select
[forms/slider/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Slider
[forms/slider-range/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Slider&selectedStory=Range
[forms/time-picker/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Date%20and%20time%2FTime%20picker
[forms/toggle/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Checkables%2FToggle
[ui/button/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Buttons%2FButton
[ui/button-file/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Buttons%2FFile%20picker
[ui/button-group/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Buttons%2FGroup
[ui/button-header/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Buttons%2FHeader
[ui/button-menu/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Menu&selectedStory=Button%20triggered
[ui/button-popup/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Popup&selectedStory=Button%20triggered
[ui/calendar/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Date%20and%20time%2FCalendar
<!-- [ui/carousel/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[ui/clock/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Date%20and%20time%2FClock
[ui/datagrid/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Datagrid%2FGeneral
[ui/filters/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Filters
<!-- [ui/filters-list/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[ui/list/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=List
[ui/menu/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Menu&selectedStory=Basic
[ui/paginator/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Paginator
<!-- [ui/tree/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[utils/alert/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Alert
[utils/badge/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Badge
[utils/chip/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Chip
[utils/face/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Face
<!-- [utils/icon/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[utils/progress/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Progress
<!-- [utils/separator/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
[utils/spinner/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind=Spinner
<!-- [utils/toast/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
<!-- [utils/tooltip/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
<!-- [views/filtered-datagrid/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
<!-- [views/search-header/demo]: https://nitsnets.github.io/unicorn_components/?selectedKind= -->
