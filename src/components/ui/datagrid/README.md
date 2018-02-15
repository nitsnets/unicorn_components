Datagrid
===================
`uni-datagrid`
---
:large_blue_circle: Initial

Tabla de contenidos compleja

## Usage

## Ejemplo simple

```html
<uni-datagrid [data]="data" (cellClick)="log('Cell clicked', $event)">
    <uni-datagrid-column title="First name" field="name"></uni-datagrid-column>
    <uni-datagrid-column title="Date of birth" field="birth"></uni-datagrid-column>
    <uni-datagrid-column title="Progress" field="progress"></uni-datagrid-column>
    <uni-datagrid-column title="Alerts" field="alerts"></uni-datagrid-column>
</uni-datagrid>
```

### Ejemplo de formatos personalizados

```html
<uni-datagrid [data]="data" (cellClick)="log('Cell clicked', $event)" [sortable]="false" [highlightRow]="false">
    <uni-datagrid-column title="First name" field="name" width="3"></uni-datagrid-column>
    <uni-datagrid-column title="Date of birth" field="birth" format="date"></uni-datagrid-column>
    <uni-datagrid-column title="Progress" field="progress" format="progress" [formatOptions]="{total: 1, color: 'success'}"></uni-datagrid-column>
    <uni-datagrid-column title="Alerts" field="alerts" format="badge" [formatOptions]="{color: 'error', align: 'center'}"></uni-datagrid-column>
</uni-datagrid>
```

### Ejemplo de celdas personalizadas

```html
<uni-datagrid [data]="data" (cellClick)="log('Cell clicked', $event)" (rowClick)="log('Row clicked', $event)" [highlightCell]="true" [highlightRow]="false">
    <uni-datagrid-column field="img" format="image" [sortable]="false" width="0.2"></uni-datagrid-column>
    <uni-datagrid-column title="First name" field="name" sort="asc">
        <uni-datagrid-cell *cellVariables="let user;">
            <strong>{{user.name}}</strong>
            <p>{{user.birth | formatDate : 'ddd DD MMM, YYYY'}}</p>
        </uni-datagrid-cell>
    </uni-datagrid-column>
    <uni-datagrid-column [sortable]="false" [clickPropagation]="false" [highlightCell]="false">
        <uni-datagrid-cell *cellVariables="let user">
            <uni-row>
                <uni-input placeholder="units" [(model)]="user.units"></uni-input>
                <uni-button label="Add to cart" color="primary" size="small" (click)="log('Add to cart', {user: user, units: user['units']})"></uni-button>
            </uni-row>
        </uni-datagrid-cell>
    </uni-datagrid-column>
</uni-datagrid>
```

### Ejemplo de filas personalizadas

```html
<uni-datagrid [data]="data" [highlightCell]="true" [pageable]="true" [pageSize]="5" [deletable]="true" deleteConfirm="modal">
    <uni-datagrid-column title="First name" field="name"></uni-datagrid-column>
    <uni-datagrid-column title="Date of birth" field="birth"></uni-datagrid-column>
    <uni-datagrid-column title="Progress" field="progress"></uni-datagrid-column>
    <uni-datagrid-column title="Alerts" field="alerts"></uni-datagrid-column>

    <uni-datagrid-row *rowVariables="let user; let i = i">
        <uni-datagrid-cell>
            <h3>{{i+1}}. {{user?.name}}</h3>
        </uni-datagrid-cell>
        <uni-datagrid-cell width="3">
            <p>{{user?.birth | formatDate : 'ddd DD MMM, YYYY'}}</p>
        </uni-datagrid-cell>
    </uni-datagrid-row>
</uni-datagrid>
```

### Inputs

