Accordion
===================
`uni-accordion`
---

## Uso

### Básico

```html
<uni-accordion label="Etiqueta de la cabecera">
    Quis id nostrud sit cupidatat magna dolor commodo ullamco deserunt id est laboris pariatur. 
</uni-accordion>
```

### Completo
```html
<uni-accordion
    label="Etiqueta de la cabecera"
    options="true"
    [collapsed]="false"
    (colapsedChange)="log('Colapsed changed: ' + $event)"
>
    <ng-container uni-accordion-content>
        Et commodo reprehenderit quis fugiat in sit ut veniam.
    </ng-container>
    <ng-container uni-accordion-options>
        <uni-menu-item label="Option 1" icon="check"></uni-menu-item>
        <uni-menu-item label="Option 2" icon="close"></uni-menu-item>
        <uni-menu-item label="Option 3" icon="heart"></uni-menu-item>
    </ng-container>
</uni-accordion>
```

## Atributos de entrada

| Nombre      | Tipo        | Por defecto | Descripción 
| ----------- | ----------- | ----------- | -----------
| label       | `string`    | `''`        | Contenido HTML que se colocará en la cabecera del acordeón
| color       | `UniColor`  | `''`        | Color del fondo y del contenido de la cabecera
| disabled    | `boolean`   | `false`     | Estado deshabilitado que impide la apertura del acordeón
| options     | `boolean`   | `false`     | Indica si se van a incluir opciones en la cabecera.
| collapsed   | `boolean`   | `true`      | Indica si el acordeón debe estar abierto (`false`) o cerrado (`true`)

## Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| collapsedChange | `boolean` | Notifica los cambios en la apertura del acordeón. Indica que se ha abierto (`false`) o cerrado (`true`)
