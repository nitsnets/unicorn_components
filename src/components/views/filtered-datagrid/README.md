Filtered datagrid
===================
`uni-filtered-datagrid`
---
:large_blue_circle: Initial

Agrupación de filtros con funciones de limpiado y guardado.

## Usage

## Ejemplo

```html
<uni-filtered-datagrid [filterNameFn]="nameFilter" [filterFn]="onFilter">
    <uni-filters-list [mainFilters]="defaultFilters"> </uni-filters-list>
    <uni-filters [savable]="true">
        <uni-input name="name" label="Name"></uni-input>
        <uni-input name="city" label="City"></uni-input>
        <uni-input name="company" label="Company"></uni-input>
    </uni-filters>
    <uni-datagrid [data]="users">
        <uni-datagrid-column title="Name" field="name" format="strong"></uni-datagrid-column>
        <uni-datagrid-column title="Email" field="email"></uni-datagrid-column>
        <uni-datagrid-column title="Address" field="address">
            <uni-datagrid-cell *cellVariables="let addr = cell">
                <p>{{addr.street}}, {{addr.suite}}</p>
                <p><strong>{{addr.city}}</strong> ({{addr.zipcode}})</p>
            </uni-datagrid-cell>
        </uni-datagrid-column>
        <uni-datagrid-column title="Company" field="company.name"></uni-datagrid-column>
    </uni-datagrid>
</uni-filtered-datagrid>

```

### Inputs

| Name                | Type                        | Default     | Description                                                                                                  |
| ------------------- | --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| filterNameFn        | `(item, filter) => boolean` | `undefined` | Función empleada para filtrar los elementos. Los recibe uno a uno y devuelve un booleano si pasan el filtro. |
| filterFn            | `(filter) => string`        | `undefined` | Recibe un filtro activo y devuelve el nombre con el que se debe guardar por defecto                          |
| hasHeader           | `boolean`                   | `false`     | Applies the specified layout                                                                                 |
| hasSubheader        | `boolean`                   | `false`     | Applies the specified layout                                                                                 |
| hasSubheaderAndTabs | `boolean`                   | `false`     | Applies the specified layout                                                                                 |
| fullWidth           | `boolean`                   | `false`     | Applies the specified layout                                                                                 |

### Outputs

| Name       | Type            | Description                               |
| ---------- | --------------- | ----------------------------------------- |
| filterSave | `UniFilterItem` | Indica que se ha guardado un nuevo filtro |

## Sub-components

| Component    | Selector             | Status              | Docs                                   |
| ------------ | -------------------- | ------------------- | -------------------------------------- |
| Datagrid     | `<uni-filters>`      | :large_blue_circle: | [+ Info](../../ui/datagrid/README)     |
| Filters      | `<uni-datagrid>`     | :large_blue_circle: | [+ Info](../../ui/filters/README)      |
| Filters list | `<uni-filters-list>` | :large_blue_circle: | [+ Info](../../ui/filters-list/README) |
