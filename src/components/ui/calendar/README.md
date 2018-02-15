Calendar
===================
`uni-calendar`
---
:white_check_mark: Stable

Calendario para la selección de días

## Usage

## Ejemplo

```html
<uni-calendar [(model)]="daySelected"></uni-calendar>
```

### Inputs

| Name      | Type                  | Default     | Description                                    |
| --------- | --------------------- | ----------- | ---------------------------------------------- |
| model     | `string` (YYYY-MM-DD) | `undefined` | Valor introducido en el input                  |
| max       | `string`              | `''`        | Name del campo de cara a usarse en formularios |
| min       | `string`              | `''`        | Name del campo de cara a usarse en formularios |
| rangeFrom | `string`              | `''`        | Name del campo de cara a usarse en formularios |
| rangeTo   | `string`              | `''`        | Name del campo de cara a usarse en formularios |

### Outputs

| Name        | Type                  | Description                                                |
| ----------- | --------------------- | ---------------------------------------------------------- |
| modelChange | `string` (YYYY-MM-DD) | Notifica cuando se ha seleccionado un fichero exitosamente |


## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
- Habilitar la selección de semanas y meses
