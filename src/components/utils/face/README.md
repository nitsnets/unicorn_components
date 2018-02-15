Face
===================
`uni-face`
---
:white_check_mark: Stable

Avatar circular de un usuario. Si el usuario no posee imagen muestra la inicial del nombre. Y si no recibe usuario se muestra el icono elegido.

## Usage

## Ejemplo simple

```html
<uni-face [user]="myUser"></uni-face>

```

### Inputs

| Name   | Type                            | Default | Description 
| -------- | ------------------------------- | ----------- | -----------
| size     | `'small'` `'big'` `null`        | `undefined` | Icono que encabeza la pastilla
| user     | `{image: string, name: string}` | `undefined` | Usuario a visualizar
| icon     | `string`                        | `undefined` | Icono *placeholder*
| badge    | `number`                        | `0`         | Contenido del piloto si procede
