Image picker
===================
`uni-checkbox`
---
:blue_circle: Inicial

Area donde colocar una imagen para ser subida. Se puede colocar arrastrandolsa o clicando en el area para seleccionarla.

## Uso

### Ejemplo

```html
<uni-image-picker [(model)]="image" height="150"></uni-image-picker>
```

### Atributos de entrada

| Nombre      | Tipo                 | Por defecto     | Descripción 
| ----------- | -------------------- | --------------- | -----------
| name        | `string`             | `''`            | Nombre del input de cara a usarse en formularios
| label       | `string`             | `''`            | Etiqueta textual del input
| color       | `UniColor`           | `''`            | Color del fondo y del contenido
| disabled    | `boolean`            | `false`         | Estado deshabilitado que impide la manipulación del input
| model       | `string`             | `false`         | Valor introducido en el input
| value       | `string`             | `false`         | Valor por defecto del input
| debounce    | `number`             | `0`             | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague
| width       | `number`             | `300`           | Ancho del area contenedora
| height      | `number`             | `150`           | Alto del area contenedora
| imageWidth  | `number`             | `300`           | Ancho deseado de la imagen, motrado en la recomendación. Si no se especifica se toma el valor de `width`
| imageHeight | `number`             | `150`           | Alto deseado de la imagen, motrado en la recomendación. Si no se especifica se toma el valor de `height`
| imageData   | `string` (base64)    | `undefined`     | URL o cadena en base64 que contiene la imagen que se visualizará en el area contenedora

### Eventos de salida

| Nombre          | Tipo                | Descripción
| --------------- | ------------------- | -----------
| modelChange     | `boolean`           | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`             | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`             | Notifica cuándo se ha quitado el foco del input
| imageDataChange | `string` (base64)   | Notifica cuándo ha cambiado la imagen contenedora

## Mejoras previstas (TODO)

- Visual del estado `disabled`.
- Implementación el comportamiento de `color`
