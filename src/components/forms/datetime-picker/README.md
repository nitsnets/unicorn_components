Date time picker
===================
`uni-datetime-picker`
---
:white_check_mark: Stable

Selector de fecha y hora con calendario y reloj auxiliares.

## Usage

### Ejemplo

```html
<uni-datetime-picker label="Etiqueta del botón" ([model])="checked"></uni-datetime-picker>
```

### Inputs

| Name      | Type                                                | Default | Description 
| ----------- | --------------------------------------------------- | ----------- | -----------
| name        | `string`                                            | `''`        | Name del input de cara a usarse en formularios
| label       | `string`                                            | `''`        | Etiqueta textual del input
| color       | `UniColor`                                          | `''`        | Color del fondo y del contenido
| disabled    | `boolean`                                           | `false`     | Status deshabilitado que impide la manipulación del input
| model       | `{date: string, time:String}` (YYYY-MM-DD, hh:mm)   | `undefined` | Valor introducido en el input
| value       | `{date: string, time:String}` (YYYY-MM-DD, hh:mm)   | `undefined` | Valor por defecto del input
| debounce    | `number`                                            | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague
| inline      | `boolean`                                           | `false`     | Colocar el calendario flotante (`false`) o en linea a continuación del input (`true`)
| maxDate     | `string` (YYYY-MM-DD)                               | `undefined` | Fecha máxima que se puede introducir
| minDate     | `string` (YYYY-MM-DD)                               | `undefined` | Fecha mínima que se puede introducir
| rangeFrom   | `string` (YYYY-MM-DD)                               | `undefined` | Inicio del rango si procede
| rangeTo     | `string` (YYYY-MM-DD)                               | `undefined` | Final del rango si procede
| minTime     | `string` (hh:mm)                                    | `undefined` | Hora mínima que se puede introducir
| minTime     | `string` (hh:mm)                                    | `undefined` | Hora mínima que se puede introducir

### Outputs

| Name          | Type      | Description
| --------------- | --------- | -----------
| modelChange     | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input

