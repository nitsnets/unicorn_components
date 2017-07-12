Unicorn Components
==================
###### tags: `unicorn` `components` `library` `ui` `angular` `index`
Kit de componentes de interfaz de Unicorn Platform. Desarrollados en Angular.

## Instalación
En la raíz del proyecto ejecutar el comando:
```shell
npm install unicorn-components --save
```

## Uso
En el módulo principal:
```typescript
import { UnicornComponentsModule } from 'unicorn-components/unicorn-components';

@NgModule({
  imports: [
    UnicornComponentsModule
  ],
  ...
})
export class AppModule { }
```
En el template de tus componentes:
```htmlmixed
<uni-button label="Mi botón"></uni-button>
```

## Demo

El código fuente de la demo:
https://bitbucket.org/nitsnetsstudios-ondemand/unicorn_components_demo

La demo publicada:
http://components.servidorbeta.com


## Listado de componentes

| Grupo          | Componente        | Nomenclatura              | Estado              | + Info 
| -------------- | ----------------- | ------------------------- | ------------------- | ------- 
| **Charts**     | Chart             | `<uni-chart>`             | :blue_circle:       | [+ Info](src/components/charts/chart)
| "              | Legend            | `<uni-chart-legend>`      | :blue_circle:       | [+ Info](src/components/charts/chart-legend)
| "              | Tooltip           | `<uni-chart-tooltip>`     | :red_circle:        | [+ Info](src/components/charts/chart-tooltip)
| **Containers** | Accordion         | `<uni-accordion>`         | :white_check_mark:  | [+ Info](src/components/containers/accordion)
| "              | Aside             | `<uni-aside>`             | :white_check_mark:  | [+ Info](src/components/containers/aside)
| "              | Body              | `<uni-body>`              | :white_check_mark:  | [+ Info](src/components/containers/body)
| "              | Box               | `<uni-box>`               | :white_check_mark:  | [+ Info](src/components/containers/box)
| "              | Header            | `<uni-header>`            | :white_check_mark:  | [+ Info](src/components/containers/header)
| "              | Layout            | `<uni-layout>`            | :white_check_mark:  | [+ Info](src/components/containers/layout)
| "              | Modal             | `<uni-modal>`             | :white_check_mark:  | [+ Info](src/components/containers/modal)
| "              | Popup             | `<uni-popup>`             | :white_check_mark:  | [+ Info](src/components/containers/popup)
| "              | Row               | `<uni-row>`               | :white_check_mark:  | [+ Info](src/components/containers/row)
| "              | Row Spacer        | `<uni-row-spacer>`        | :white_check_mark:  | [+ Info](src/components/containers/row-spacer)
| "              | Tabs              | `<uni-tabs>`              | :white_check_mark:  | [+ Info](src/components/containers/tabs)
| **Forms**      | Button toggle     | `<uni-button-toggle>`     | :white_check_mark:  | [+ Info](src/components/forms/button-toggle)
| "              | Checkbox          | `<uni-checkbox>`          | :white_check_mark:  | [+ Info](src/components/forms/checkbox)
| "              | Code Editor       | `<uni-code-editor>`       | :red_circle:        | [+ Info](src/components/forms/code-editor)
| "              | Date Picker       | `<uni-date-picker>`       | :white_check_mark:  | [+ Info](src/components/forms/date-picker)
| "              | Date Range Picker | `<uni-daterange-picker>`  | :white_check_mark:  | [+ Info](src/components/forms/daterange-picker)
| "              | Date Time Picker  | `<uni-datetime-picker>`   | :white_check_mark:  | [+ Info](src/components/forms/datetime-picker)
| "              | Image Picker      | `<uni-image-picker>`      | :blue_circle:       | [+ Info](src/components/forms/image-picker)
| "              | Input             | `<uni-input>`             | :white_check_mark:  | [+ Info](src/components/forms/input)
| "              | Radio             | `<uni-radio>`             | :white_check_mark:  | [+ Info](src/components/forms/radio)
| "              | Select            | `<uni-select>`            | :white_check_mark:  | [+ Info](src/components/forms/select)
| "              | Slider            | `<uni-slider>`            | :white_circle:      | [+ Info](src/components/forms/slider)
| "              | Slider Range      | `<uni-slider-range>`      | :white_circle:      | [+ Info](src/components/forms/slider-range)
| "              | Time Picker       | `<uni-time-picker>`       | :white_check_mark:  | [+ Info](src/components/forms/time-picker)
| "              | Toggle            | `<uni-radio>`             | :white_check_mark:  | [+ Info](src/components/forms/radio)
| **UI**         | Button            | `<uni-button>`            | :white_check_mark:  | [+ Info](src/components/ui/button)
| "              | Button File       | `<uni-button>`            | :blue_circle:       | [+ Info](src/components/ui/button)
| "              | Button Group      | `<uni-button-group>`      | :white_circle:      | [+ Info](src/components/ui/button-group)
| "              | Button Header     | `<uni-button-header>`     | :white_check_mark:  | [+ Info](src/components/ui/button-header)
| "              | Button Menu       | `<uni-button-menu>`       | :white_check_mark:  | [+ Info](src/components/ui/button-menu)
| "              | Button Popup      | `<uni-button-popup>`      | :white_check_mark:  | [+ Info](src/components/ui/button-popup)
| "              | Calendar          | `<uni-calendar>`          | :white_check_mark:  | [+ Info](src/components/ui/calendar)
| "              | Carousel          | `<uni-carousel>`          | :blue_circle:       | [+ Info](src/components/ui/carousel)
| "              | Clock             | `<uni-clock>`             | :white_check_mark:  | [+ Info](src/components/ui/clock)
| "              | Datagrid          | `<uni-datagrid>`          | :blue_circle:       | [+ Info](src/components/ui/datagrid)
| "              | Filters           | `<uni-filters>`           | :blue_circle:       | [+ Info](src/components/ui/filters)
| "              | Filters List      | `<uni-filters-list>`      | :blue_circle:       | [+ Info](src/components/ui/filters-list)
| "              | List              | `<uni-list>`              | :blue_circle:       | [+ Info](src/components/ui/list)
| "              | Menu              | `<uni-menu>`              | :white_check_mark:  | [+ Info](src/components/ui/menu)
| "              | Paginator         | `<uni-paginator>`         | :white_check_mark:  | [+ Info](src/components/ui/paginator)
| "              | Tree              | `<uni-tree>`              | :white_circle:      | [+ Info](src/components/ui/tree)
| **Utils**      | Alert             | `<uni-alert>`             | :white_circle:      | [+ Info](src/components/utils/alert)
| "              | Badge             | `<uni-badge>`             | :white_check_mark:  | [+ Info](src/components/utils/badge)
| "              | Chip              | `<uni-chip>`              | :blue_circle:       | [+ Info](src/components/utils/chip)
| "              | Face              | `<uni-face>`              | :white_check_mark:  | [+ Info](src/components/utils/face)
| "              | Icon              | `<uni-icon>`              | :white_check_mark:  | [+ Info](src/components/utils/icon)
| "              | Progress          | `<uni-progress>`          | :white_check_mark:  | [+ Info](src/components/utils/progress)
| "              | Separator         | `<uni-separator>`         | :white_check_mark:  | [+ Info](src/components/utils/separator)
| "              | Spinner           | `<uni-spinner>`           | :white_check_mark:  | [+ Info](src/components/utils/spinner)
| "              | Toast             | `<uni-toast>`             | :red_circle:        | [+ Info](src/components/utils/toast)
| "              | Tooltip           | `<uni-tooltip>`           | :red_circle:        | [+ Info](src/components/utils/tooltip)
| **Views**      | Filtered Datagrid | `<uni-filtered-datagrid>` | :blue_circle:       | [+ Info](src/components/views/filtered-datagrid)
| "              | Search Header     | `<uni-search-header>`     | :blue_circle:       | [+ Info](src/components/views/search-header)

**Leyenda**:

:white_circle: **Previsto**: Su desarrollo está previsto para el futuro

:blue_circle: **Inicial**: Está desarrollado pero no se ha probado lo suficiente

:white_check_mark: **Estable**: Desarrollado, probado y sin cambios relevantes previstos

:red_circle: **Inestable**: Con fallos conocidos o con cambios relevantes previstos

:black_circle: **Obsoleto**: Soporte y desarrollo descontinuados