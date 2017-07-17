Popup
===================
`uni-popup`
---
:white_check_mark: Estable

Contenedor flotante auxiliar anclado a un elemento que llamamos *trigger*.

## Uso

### Ejemplo básico

```html
<uni-popup>
    <span uniPopupTrigger>
        Clica para abri el popup
    </span>
    <uni-popup-container>
        Contenido del popup
    </uni-popup-container>
</uni-popup>

```

### Ejemplo completo
```html
<uni-popup ([opened])="popupOpened">
    <span uniPopupTrigger>
        Clica para abri el popup
    </span>
    <uni-popup-container closable>
        Contenido del popup
    </uni-popup-container>
</uni-popup>
```

### Atributos de entrada


| Nombre      | Tipo                 | Por defecto | Descripción 
| ----------- | -------------------- | ----------- | -----------
| opened      | `boolean`            | `false`     | Inica si el popup debe estar abierto (`true`) o no (`false`)
| toggle      | `boolean`            | `false`     | Indica si un clic en el trigger cierra el popup cuando este está abierto (`true`) o no (`false`)
| keepOpen    | `boolean`            | `true`      | Indica si al clicar dentro del popup se debe cerrar (`false`) o no (`true`)
| position    | `UniPopupPosition`   | `false`     | La posición hacia la que se abre el popup respecto al trigger
| closable    | `boolean`            | `true`      | Si debe aparecer el botón de cerrar (`true`) o no (`false`)

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| openedChange    | `boolean` | Notifica cuándo el popup se ha abierto (`true`) o cerrado (`false`)

## Mejoras previstas (TODO)

- Controlar la apertura en esquinas, con redimensión y scroll
- Controlar la visualización en mobile
