Tooltip
===================
`uni-tooltip`
---
:red_circle: Unstable

Contenedor flotante relativo a un elemento

## Usage

### Ejemplo con servicio

```typescript
constructor( private tooltipService: TooltipService ) { }

    openTooltipByCoords(event) {
        this.tooltipService.createTooltip('Esto es el mensaje del tooltip', {
            left: event.clientX,
            top: event.clientY
        });
    }

    openTooltipByElement(event) {
        this.tooltipService.createTooltip('Esto es el mensaje del tooltip', {
            element: event.target,
            position: 'right'
        });
    }
}
```

### Ejemplo con directiva

```html
<span uniTooltip="Mensaje del tooltip"></span>
```

### Atributos de opciones

| Name     | Type                                  | Default     | Description                                                               |
| -------- | ------------------------------------- | ----------- | ------------------------------------------------------------------------- |
| left     | `number`                              | `undefined` | Píxeles desde la izquierda de la pantalla                                 |
| right    | `number`                              | `undefined` | Píxeles desde la derecha de la pantalla                                   |
| top      | `number`                              | `undefined` | Píxeles desde arriba de la pantalla                                       |
| bottom   | `number`                              | `undefined` | Píxeles desde abajo de la pantalla                                        |
| element  | `Element`                             | `undefined` | Elemento al que se adjunta el *tooltip*, debe ir acompañado de `position` |
| position | `'left'` `'right'` `'top'` `'bottom'` | `undefined` | Posición relativa a `element` a la que se coloca el *tooltip*             |
