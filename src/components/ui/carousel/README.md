Carousel
===================
`uniCarousel`
---
:blue_circle: Initial

Carousel básico con navegación pinchando y arrastrando. Encapsula la librería [Flickity](https://flickity.metafizzy.co/).

## Uso

## Ejemplo

```html
<div uniCarousel (select)="foo($event)">
    <div uniCarouselCell>1</div>
    <div uniCarouselCell>2</div>
    <div uniCarouselCell>3</div>
</div>
```

### Atributos de entrada

| Nombre      | Tipo     | Por defecto | Descripción 
| ----------- | -------- | ----------- | -----------
| model    | `Object` | `{}`        | Opciones de configuración de Flickity

### Eventos de salida

Una encapsulación de los [eventos de Flickity](https://flickity.metafizzy.co/events.html).

| Nombre         | Tipo                                        | Descripción
| -------------- | ------------------------------------------- | -----------
| select         | `number`                                    | Seleccionado un slide. Devuelve el índice del mismo
| settle         | `number`                                    | Navegación completada a un slide. Devuelve el índice del mismo
| scroll         | `number`                                    | Movimiento realializado sobre el carousel. Devuelve el progreso en el eje.
| dragStart      | `{event, pointer}`                          | Evento al comenzar el arrastrado.
| dragMove       | `{event, pointer}`                          | Evento al mover el arrastrado.
| dragEnd        | `{event, pointer}`                          | Evento al acabar el arrastrado.
| pointerDown    | `{event, pointer}`                          | Evento al mover un clic.
| pointerMove    | `{event, pointer}`                          | Evento al mover el puntero.
| pointerUp      | `{event, pointer}`                          | Evento al finalizar un clic.
| staticClick    | `{event, pointer, cellElement, cellIndex}` | Click que no genera otros eventos entre que se pulsa y se suelta
| lazyLoad       | `{event, cellElement}`                      | Cuando se termina de cargar una imagen por *lazy load*
| bgLazyLoad     | `{event, cellElement}`                      | Cuando se termina de cargar una imagen por *lazy load* en background
