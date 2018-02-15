Slider range
===================
`uni-slider-range`
---
:large_blue_circle: Initial

Selector de rango mediante barra deslizante

## Usage

### Ejemplo

```html
<uni-slider-range [(model)]="myModel"></uni-slider-range>
```

### Inputs

| Name     | Type       | Default | Description                                                                                   |
| -------- | ---------- | ------- | --------------------------------------------------------------------------------------------- |
| name     | `string`   | `''`    | Name del input de cara a usarse en formularios                                                |
| label    | `string`   | `''`    | Etiqueta textual del input                                                                    |
| color    | `UniColor` | `''`    | Color del fondo y del contenido                                                               |
| disabled | `boolean`  | `false` | Status deshabilitado que impide la manipulación del input                                     |
| model    | `number`   | `false` | Valor introducido en el input                                                                 |
| value    | `boolean`  | `false` | Valor por defecto del input                                                                   |
| debounce | `number`   | `0`     | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague |
| min      | `number`   | `0`     | Valor mínimo seleccionable por el input                                                       |
| max      | `boolean`  | `10`    | Valor máximo seleccionable por el input                                                       |

### Outputs

| Name        | Type      | Description                                              |
| ----------- | --------- | -------------------------------------------------------- |
| modelChange | `boolean` | Notifica cuando ha habido un cambio de valor en el input |
| uniFocus    | `Event`   | Notifica cuando se ha hecho puesto el foco en el input   |
| uniBlur     | `Event`   | Notifica cuándo se ha quitado el foco del input          |

## Mejoras previstas (TODO)

- Implementar la opción de añadir ticks con steps
- Implementar la opción de mostrar el valor actual en un label
- Implementar el comportamiento de disabled
- Implementar el refresco cuando sucende una actualización externa del modelo
