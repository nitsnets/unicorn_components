Tabs
===================
`uni-tabs`
---
:white_check_mark: Estable

Conjunto de solapas seleccionables de manera excluyente.

## Uso

### Ejemplo

```html
<uni-tabs
    [tabSelected]="tabSelected"
    (tabSelectedChange)="onTabSelected($event)"
    [tabs]="[
      {label: 'Tab 1', value: 'tab1'},
      {label: 'Tab 2', value: 'tab2'},
      {label: 'Tab 3', value: 'tab3'},
    ]">
</uni-tabs>

```

### Atributos de entrada


| Nombre      | Tipo                                      | Por defecto | Descripción 
| ----------- | ----------------------------------------- | ----------- | -----------
| size        | `'small' | ''`                            | `''`        | Indica la altura de los tabs
| tabs        | `Array<{label: string, value: string}>`   | `false`     | Array de tabs. Si no se indica `value` se toma como clave el índice del tab en este array.
| tabSelected | `string`                                  | `true`      | La clave del tab que se encuentra seleccionado

### Eventos de salida

| Nombre            | Tipo      | Descripción
| ----------------- | --------- | -----------
| tabSelectedChange | `string`  | Notifica cuándo cambia el tab seleccionado devolviendo su clave

## Mejoras previstas (TODO)

- Posibilitar el uso del componente **también** sin el parábetro `[tabs]`, indicando el contendido con un nuevo componente `<ui-tab-item label="" value="">`.
