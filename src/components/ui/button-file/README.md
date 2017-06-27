Button file
===================
`uni-button-file`
---
:white_check_mark: Estable

Botón que abre un selector de ficheros al clicarlo

## Uso

## Ejemplo

```html
<uni-button-file label="File button" fileType=".png" (fileChange)="foo($event)"></uni-button-file>
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
| fileType    | `string`    | `null`      | Indica los ficheros aceptados, con el mismo formato que el atributo `accept` del `<input>` de HTML5

### Eventos de salida

| Nombre     | Tipo      | Descripción
| ---------- | --------- | -----------
| fileChange | `File`    | Notifica cuando se ha seleccionado un fichero exitosamente


## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
