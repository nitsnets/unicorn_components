Accordionn item
===================
`uni-accordion-item`
---
:white_check_mark: Stable

Elementos con cabecera y cuerpo. El cuerpo puede mostrarse u ocultarse a elección del usuario.

## Usage

### Basic example

```html
<uni-accordion-item label="Etiqueta de la cabecera">
    Quis id nostrud sit cupidatat magna dolor commodo ullamco deserunt id est laboris pariatur. 
</uni-accordion-item>
```

### Ejemplo completo
```html
<uni-accordion-item
    label="Etiqueta de la cabecera"
    [menu]="true"
    [collapsed]="false"
    (colapsedChange)="log('Colapsed changed: ' + $event)"
>
    <ng-container uni-accordion-item-content>
        Et commodo reprehenderit quis fugiat in sit ut veniam.
    </ng-container>
    <ng-container uni-accordion-item-menu>
        <uni-menu-item label="Option 1" icon="check"></uni-menu-item>
        <uni-menu-item label="Option 2" icon="close"></uni-menu-item>
        <uni-menu-item label="Option 3" icon="heart"></uni-menu-item>
    </ng-container>
</uni-accordion-item>
```

### Inputs

| Name    | Type       | Default | Description                                                           |
| --------- | ---------- | ----------- | --------------------------------------------------------------------- |
| label     | `string`   | `''`        | Contenido HTML que se colocará en la cabecera del acordeón            |
| color     | `UniColor` | `''`        | Color del fondo y del contenido de la cabecera                        |
| disabled  | `boolean`  | `false`     | Status deshabilitado que impide la apertura del acordeón              |
| menu      | `boolean`  | `false`     | Indica si se van a incluir opciones en la cabecera.                   |
| collapsed | `boolean`  | `true`      | Indica si el acordeón debe estar abierto (`false`) o cerrado (`true`) |

### Outputs

| Name          | Type      | Description                                                            |
| --------------- | --------- | ---------------------------------------------------------------------- |
| collapsedChange | `boolean` | Notifica cuándo el acordeón se ha abierto (`false`) o cerrado (`true`) |

## Mejoras previstas (TODO)

- Implementación de los parámetros `disabled` y `color`.
