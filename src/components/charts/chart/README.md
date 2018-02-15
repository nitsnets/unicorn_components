Chart
===================
`uni-chart`
---
:large_blue_circle: Initial

Gráfico versátil. Encapsulación de [Chart.js](http://www.chartjs.org/)

## Usage

❗️ **IMPORTANTE**: Debe instalar `Chart.js` para utilizar `<uni-chart>`.
```
npm install chart.js --save
```


## Ejemplo simple

```html
<uni-chart
    type="bar"
    [series]="[
        { label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] },
        { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }
    ]"
    [labels]="['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6']"
></uni-chart>

```

### Inputs

| Name       | Type                                                                            | Default     | Description           |
| ---------- | ------------------------------------------------------------------------------- | ----------- | --------------------- |
| chartTitle | `string`                                                                        | `undefined` | Título del gráfico    |
| size       | `'tiny'` `'small'` `'medium'` `'large'`                                         | `'medium'`  | Tamaño del gráfico    |
| type       | `'line'` `'bar'` `'pie'` `'radar'` `'doughnut'` `'polarArea'` `'horizontalBar'` | `undefined` | Type de gráfico       |
| series     | `Array<{ label: string, data: [number], color: Color }>`                        | `[]`        | Datos a representar   |
| labels     | `string[]`                                                                      | `[]`        | Etiquetas del gráfico |
| options    | `Object`                                                                        | `{}`        | Optiones adicionales  |


### Outputs

| Name       | Type                            | Description                                                                       |
| ---------- | ------------------------------- | --------------------------------------------------------------------------------- |
| chartHover | `{active: any[]}`               | Notifica cuando pasa el ratón sobre el gráfico, devuelve los elementos implicados |
| chartClick | `{event: Event, active: any[]}` | Notifica cuando se clica el gráfico y devuelve los elementos implicados           |
