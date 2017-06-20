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
```javascript
import { UnicornModule } from 'unicorn-components/unicorn-components';

@NgModule({
  imports: [
    UnicornModule
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
| **Charts**     | Chart             | `<uni-chart>`             | :blue_circle:       | + Info
| "              | Legend            | `<uni-chart-legend>`      | :blue_circle:       | + Info
| "              | Tooltip           | `<uni-chart-tooltip>`     | :blue_circle:       | + Info
| **Containers** | Accordion         | `<uni-accordion>`         | :white_check_mark:  | + Info
| "              | Aside             | `<uni-aside>`             | :white_check_mark:  | + Info
| "              | Body              | `<uni-body>`              | :white_check_mark:  | + Info
| "              | Box               | `<uni-box>`               | :white_check_mark:  | + Info
| "              | Header            | `<uni-header>`            | :white_check_mark:  | + Info
| "              | Layout            | `<uni-layout>`            | :white_check_mark:  | + Info
| "              | Modal             | `<uni-modal>`             | :white_check_mark:  | + Info
| "              | Popup             | `<uni-popup>`             | :white_check_mark:  | + Info
| "              | Row               | `<uni-row>`               | :white_check_mark:  | + Info
| "              | Row Spacer        | `<uni-row-spacer>`        | :white_check_mark:  | + Info
| "              | Tabs              | `<uni-tabs>`              | :white_check_mark:  | + Info
| **Forms**      | Button toggle     | `<uni-button-toggle>`     | :white_check_mark:  | + Info
| "              | Checkbox          | `<uni-checkbox>`          | :white_check_mark:  | + Info
| "              | Code Editor       | `<uni-code-editor>`       | :red_circle:        | + Info
| "              | Date Picker       | `<uni-date-picker>`       | :white_check_mark:  | + Info
| "              | Date Range Picker | `<uni-daterange-picker>`  | :white_check_mark:  | + Info
| "              | Date Time Picker  | `<uni-datetime-picker>`   | :white_check_mark:  | + Info
| "              | Image Picker      | `<uni-image-picker>`      | :red_circle:        | + Info
| "              | Input             | `<uni-input>`             | :white_check_mark:  | + Info
| "              | Radio             | `<uni-radio>`             | :white_check_mark:  | + Info
| "              | Select            | `<uni-select>`            | :white_check_mark:  | + Info
| "              | Slider            | `<uni-slider>`            | :white_circle:      | + Info
| "              | Slider Range      | `<uni-slider-range>`      | :white_circle:      | + Info
| "              | Time Picker       | `<uni-time-picker>`       | :white_check_mark:  | + Info
| "              | Toggle            | `<uni-radio>`             | :white_check_mark:  | + Info
| **UI**         | Button            | `<uni-button>`            | :white_check_mark:  | [+ Info](src/components/ui/button)
| "              | Button File       | `<uni-button>`            | :blue_circle:       | + Info
| "              | Button Group      | `<uni-button-group>`      | :white_circle:      | + Info
| "              | Button Header     | `<uni-button-header>`     | :white_check_mark:  | + Info
| "              | Button Menu       | `<uni-button-menu>`       | :white_check_mark:  | + Info
| "              | Button Popup      | `<uni-button-popup>`      | :white_check_mark:  | + Info
| "              | Calendar          | `<uni-calendar>`          | :white_check_mark:  | + Info
| "              | Carousel          | `<uni-carousel>`          | :blue_circle:       | + Info
| "              | Clock             | `<uni-clock>`             | :white_check_mark:  | + Info
| "              | Datagrid          | `<uni-datagrid>`          | :blue_circle:       | + Info
| "              | Filters           | `<uni-filters>`           | :blue_circle:       | + Info
| "              | Filters List      | `<uni-filters-list>`      | :blue_circle:       | + Info
| "              | List              | `<uni-list>`              | :blue_circle:       | + Info
| "              | Menu              | `<uni-menu>`              | :blue_circle:       | + Info
| "              | Paginator         | `<uni-paginator>`         | :white_check_mark:  | + Info
| "              | Tree              | `<uni-tree>`              | :white_circle:      | + Info
| **Utils**      | Alert             | `<uni-alert>`             | :white_circle:      | + Info
| "              | Badge             | `<uni-badge>`             | :white_check_mark:  | + Info
| "              | Chip              | `<uni-chip>`              | :blue_circle:       | + Info
| "              | Face              | `<uni-face>`              | :white_check_mark:  | + Info
| "              | Icon              | `<uni-icon>`              | :white_check_mark:  | + Info
| "              | Progress          | `<uni-progress>`          | :white_check_mark:  | + Info
| "              | Separator         | `<uni-separator>`         | :white_check_mark:  | + Info
| "              | Spinner           | `<uni-spinner>`           | :white_check_mark:  | + Info
| "              | Toast             | `<uni-toast>`             | :red_circle:        | + Info
| "              | Tooltip           | `<uni-tooltip>`           | :red_circle:        | + Info
| **Views**      | Filtered Datagrid | `<uni-filtered-datagrid>` | :blue_circle:       | + Info
| "              | Search Header     | `<uni-search-header>`     | :blue_circle:       | + Info

**Leyenda**:

- :white_circle: **Previsto**: Su desarrollo está previsto para el futuro
- :blue_circle: **Inicial**: Está desarrollado pero no se ha probado lo suficiente
- :white_check_mark: **Estable**: Desarrollado, probado y sin cambios relevantes previstos
- :red_circle: **Inestable**: Con fallos conocidos o con cambios relevantes previstos
- :black_circle: **Obsoleto**: Soporte y desarrollo descontinuados
