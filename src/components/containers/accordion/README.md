Accordion
===================
`uni-accordion`
---
:white_check_mark: Estable

Elementos con cabecera y cuerpo. El cuerpo puede mostrarse u ocultarse a elección del usuario.

## Uso

### Ejemplo básico

```html
<uni-accordion mode="single">
    <uni-ccordion-item label="Etiqueta de la cabecera 1" [collapsed]="false">
        Contenido de la primera sección
    </uni-ccordion-item>
    <uni-ccordion-item label="Etiqueta de la cabecera 2">
        Contenido de la segunda sección
    </uni-ccordion-item>
    <uni-ccordion-item label="Etiqueta de la cabecera 3">
        Contenido de la tercera sección
    </uni-ccordion-item>
</uni-accordion>
```

### Atributos de entrada

| Nombre      | Tipo                    | Por defecto  | Descripción 
| ----------- | ----------------------- | ------------ | -----------
| mode        | `'single'` `'multiple'` | `'multiple'` | Indica si solo puede haber un solo *item* abierto (`'single'`) o más de uno (`'multiple'`).

### Eventos de salida

| Nombre          | Tipo                              | Descripción
| --------------- | --------------------------------- | -----------
| collapsedChange | `{index: number, value: boolean}` | Notifica cuándo algún *item* del acordeón (con posición `index`) se ha abierto (`value = false`) o cerrado (`value = true`)

## Subcomponentes

Sólo tienen sentido usados dentro de un datagrid.

| Componente          | Nomenclatura              | Estado              | + Info 
| ------------------- | ------------------------- | ------------------- | ------- 
| Accordion item      | `<uni-accordion-item>`    | :white_check_mark:  | [+ Info](item/README)
