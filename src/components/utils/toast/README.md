Toast
===================
`uni-toast`
---
:red_circle: Unstable

Contenedor emergente con un mesaje informativo

## Usage

## Ejemplo

```typescript
constructor( private toastService: ToastService ) { }

showToast() {
    const options = { duration: 3000 };
    this.toastService.createToast('Esto es el mensaje', options).subscribe();
}
```

### Atributos de opciones

| Name      | Type     | Default     | Description                                             |
| --------- | -------- | ----------- | ------------------------------------------------------- |
| duration  | `string` | `undefined` | Milisegundos que dura abierto el toast                  |
| showClose | `string` | `undefined` | Mostrar o no un botón para cerrarlo de manera prematura |

### Outputs

El método de creación expone una suscripción al cierre del Toast.
