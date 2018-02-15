Button toggle
===================
`uni-button-toggle`
---
:white_check_mark: Stable

Botón con estado: *pulsado* o *no pulsado*.

## Usage

### Ejemplo

```html
<uni-button-toggle label="Etiqueta del botón" [(model)]="checked"></uni-button-toggle>
```

### Inputs

| Name      | Type        | Default | Description 
| ----------- | ----------- | ----------- | -----------
| name        | `string`    | `''`        | Name del input de cara a usarse en formularios
| label       | `string`    | `''`        | Etiqueta textual del botón
| color       | `UniColor`  | `''`        | Color del fondo y del contenido
| disabled    | `boolean`   | `false`     | Status deshabilitado que impide la manipulación del input
| model       | `boolean`   | `false`     | Valor introducido en el input
| value       | `boolean`   | `false`     | Valor por defecto del input
| debounce    | `number`    | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague

### Outputs

| Name          | Type      | Description
| --------------- | --------- | -----------
| modelChange     | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input

## Mejoras previstas (TODO)

- Implementación los eventos `uniFocus` y `uniBlur`.
- Implementación el comportamiento de `disabled`
