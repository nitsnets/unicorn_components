Daterange picker
===================
`uni-daterange-picker`
---
:white_check_mark: Stable

Botón con estado: *pulsado* o *no pulsado*.

## Usage

### Ejemplo

```html
<uni-daterange-picker label="Etiqueta del botón" ([model])="checked"></uni-daterange-picker>
```

### Inputs

| Name      | Type                                              | Default | Description 
| ----------- | ------------------------------------------------- | ----------- | -----------
| name        | `string`                                          | `''`        | Name del input de cara a usarse en formularios
| label       | `string`                                          | `''`        | Etiqueta textual del input
| color       | `UniColor`                                        | `''`        | Color del fondo y del contenido
| disabled    | `boolean`                                         | `false`     | Status deshabilitado que impide la manipulación del input
| model       | `{from: string, to: string}` (ambos YYYY-MM-DD)   | `undefined` | Valor introducido en el input
| value       | `{from: string, to: string}` (ambos YYYY-MM-DD)   | `undefined` | Valor por defecto del input0
| debounce    | `number`                                          | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague
| combo       | `boolean`                                         | `false`     | Mostrar los inputs de `from` y `to` en un popup flotante
| showArrows  | `boolean`                                         | `false`     | Mostrar las flechas para navegar intervalos hacia delante o atrás
| comboLabel  | `string`                                          | `''`        | Etiqueta que acompaña al input del combo. Aplica cuando `combo` es `true`
| min         | `string`                                          | `''`        | Valor mínimo posible del input en formato `YYYY-MM-DD`
| max         | `string`                                          | `''`        | Valor máximo posible del input en formato `YYYY-MM-DD`
| fromLabel   | `string`                                          | `''`        | Etiqueta que acompaña al input de `from`
| toLabel     | `string`                                          | `''`        | Etiqueta que acompaña al input de `to`

### Outputs

| Name          | Type                                            | Description
| --------------- | ----------------------------------------------- | -----------
| modelChange     | `{from: string, to: string}` (ambos YYYY-MM-DD) | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`                                         | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`                                         | Notifica cuándo se ha quitado el foco del input

## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled` y de `color`
