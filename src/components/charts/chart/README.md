Chart
===================
`uni-chart`
---
:blue_circle: Inicial

Gráfico versátil. Encapsulación de [Chart.js](http://www.chartjs.org/)

## Uso

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

### Atributos de entrada

| Nombre      | Tipo                                                                            | Por defecto | Descripción 
| ----------- | ------------------------------------------------------------------------------- | ----------- | -----------
| chartTitle  | `string`                                                                        | `undefined` | Título del gráfico
| size        | `'tiny'` `'small'` `'medium'` `'large'`                                         | `'medium'`  | Tamaño del gráfico
| type        | `'line'` `'bar'` `'pie'` `'radar'` `'doughnut'` `'polarArea'` `'horizontalBar'` | `undefined` | Tipo de gráfico
| series      | `Array<{ label: string, data: [number], color: Color }>`                        | `[]`        | Datos a representar
| labels      | `string[]`                                                                      | `[]`        | Etiquetas del gráfico
| options     | `Object`                                                                        | `{}`        | Optiones adicionales


### Eventos de salidas

| Nombre         | Tipo                            | Descripción
| -------------- | ------------------------------- | -----------
| chartHover     | `{active: any[]}`               | Notifica cuando pasa el ratón sobre el gráfico, devuelve los elementos implicados
| chartClick     | `{event: Event, active: any[]}` | Notifica cuando se clica el gráfico y devuelve los elementos implicados