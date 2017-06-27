Clock
===================
`uni-clock`
---
:white_check_mark: Estable

Reloj para la selección de horas y minutos

## Uso

## Ejemplo

```html
<uni-clock [(uniModel)]="timeSelected"></uni-clock>
```

### Atributos de entrada

| Nombre      | Tipo             | Por defecto | Descripción 
| ----------- | ---------------- | ----------- | -----------
| uniModel    | `string` (hh:mm) | `undefined` | Valor introducido en el input

### Eventos de salida

| Nombre         | Tipo             | Descripción
| -------------- | ---------------- | -----------
| uniModelChange | `string` (hh:mm) | Notifica cuando se ha seleccionado un fichero exitosamente


## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
- Habilitar la especificación de rangos de horas seleccionable 
