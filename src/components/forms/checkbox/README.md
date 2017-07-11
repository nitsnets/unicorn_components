Checkbox
===================
`uni-checkbox`
---
:white_check_mark: Estable

Casilla que puede marcarse o desmarcarse.

## Uso

### Ejemplo

```html
<uni-checkbox label="Etiqueta del botón" ([uniModel])="checked"></uni-checkbox>
```

### Atributos de entrada

| Nombre      | Tipo        | Por defecto | Descripción 
| ----------- | ----------- | ----------- | -----------
| name        | `string`    | `''`        | Nombre del input de cara a usarse en formularios
| label       | `string`    | `''`        | Etiqueta textual del input
| color       | `UniColor`  | `''`        | Color del fondo y del contenido
| disabled    | `boolean`   | `false`     | Estado deshabilitado que impide la manipulación del input
| uniModel    | `boolean`   | `false`     | Valor introducido en el input
| value       | `boolean`   | `false`     | Valor por defecto del input
| debounce    | `number`    | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague
| partial     | `boolean`   | `false`     | Indica que el valor del checkbox es indefinido. Normalmente se usa cuando no es ni falso ni verdadero. Solo se activa este estado cuando el `uniModel` es `false`

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| uniModelChange  | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input

## Mejoras previstas (TODO)

- Visual del estado `disabled`.
- Implementación los eventos `uniFocus` y `uniBlur`.
- Implementación el comportamiento de `color`
