Paginator
===================
`uni-paginator`
---
:white_check_mark: Estable

Selector de página

## Uso

## Ejemplo simple

```html
<uni-paginator
    [totalElements]="100"
    ([selected])="pageSelected"
></uni-paginator>

```

### Atributos de entrada

| Nombre         | Tipo         | Por defecto | Descripción 
| -------------- | ------------ | ----------- | -----------
| totalElements  | `number`     | `undefined` | El número total de elementos para calcular el número de páginas respecto a `pageSize`
| pageSize       | `number`     | `10`        | El tamaño de página para calcular el número de páginas repecto a `totalElements`
| selected       | `number`     | `0`         | La página seleccionada

### Eventos de salidas

| Nombre         | Tipo           | Descripción
| -------------- | -------------- | -----------
| selectedChange | `number`       | Notifica cuando se ha cambiado la página seleccionada
