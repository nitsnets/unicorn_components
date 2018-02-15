Paginator
===================
`uni-paginator`
---
:white_check_mark: Stable

Selector de página

## Usage

## Ejemplo simple

```html
<uni-paginator
    [totalElements]="100"
    ([selected])="pageSelected"
></uni-paginator>

```

### Inputs

| Name          | Type     | Default     | Description                                                                           |
| ------------- | -------- | ----------- | ------------------------------------------------------------------------------------- |
| totalElements | `number` | `undefined` | El número total de elementos para calcular el número de páginas respecto a `pageSize` |
| pageSize      | `number` | `10`        | El tamaño de página para calcular el número de páginas repecto a `totalElements`      |
| selected      | `number` | `0`         | La página seleccionada                                                                |

### Outputs

| Name           | Type     | Description                                           |
| -------------- | -------- | ----------------------------------------------------- |
| selectedChange | `number` | Notifica cuando se ha cambiado la página seleccionada |
