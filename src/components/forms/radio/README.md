Radio
===================
`uni-radio`
---
:white_check_mark: Stable

Casillas que pueden marcarse o desmarcarse de manera excluyente.

## Usage

### Ejemplo

```html
<uni-radio label="Etiqueta radio 1" ([model])="radio" value="1"></uni-radio>
<uni-radio label="Etiqueta radio 2" ([model])="radio" value="2"></uni-radio>
<uni-radio label="Etiqueta radio 3" ([model])="radio" value="3"></uni-radio>
```

### Inputs

| Name     | Type       | Default | Description                                                                                   |
| -------- | ---------- | ------- | --------------------------------------------------------------------------------------------- |
| name     | `string`   | `''`    | Name del input de cara a usarse en formularios                                                |
| label    | `string`   | `''`    | Etiqueta textual del input                                                                    |
| color    | `UniColor` | `''`    | Color del fondo y del contenido                                                               |
| disabled | `boolean`  | `false` | Status deshabilitado que impide la manipulación del input                                     |
| model    | `boolean`  | `false` | Valor introducido en el input                                                                 |
| value    | `boolean`  | `false` | Valor por defecto del input                                                                   |
| debounce | `number`   | `0`     | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague |

### Outputs

| Name        | Type      | Description                                              |
| ----------- | --------- | -------------------------------------------------------- |
| modelChange | `boolean` | Notifica cuando ha habido un cambio de valor en el input |
| uniFocus    | `Event`   | Notifica cuando se ha hecho puesto el foco en el input   |
| uniBlur     | `Event`   | Notifica cuándo se ha quitado el foco del input          |

## Mejoras previstas (TODO)

- Visual del estado `disabled`.
- Implementación el comportamiento de `color`
- Implementación los eventos `uniFocus` y `uniBlur`.
