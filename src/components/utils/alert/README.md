Alert
===================
`uni-alert`
---
:white_check_marck: Stable

Contenedor enfatizado para resaltar mensajes

## Usage

## Ejemplo simple

```html
<uni-alert icon="check">
    Contenido de la alerta <strong>enriquecido</strong>
</uni-alert>

```

### Inputs

| Name   | Type         | Default | Description 
| -------- | ------------ | ----------- | -----------
| icon     | `string`     | `undefined` | Icono que encabeza la alerta
| color    | `UniColor`   | `undefined` | Color aplicado al fondo y texto de la alerta
| closable | `boolean`    | `false`     | Indica si la alerta se puede cerrar

### Outputs

| Name          | Type      | Description
| --------------- | --------- | -----------
| close           | `void`    | Notifica cuando la alerta se ha cerrado