| Name          | Type                        | Default                     | Description                                                                                                                                                                                                                                                                          |
| ------------- | --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| local         | `boolean`                   | `true`                      | Indica si el datagrid debe ejecutar internamienta las operaciones de ordenar, paginar, borrar etc. (`true`) o debe delegarlo en el padre (`false`) simplemente emitiendo eventos.                                                                                                    |
| idField       | `string`                    | `'id'`                      | La clave del atributo que funciona como identificador único de los objetos. Es el que se utiliza para notificar los eventos `selectedChange` y `delete`. Si algún objeto de la colección no contiene este campo, el datagrid emitirá los objetos completos en los eventos nombrados. |
| data          | `Array<Object>`             | `null`                      | Datos a renderizar en el datagrid                                                                                                                                                                                                                                                    |
| selectable    | `boolean`                   | `false`                     | Indica si las filas se pueden seleccionar por el usuario                                                                                                                                                                                                                             |
| selected      | `string[]`                  | `[]`                        | Claves de las filas seleccionadas                                                                                                                                                                                                                                                    |
| deletable     | `boolean`                   | `false`                     | Indica si se habilita el borrado de items o no                                                                                                                                                                                                                                       |
| deleteConfirm | `'inline'` `'modal'`        | `'inline'`                  | Indica el formato en que se pide confirmación del borrado                                                                                                                                                                                                                            |
| pageable      | `boolean`                   | `false`                     | Indica si se habilita la paginación de items en el datagrid                                                                                                                                                                                                                          |
| pageSize      | `number`                    | `10`                        | Indica el tamaño de página                                                                                                                                                                                                                                                           |
| page          | `number`                    | `0`                         | La página seleccionada                                                                                                                                                                                                                                                               |
| totalItems    | `number`                    | `undefined`                 | El número total de elementos. Sólo es útil si `local = false` ya que en ese caso la paginación se realiza de manera externa, y el número total de ítems puede ser mayor que los introducidos en el *datagrid*.                                                                       |
| sortable      | `boolean`                   | `true`                      | Indica si los ítems se pueden ordenar en clave a una columna (`true`) o no (`false`)                                                                                                                                                                                                 |
| sort          | `IUniDataSort`              | `{field: null, dir: false}` | El campo y la dirección por la que se deben ordenar los ítems                                                                                                                                                                                                                        |
| filterable    | `boolean`                   | `false`                     | Indica si los ítems se pueden filtrar en base a una función o no                                                                                                                                                                                                                     |
| filter        | `UniFilter`                 | `undefined`                 | Filtro actual aplicado a los ítems en formato clave-valor                                                                                                                                                                                                                            |
| filterFn      | `(item, filter) => boolean` | `undefined`                 | Función ejecutada para filtrar los ítems en local (`local = true`), que recibe los elementos uno a uno junto con el filtro. Y devuelve un booleano si el elemnto supera el filtro                                                                                                    |
| highlightCell | `boolean`                   | `false`                     | Indica si la celda debe resaltarse al pasar el ratón sobre ella                                                                                                                                                                                                                      |
| highlightRow  | `boolean`                   | `true`                      | Indica si la fila debe resaltarse al pasar el ratón sobre ella                                                                                                                                                                                                                       |
| showLabels    | `boolean`                   | `false`                     | Indica si se deben mostrar las etiquetas junto a los valores en las celdas. Útil para visualizaciones no tabuilares.                                                                                                                                                                 |

### Outputs

| Name           | Type                  | Description                                                                                                                                                                                                                      |
| -------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataChange     | `Array<Object>`       | Indica cambios en los items introducidos                                                                                                                                                                                         |
| selectedChange | `string[]` `Object[]` | Notifica cambios en los items seleccionados. Devuelve los identificadores, valor del atributo `idField`, o el objeto completo en el caso de que alguno de la colección no tenga definido el atributo especificado por `idField`. |
| delete         | `string[]` `Object[]` | Notifica cuando ciertos items se han borrado. Funciona de manera similar a `selectedChange`                                                                                                                                      |
| pageChange     | `number`              | Notifica cuando se ha seleccionado un cambio de página                                                                                                                                                                           |
| sortChange     | `IUniDataSort`        | Notifica un cambio en la ordenación. Devuelve un objeto en formato `{field: string, dir: boolean}`                                                                                                                               |
| cellClick      | `IUniDataCellEvent`   | Notifica cuando se clica una celda. Devuelve un objeto de tipo `{i: number, j: number, cell: any, column: Object, row: Object}`                                                                                                  |
| rowClick       | `IUniDataRowEvent`    | Notifica cuando se clica una fila. Devuelve un objeto de tipo `{i: number, row: Object}`                                                                                                                                         |

## Sub-components

Sólo tienen sentido usados dentro de un datagrid.

| Component       | Selector                | Status              | Docs                    |
| --------------- | ----------------------- | ------------------- | ----------------------- |
| Datagrid cell   | `<uni-datagrid-cell>`   | :large_blue_circle: | [+ Info](cell/README)   |
| Datagrid column | `<uni-datagrid-column>` | :large_blue_circle: | [+ Info](column/README) |
| Datagrid row    | `<uni-datagrid-row>`    | :large_blue_circle: | [+ Info](row/README)    |
| Datagrid header | `<uni-datagrid-header>` | :large_blue_circle: | [+ Info](header/README) |
| Datagrid delete | `<uni-datagrid-delete>` | :large_blue_circle: | [+ Info](delete/README) |

## Mejoras previstas (TODO)

- Hacer traducible el texto del paginador
- Configurable el ancho de las columnas
