Menu
===================
`uni-menu`
---
:white_check_mark: Estable

Menú desplegable con opciones

## Uso

## Ejemplo simple

```html
<uni-menu>
    <uni-button uniMenuTrigger icon="more-v"></uni-button>
    <uni-menu-container>
        <uni-menu-item label="Option 1" icon="check"></uni-menu-item>
        <uni-menu-item label="Option 2" icon="check"></uni-menu-item>
        <uni-menu-item label="Option 3" icon="check"></uni-menu-item>
    </uni-menu-container>
</uni-menu>

```

### Atributos de entrada

| Nombre   | Tipo              | Por defecto | Descripción 
| -------- | ----------------- | ----------- | -----------
| toggle   | `boolean`         | `false`     | Indica si un clic en el trigger cierra el popup cuando este está abierto (`true`) o no (`false`) 
| keepOpen | `boolean`         | `false`     | Indica si al clicar dentro del popup se debe cerrar (`false`) o no (`true`)
| position | `UniPosition`     | `null`      | La posición hacia la que se abre el popup respecto al trigger 

### Eventos de salidas

| Nombre       | Tipo           | Descripción
| ------------ | -------------- | -----------
| openedChange | `void`         | Notifica cuando se abre o se cierra el menú