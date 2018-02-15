Accordion
===================
`uni-accordion`
---
:white_check_mark: Stable

Elementos con cabecera y cuerpo. El cuerpo puede mostrarse u ocultarse a elección del usuario.

## Usage

### Basic example

```html
<uni-accordion mode="single">
    <uni-accordion-item label="Etiqueta de la cabecera 1" [collapsed]="false">
        Contenido de la primera sección
    </uni-accordion-item>
    <uni-accordion-item label="Etiqueta de la cabecera 2">
        Contenido de la segunda sección
    </uni-accordion-item>
    <uni-accordion-item label="Etiqueta de la cabecera 3">
        Contenido de la tercera sección
    </uni-accordion-item>
</uni-accordion>
```

### Inputs

| Name | Type                    | Default      | Description                                                                                 |
| ---- | ----------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| mode | `'single'` `'multiple'` | `'multiple'` | Indica si solo puede haber un solo *item* abierto (`'single'`) o más de uno (`'multiple'`). |

### Outputs

| Name            | Type                              | Description                                                                                                                 |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| collapsedChange | `{index: number, value: boolean}` | Notifica cuándo algún *item* del acordeón (con posición `index`) se ha abierto (`value = false`) o cerrado (`value = true`) |

## Sub-components

Sólo tienen sentido usados dentro de un datagrid.

| Component      | Selector               | Status             | Docs                  |
| -------------- | ---------------------- | ------------------ | --------------------- |
| Accordion item | `<uni-accordion-item>` | :white_check_mark: | [+ Info](item/README) |
