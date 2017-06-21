Button toggle
===================
`uni-button-toggle`
---
:red_circle: Inestable

Botón con estado: *pulsado* o *no pulsado*.

## Uso

### Ejemplo básico

```html
<uni-button-toggle label="Etiqueta de la cabecera">
    Quis id nostrud sit cupidatat magna dolor commodo ullamco deserunt id est laboris pariatur. 
</uni-button-toggle>
```

### Ejemplo completo
```html
<uni-accordion
    label="Etiqueta de la cabecera"
    [menu]="true"
    [collapsed]="false"
    (colapsedChange)="log('Colapsed changed: ' + $event)"
>
    <ng-container uni-accordion-content>
        Et commodo reprehenderit quis fugiat in sit ut veniam.
    </ng-container>
    <ng-container uni-accordion-menu>
        <uni-menu-item label="Option 1" icon="check"></uni-menu-item>
        <uni-menu-item label="Option 2" icon="close"></uni-menu-item>
        <uni-menu-item label="Option 3" icon="heart"></uni-menu-item>
    </ng-container>
</uni-accordion>
```

### Atributos de entrada

| Nombre      | Tipo        | Por defecto | Descripción 
| ----------- | ----------- | ----------- | -----------
| label       | `string`    | `''`        | Contenido HTML que se colocará en la cabecera del acordeón
| color       | `UniColor`  | `''`        | Color del fondo y del contenido de la cabecera
| disabled    | `boolean`   | `false`     | Estado deshabilitado que impide la apertura del acordeón
| menu     | `boolean`   | `false`     | Indica si se van a incluir opciones en la cabecera.
| collapsed   | `boolean`   | `true`      | Indica si el acordeón debe estar abierto (`false`) o cerrado (`true`)

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| collapsedChange | `boolean` | Notifica cuándo el acordeón se ha abierto (`false`) o cerrado (`true`)

## Mejoras previstas (TODO)

- Implementación de los parámetros `disabled` y `color`.
- Renombrar este componente a `uni-accordion-item` y crear un `uni-acordion` que gestiones los grupos de items para, por ejemplo: que solo pueda haber uno abierto.
