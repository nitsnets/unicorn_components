Tree
===================
`uni-tree`
---
:white_circle: Previsto

Visualización de jerarquías en árbol, reordenables arrastrando

## Usage

## Ejemplo simple

```html
<uni-tree
    [data]="100"
    [sortable]="true"
></uni-tree>

```

### Inputs

| Name       | Type       | Default | Description                                                                                                    |
| ---------- | ---------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| data       | `any[]`    | `[]`    | Array de objetos de cualquier naturaleza. Para dar lugar a jerarquías se deberá emplear el atributo `children` |
| selected   | `string[]` | `[]`    | Array de identificadores de los ítems seleccionados                                                            |
| sortable   | `boolean`  | `false` | Habilita el árbol para ser reordenable por el usuario                                                          |
| selectable | `boolean`  | `false` | Habilita los items para ser seleccionados                                                                      |
| deletable  | `boolean`  | `false` | Habilita los ítems para ser borrados                                                                           |
| editable   | `boolean`  | `false` | Habilita los ítems para ser editables                                                                          |

### Outputs

| Name           | Type       | Description                                                                        |
| -------------- | ---------- | ---------------------------------------------------------------------------------- |
| orderChange    | `any[]`    | Notifica cuando se han reordenado los elementos devolviendo la nueva disposición   |
| selectedChange | `string[]` | Notifica cuando se ha seleccionado un item con la selección total en listado de ID |
| delete         | `string`   | Notifica cuando se ha borrado un item con su ID                                    |
| edit           | `string`   | Notifica cuando se ha editado un item con su ID                                    |
