Time picker
===================
`uni-time-picker`
---
:white_check_mark: Stable

Selector de hora con reloj auxiliar.

## Usage

### Ejemplo

```html
<uni-time-picker label="Etiqueta del input" ([model])="checked"></uni-time-picker>
```

### Inputs

| Name     | Type             | Default     | Description                                                                                   |
| -------- | ---------------- | ----------- | --------------------------------------------------------------------------------------------- |
| name     | `string`         | `''`        | Name del input de cara a usarse en formularios                                                |
| label    | `string`         | `''`        | Etiqueta textual del input                                                                    |
| color    | `UniColor`       | `''`        | Color del fondo y del contenido                                                               |
| disabled | `boolean`        | `false`     | Status deshabilitado que impide la manipulación del input                                     |
| model    | `string` (hh:mm) | `undefined` | Valor introducido en el input                                                                 |
| value    | `string` (hh:mm) | `undefined` | Valor por defecto del input                                                                   |
| debounce | `number`         | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague |
| inline   | `boolean`        | `false`     | Colocar el reloj flotante (`false`) o en linea a continuación del input (`true`)              |

### Outputs

| Name        | Type      | Description                                              |
| ----------- | --------- | -------------------------------------------------------- |
| modelChange | `boolean` | Notifica cuando ha habido un cambio de valor en el input |
| uniFocus    | `Event`   | Notifica cuando se ha hecho puesto el foco en el input   |
| uniBlur     | `Event`   | Notifica cuándo se ha quitado el foco del input          |

## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled` y de `color`
