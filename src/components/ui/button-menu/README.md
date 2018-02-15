
Button menu
===================
`uni-button-menu`
---
:white_check_mark: Stable

Botón que abre un menú desplegable con opciones

## Usage

## Ejemplo

```html
<uni-button-menu label="Default button" color="primary">
    <uni-menu-item icon="close" label="Option 1"></uni-menu-item>
    <uni-separator></uni-separator>
    <uni-menu-item icon="check" label="Option 2"></uni-menu-item>
</uni-button-menu>
```

### Inputs

| Name      | Type          | Default         | Description                                                             |
| --------- | ------------- | --------------- | ----------------------------------------------------------------------- |
| name      | `string`      | `''`            | Name del campo de cara a usarse en formularios                          |
| label     | `string`      | `''`            | Etiqueta textual del botón                                              |
| color     | `UniColor`    | `''`            | Color del fondo y del contenido                                         |
| disabled  | `boolean`     | `false`         | Status deshabilitado que impide la manipulación del campo               |
| type      | `ButtonType`  | `''`            | Puede versar entre `'text' ⎮ 'number' ⎮ 'email' ⎮ 'password' ⎮ 'color'` |
| icon      | `string`      | `''`            | Icono a colocar el la parte izquierda interior del campo                |
| iconRight | `string`      | `''`            | Icono a colocar el la parte derecha interior del campo                  |
| sublabel  | `string`      | `''`            | Etiqueta secundaria adecuada para botones grandes                       |
| size      | `string`      | `'medium'`      | Indica el tamaño del botón: `small`, `medium` o `large`                 |
| poisition | `UniPosition` | `'bottom-left'` | Posición relativa al botón a la que debe aprecer el menú desplegable    |

## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
- No se controla la redimensión y la apertura en esquinas
- Falta la implementación correcta en mobile
- No se controla el scroll para reposicionarlo
