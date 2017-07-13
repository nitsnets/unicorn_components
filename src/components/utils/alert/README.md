Alert
===================
`uni-alert`
---
:white_check_marck: Estable

Contenedor enfatizado para resaltar mensajes

## Uso

## Ejemplo simple

```html
<uni-alert icon="check">
    Contenido de la alerta <strong>enriquecido</strong>
</uni-alert>

```

### Atributos de entrada

| Nombre   | Tipo         | Por defecto | Descripción 
| -------- | ------------ | ----------- | -----------
| icon     | `string`     | `undefined` | Icono que encabeza la alerta
| color    | `UniColor`   | `undefined` | Color aplicado al fondo y texto de la alerta
| closable | `boolean`    | `false`     | Indica si la alerta se puede cerrar

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| close           | `void`    | Notifica cuando la alerta se ha cerrado
