Chart legend
===================
`uni-chart-legend`
---
:blue_circle: Inicial

Leyenda para gráficos.

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

| Nombre      | Tipo             | Por defecto | Descripción 
| ----------- | ---------------- | ----------- | -----------
| editable    | `boolean`        | `true`      | Título del gráfico
| series      | `Array<any>`     | `[]`        |  Tamaño del gráfico
| colors      | `Array<number>`  | `[]`        | Tipo de gráfico


### Eventos de salidas

| Nombre         | Tipo               | Descripción
| -------------- | ------------------ | -----------
| serieToggle     | `{active: any[]}` | Notifica cuando
