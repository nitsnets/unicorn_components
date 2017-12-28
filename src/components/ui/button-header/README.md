Button header
===================
`uni-button-header`
---
:white_check_mark: Estable

Botón optimizado para aparecer como parte de una barra de cabecera

## Uso

## Ejemplo

```html
<uni-header>
    <uni-button-header icon="plus-circle"></uni-button-header>
    <uni-button-header icon="clock" label="Button with label"></uni-button-header>
    <uni-button-header label="Button just with label"></uni-button-header>
    <uni-button-header label="Button right icon" iconRight="people"></uni-button-header>
</uni-header>
```

### Atributos de entrada

| Nombre      | Tipo        | Por defecto | Descripción 
| ----------- | ----------- | ----------- | -----------
| name        | `string`    | `''`        | Nombre del campo de cara a usarse en formularios
| label       | `string`    | `''`        | Etiqueta textual del botón
| color       | `UniColor`  | `''`        | Color del fondo y del contenido
| disabled    | `boolean`   | `false`     | Estado deshabilitado que impide la manipulación del campo
| type        | `InputType` | `''`        | Puede versar entre `'text' ⎮ 'number' ⎮ 'email' ⎮ 'password' ⎮ 'color'`
| icon        | `string`    | `''`        | Icono a colocar el la parte izquierda interior del campo
| iconRight   | `string`    | `''`        | Icono a colocar el la parte derecha interior del campo
| sublabel    | `string`    | `''`        | Etiqueta secundaria adecuada para botones grandes
| size        | `string`    | `'medium'`  | Indica el tamaño del botón: `small`, `medium` o `large`

## Mejoras previstas (TODO)

- Implementación del `sublabel` para tamaño mediano
- Implementación el comportamiento de `disabled`
