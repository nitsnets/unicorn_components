Menu
===================
`uni-menu`
---
:white_check_mark: Stable

Menú desplegable con opciones

## Usage

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

### Inputs

| Name     | Type          | Default | Description                                                                                      |
| -------- | ------------- | ------- | ------------------------------------------------------------------------------------------------ |
| toggle   | `boolean`     | `false` | Indica si un clic en el trigger cierra el popup cuando este está abierto (`true`) o no (`false`) |
| keepOpen | `boolean`     | `false` | Indica si al clicar dentro del popup se debe cerrar (`false`) o no (`true`)                      |
| position | `UniPosition` | `null`  | La posición hacia la que se abre el popup respecto al trigger                                    |

### Outputs

| Name         | Type   | Description                                 |
| ------------ | ------ | ------------------------------------------- |
| openedChange | `void` | Notifica cuando se abre o se cierra el menú |