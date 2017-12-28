Button
===================
`uni-button`
---
:white_check_mark: Estable

Botón clicable vitaminado

## Uso

## Ejemplo básico

```html
<uni-button label="Success button" (click)="foo()"></uni-button>
```

### Ejemplo de botón grande

```html
<uni-button icon="suitcase" label="Warning button" sublabel="Sublabel" size="large" color="warning"></uni-button>
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
