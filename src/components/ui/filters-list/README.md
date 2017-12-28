Filters list
===================
`uni-filters-list`
---
:blue_circle: Initial

Listado preparado para contener filtros guardados. Consta de dos secciones:
- **Filtros principales**: Definidos por el sistema y por tanto NO editables
- **Filtros personalizados**: Definidos por el usuario y por tanto editables, ampliables o borrables.

## Uso

## Ejemplo simple

```html
<uni-filters-list
    [mainFilters]="bar"
    [(customFilters)]="foo"
></uni-filters-list>
```

### Atributos de entrada

| Nombre         | Tipo              | Por defecto | Descripción 
| -------------- | ----------------- | ----------- | -----------
| mainTitle      | `string`          | `undefined` | Título para mostrar en la sección de filtros principales
| mainFilters    | `UniFilterItem[]` | `undefined` | Listado de filtros principales
| customTitle    | `string`          | `undefined` | Título para mostrar en la sección de filtros personalizados
| customFilters  | `UniFilterItem[]` | `undefined` | Listado de filtros personalizados
| filterSelected | `UniFilter`       | `undefined` | Filtro seleccionado


### Eventos de salida

| Nombre                | Tipo              | Descripción
| --------------------- | ----------------- | -----------
| customFiltersChange   | `UniFilterItem[]` | Notifica cuando cambia el listado de filtros personalizados
| filterSelectedChange  | `UniFilter`       | Notifica cuando cambia el filtro seleccionado

## Mejoras previstas (TODO)

- Implementación correcta del `customFiltersChange` cuando se borra o se renombra algún ítem
