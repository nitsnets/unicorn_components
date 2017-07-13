Select
===================
`uni-select`
---
:white_check_mark: Estable

Selector de opciones vitaminado.

## Uso

### Ejemplo básico

```html
<uni-select label="Default select" [(model)]="selectModel" [options]="[
    {value: 1, label: 'Option 1'},
    {value: 2, label: 'Option 2'},
    {value: 3, label: 'Option 3'},
    {value: 4, label: 'Option 4'},
    {value: 5, label: 'Option 5'}
]">
```

### Ejemplo de selección múltiple

```html
<uni-select label="Select multiple" [(model)]="selectModel" [multiple]="true" [options]="[
    {value: 1, label: 'Option 1'},
    {value: 2, label: 'Option 2'},
    {value: 3, label: 'Option 3'},
    {value: 4, label: 'Option 4'},
    {value: 5, label: 'Option 5'}
]">
```

### Atributos de entrada

| Nombre          | Tipo          | Por defecto | Descripción 
| --------------- | ------------- | ----------- | -----------
| local           | `boolean`     | `true`      | Indica si el filtrado de las opciones se debe realizar de manera interna (`true`) o delegarlo en el padre (`false`)
| name            | `string`      | `''`        | Nombre del input de cara a usarse en formularios
| label           | `string`      | `''`        | Etiqueta textual del input
| color           | `UniColor`    | `''`        | Color del fondo y del contenido
| disabled        | `boolean`     | `false`     | Estado deshabilitado que impide la manipulación del input
| model           | `any`         | `false`     | Valor introducido en el input
| value           | `any`         | `false`     | Valor por defecto del input
| debounce        | `number`      | `0`         | Tiempo que debe permanecer el input sin cambios tras un cambio dado para que este se propague
| placeholder     | `string`      | `''`        | Contenido del input cuando no tiene un valor seleccionado
| icon            | `string`      | `undefined` | Nombre del icono que aparece en la parte interior izquierda del input
| multiple        | `boolean`     | `false`     | Activa o desactiva la selección de varias opciones
| clear           | `boolean`     | `false`     | Habilita un botón para limpiar el campo, situado a la derecha del mismo
| options         | `UniOption[]` | `[]`        | El `array` de opciones seleccionables 
| excludedOptions | `any[]`       | `[]`        | Un `array` con las claves de las opciones que no deben mostrarse
| filterable      | `boolean`     | `true`      | Indica si las opciones se pueden filtrar mediante búsqueda textual

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| modelChange     | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input
| search          | `string`  | Notifica cuándo el usuario intenta filtrar las opciones

## Mejoras previstas (TODO)

- Visual del estado `disabled`.
- Implementación el comportamiento de `color`
- Convertir en personalizables y ampliables las opciones de grupo "Select all" y "Select none"
- Habilitar la selección múltiple con `<uni-chip>`.
- Implementar parámetro `local` que filtra las opciones en local o emite eventos para su petición asíncrona
