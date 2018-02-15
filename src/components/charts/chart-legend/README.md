Chart legend
===================
`uni-chart-legend`
---
:large_blue_circle: Initial

Leyenda para gráficos.

## Usage

## Ejemplo simple

```html
<uni-chart
    type="bar"
    series="[
        { label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] },
        { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }
    ]"
    labels="['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6']"
></uni-chart>

```

### Inputs

| Name     | Type            | Default | Description        |
| -------- | --------------- | ------- | ------------------ |
| editable | `boolean`       | `true`  | Título del gráfico |
| series   | `Array<any>`    | `[]`    | Tamaño del gráfico |
| colors   | `Array<number>` | `[]`    | Type de gráfico    |


### Outputs

| Name        | Type              | Description     |
| ----------- | ----------------- | --------------- |
| serieToggle | `{active: any[]}` | Notifica cuando |
