Tabs item
===================
`uni-tabs-item`
---
:white_check_mark: Stable

Solapa que solo tiene sentido dentro de un componente `<uni-tabs>`

## Usage

### Ejemplo

```html
<uni-tabs [(tabSelected)]="tabSelected">
  <uni-tabs-item label="Tab small 1"></uni-tabs-item>
  <uni-tabs-item label="Tab small 2"></uni-tabs-item>
  <uni-tabs-item label="Tab small 3"></uni-tabs-item>
</uni-tabs>
```

### Inputs


| Name      | Type      | Default | Description 
| ----------- | --------- | ----------- | -----------
| label       | `string`  | `''`        | Indica la etiqueta textual que aparecerá en la solapa
| value       | `any`     | `false`     | Valor identificativo que se emite al seleccionar la solapa
