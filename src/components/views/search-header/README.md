Search header
===================
`uni-search-header`
---
:white_check_mark: Estable

Campo de busqueda combinado con una barra de cabecera

## Uso

### Ejemplos

```html
<uni-search-hedaer ([model])="searchQuery"></uni-search-hedaer>
```

### Atributos de entrada

| Nombre      | Tipo        | Por defecto | Descripción 
| ----------- | ----------- | ----------- | -----------
| model    | `string`    | `''`        | Valor introducido en el campo
| value       | `string`    | `''`        | Valor por defecto del campo
| debounce    | `number`    | `0`         | Tiempo que debe permanecer el campo sin cambios tras un cambio dado para que este se propague
| placeholder | `string`    | `''`        | Texto que aparece en el campo cuando no tiene contenido

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| modelChange  | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input

## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
