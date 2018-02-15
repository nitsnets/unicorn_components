Clock
===================
`uni-clock`
---
:white_check_mark: Stable

Reloj para la selección de horas y minutos

## Usage

## Ejemplo

```html
<uni-clock [(model)]="timeSelected"></uni-clock>
```

### Inputs

| Name  | Type             | Default     | Description                   |
| ----- | ---------------- | ----------- | ----------------------------- |
| model | `string` (hh:mm) | `undefined` | Valor introducido en el input |

### Outputs

| Name        | Type             | Description                                                |
| ----------- | ---------------- | ---------------------------------------------------------- |
| modelChange | `string` (hh:mm) | Notifica cuando se ha seleccionado un fichero exitosamente |


## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
- Habilitar la especificación de rangos de horas seleccionable 
