Filters list
===================
`uni-filters-list`
---
:large_blue_circle: Initial

Listado preparado para contener filtros guardados. Consta de dos secciones:
- **Filtros principales**: Definidos por el sistema y por tanto NO editables
- **Filtros personalizados**: Definidos por el usuario y por tanto editables, ampliables o borrables.

## Usage

## Ejemplo simple

```html
<uni-filters-list
    [mainFilters]="bar"
    [(customFilters)]="foo"
></uni-filters-list>
```

### Inputs

| Name           | Type              | Default     | Description                                                 |
| -------------- | ----------------- | ----------- | ----------------------------------------------------------- |
| mainTitle      | `string`          | `undefined` | Título para mostrar en la sección de filtros principales    |
| mainFilters    | `UniFilterItem[]` | `undefined` | Listado de filtros principales                              |
| customTitle    | `string`          | `undefined` | Título para mostrar en la sección de filtros personalizados |
| customFilters  | `UniFilterItem[]` | `undefined` | Listado de filtros personalizados                           |
| filterSelected | `UniFilter`       | `undefined` | Filtro seleccionado                                         |


### Outputs

| Name                 | Type              | Description                                                 |
| -------------------- | ----------------- | ----------------------------------------------------------- |
| customFiltersChange  | `UniFilterItem[]` | Notifica cuando cambia el listado de filtros personalizados |
| filterSelectedChange | `UniFilter`       | Notifica cuando cambia el filtro seleccionado               |

## Mejoras previstas (TODO)

- Implementación correcta del `customFiltersChange` cuando se borra o se renombra algún ítem
