Tabs
===================
`uni-tabs`
---
:white_check_mark: Stable

Conjunto de solapas seleccionables de manera excluyente.

## Usage

### Ejemplo con atributo

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
### Ejemplo con sub componentes

```html
<uni-tabs [(tabSelected)]="tabSelected">
  <uni-tabs-item label="Tab small 1"></uni-tabs-item>
  <uni-tabs-item label="Tab small 2"></uni-tabs-item>
  <uni-tabs-item label="Tab small 3"></uni-tabs-item>
</uni-tabs>
```

### Inputs


| Name        | Type                                    | Default | Description                                                                                |
| ----------- | --------------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| size        | `'small'                                | ''`     | `''`                                                                                       | Indica la altura de los tabs |
| tabs        | `Array<{label: string, value: string}>` | `false` | Array de tabs. Si no se indica `value` se toma como clave el índice del tab en este array. |
| tabSelected | `string`                                | `true`  | La clave del tab que se encuentra seleccionado                                             |

### Outputs

| Name              | Type     | Description                                                     |
| ----------------- | -------- | --------------------------------------------------------------- |
| tabSelectedChange | `string` | Notifica cuándo cambia el tab seleccionado devolviendo su clave |

## Sub-components

Sólo tienen sentido usados dentro de un datagrid.

| Component | Selector          | Status              | Docs                  |
| --------- | ----------------- | ------------------- | --------------------- |
| Tabs item | `<uni-tabs-item>` | :white_check_marck: | [+ Info](item/README) |

## Clases modificadoras
* `.uni-tabs--no-border` -> Elimina el borde inferior.

## Mejoras previstas (TODO)

- Posibilitar la introducción de contenido dentro de los `<uni-tabs-item>`, que se visualice al seleccionar cada uno.