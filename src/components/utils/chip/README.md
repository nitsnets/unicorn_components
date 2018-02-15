Chip
===================
`uni-chip`
---
:large_blue_circle: Initial

Pastilla de texto frecuentemente usada para representar etiquetas o *tags*

## Usage

## Ejemplo simple

```html
<uni-chip
    label="Contenido"
    [closable]="true"
    (close)="bar()"
></uni-chip>

```

### Inputs

| Name     | Type       | Default     | Description                                    |
| -------- | ---------- | ----------- | ---------------------------------------------- |
| icon     | `string`   | `undefined` | Icono que encabeza la pastilla                 |
| label    | `string`   | `undefined` | Contendio textual eneiquecido de la pastilla   |
| color    | `UniColor` | `undefined` | Color aplicado al fondo y texto de la pastilla |
| disabled | `boolean`  | `false`     | Bloquea la interacción                         |
| closable | `boolean`  | `false`     | Indica si la pastilla se puede cerrar          |

### Outputs

| Name  | Type   | Description                               |
| ----- | ------ | ----------------------------------------- |
| close | `void` | Notifica cuando se ha cerrado la pastilla |
