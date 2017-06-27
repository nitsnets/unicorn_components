List
===================
`uni-list`
---
:blue_circle: Initial

Listado simple con funciones de ordenado, selección y borrado de elementos

## Uso

## Ejemplo simple

```html
<uni-list
    [data]="data"
    [sortable]="true"
    [selectable]="true"
    [deletable]="true"
    (delete)="bar($event)"
></uni-list>

```

### Atributos de entrada

| Nombre         | Tipo              | Por defecto | Descripción 
| -------------- | ----------------- | ----------- | -----------
| local          | `boolean`         | `true`      | Indica si se debe gestionar la selección de intems de manera interna en el componente
| sortable       | `boolean`         | `false`     | Indica si se habilita la reordenación de items mediante drag&drop
| selectable     | `boolean`         | `false`     | Indica si se pueden seleccionar items
| deletable      | `boolean`         | `false`     | Indica si se pueden borrar items
| placeholder    | `string`          | `undefined` | El texto a visualizar para un ítem sin nombre
| itemSelected   | `UniListItem`     | `undefined` | El item seleccionado
| data           | `UniListItem[]`   | `undefined` | El conjunto de items a vsualizar en la lista

### Eventos de salida

| Nombre                | Tipo                                 | Descripción
| --------------------- | ------------------------------------ | -----------
| itemSelectedChange    | `UniLIstItem`                        | Notifica cuando se selecciona un nuevo item
| delete                | `{index: number, item: UniLIstItem}` | Notifica cuando se borra un item
| edit                  | `{index: number, item: UniLIstItem}` | Notifica cuando se edita un item
| sort                  | `UniLIstItem[]`                      | Notifica cuando se reordenan los items
