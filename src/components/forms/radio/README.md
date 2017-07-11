Radio
===================
`uni-radio`
---
:white_check_mark: Estable

Casillas que pueden marcarse o desmarcarse de manera excluyente.

## Uso

### Ejemplo

```html
<uni-radio label="Etiqueta radio 1" ([uniModel])="radio" value="1"></uni-radio>
<uni-radio label="Etiqueta radio 2" ([uniModel])="radio" value="2"></uni-radio>
<uni-radio label="Etiqueta radio 3" ([uniModel])="radio" value="3"></uni-radio>
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

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| uniModelChange  | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input

## Mejoras previstas (TODO)

- Visual del estado `disabled`.
- Implementación el comportamiento de `color`
- Implementación los eventos `uniFocus` y `uniBlur`.
- Creación de un componente `<uni-radio-group>` que gestione el estado del conjunto de radios
