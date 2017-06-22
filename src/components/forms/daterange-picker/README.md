Daterange picker
===================
`uni-daterange-picker`
---
:white_check_mark: Estable

Botón con estado: *pulsado* o *no pulsado*.

## Uso

### Ejemplo

```html
<uni-datepicker label="Etiqueta del botón" ([uniModel])="checked"></uni-checkbox>
```

### Atributos de entrada

| Nombre      | Tipo                                              | Por defecto | Descripción 
| ----------- | ------------------------------------------------- | ----------- | -----------
| name        | `string`                                          | `''`        | Nombre del input de cara a usarse en formularios
| label       | `string`                                          | `''`        | Etiqueta textual del input
| color       | `UniColor`                                        | `''`        | Color del fondo y del contenido
| disabled    | `boolean`                                         | `false`     | Estado deshabilitado que impide la manipulación del input
| uniModel    | `{from: string, to: string}` (ambos YYYY-MM-DD)   | `undefined` | Valor introducido en el input
| value       | `string` (YYYY-MM-DD)                             | `undefined` | Valor por defecto del input
| debounce    | `number`                                          | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague
| combo       | `boolean`                                         | `false`     | Mostrar los inputs de `from` y `to` en un popup flotante
| showArrows  | `boolean`                                         | `false`     | Mostrar las flechas para navegar intervalos hacia delante o atrás
| comboLabel  | `string`                                          | `''`        | Etiqueta que acompaña al input del combo. Aplica cuando `combo` es `true`
| fromLabel   | `string`                                          | `''`        | Etiqueta que acompaña al input de `from`
| toLabel     | `string`                                          | `''`        | Etiqueta que acompaña al input de `to`

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| uniModelChange  | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input

## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled` y de `color`
- Añadir parámetros `maxDate` y `minDate`
