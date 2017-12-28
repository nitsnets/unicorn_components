Clock
===================
`uni-clock`
---
:white_check_mark: Estable

Reloj para la selección de horas y minutos

## Uso

## Ejemplo

```html
<uni-clock [(model)]="timeSelected"></uni-clock>
```

### Atributos de entrada

| Nombre      | Tipo             | Por defecto | Descripción 
| ----------- | ---------------- | ----------- | -----------
| model       | `string` (hh:mm) | `undefined` | Valor introducido en el input

### Eventos de salida

| Nombre         | Tipo             | Descripción
| -------------- | ---------------- | -----------
| modelChange    | `string` (hh:mm) | Notifica cuando se ha seleccionado un fichero exitosamente


## Mejoras previstas (TODO)

- Implementación el comportamiento de `disabled`
- Habilitar la especificación de rangos de horas seleccionable 
