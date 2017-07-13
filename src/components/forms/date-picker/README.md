Date picker
===================
`uni-date-picker`
---
:white_check_mark: Estable

Selector de fecha con calendario auxiliar.

## Uso

### Ejemplo

```html
<uni-date-picker label="Etiqueta del botón" ([model])="checked"></uni-date-picker>
```

### Atributos de entrada

| Nombre      | Tipo                    | Por defecto | Descripción 
| ----------- | ----------------------- | ----------- | -----------
| name        | `string`                | `''`        | Nombre del input de cara a usarse en formularios
| label       | `string`                | `''`        | Etiqueta textual del input
| color       | `UniColor`              | `''`        | Color del fondo y del contenido
| disabled    | `boolean`               | `false`     | Estado deshabilitado que impide la manipulación del input
| model       | `string` (YYYY-MM-DD)   | `undefined` | Valor introducido en el input
| value       | `string` (YYYY-MM-DD)   | `undefined` | Valor por defecto del input
| debounce    | `number`                | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague
| inline      | `boolean`               | `false`     | Colocar el calendario flotante (`false`) o en linea a continuación del input (`true`)
| maxDate     | `string` (YYYY-MM-DD)   | `undefined` | Fecha máxima que se puede introducir
| minDate     | `string` (YYYY-MM-DD)   | `undefined` | Fecha mínima que se puede introducir
| rangeFrom   | `string` (YYYY-MM-DD)   | `undefined` | Inicio del rango si procede
| rangeTo     | `string` (YYYY-MM-DD)   | `undefined` | Final del rango si procede

### Eventos de salida

| Nombre          | Tipo                  | Descripción
| --------------- | --------------------- | -----------
| modelChange     | `string` (YYYY-MM-DD) | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`               | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`               | Notifica cuándo se ha quitado el foco del input

## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled` y de `color`
- Habilitar la selección de semanas y meses
