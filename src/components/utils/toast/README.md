Toast
===================
`uni-toast`
---
:red_circle: Inestable

Contenedor emergente con un mesaje informativo

## Uso

## Ejemplo

```typescript
constructor( private toastService: ToastService ) { }

showToast() {
    const options = { duration: 3000 };
    this.toastService.createToast('Esto es el mensaje', options).subscribe();
}
```

### Atributos de opciones

| Nombre    | Tipo         | Por defecto | Descripción 
| --------- | ------------ | ----------- | -----------
| duration  | `string`     | `undefined` | Milisegundos que dura abierto el toast
| showClose | `string`     | `undefined` | Mostrar o no un botón para cerrarlo de manera prematura

### Eventos de salidas

El método de creación expone una suscripción al cierre del Toast.
