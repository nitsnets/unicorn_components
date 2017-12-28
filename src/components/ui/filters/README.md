Filters
===================
`uni-filters`
---
:blue_circle: Initial

Agrupación de filtros con funciones de limpiado y guardado.

## Uso

Como contenido de la etiqueta `<uni-filters></uni-filters>` se puede colocar la estructura HTML que se desee. Sin embargo, los elementos cuyo valor se monitoriza y se tiene en cuenta para configurar el filtro son:

- Input `<uni-input>`
- Select `<uni-select>`
- Checkbox `<uni-checkbox>`
- ButtonToggle `<uni-button-toggle>`
- DatePicker `<uni-date-picker>`
- Radio `<uni-radio>`
- Toggle `<uni-toggle>`
- TimePicker `<uni-time-picker>`

Estos elementos se pueden agrupar de manera opcional en dos secciones:

- Filtros principales `<uni-filters-main>`: Siempre visibles.
- Filtros avanzados `<uni-filters-avanced>`: Se pueden contraer o expandir

En cualquier caso, el objeto `filter` se contruye com un objeto clave-valor. La clave es el atributo `name` de los inputs. Por ejemplo: `<uni-checkbox name="bar"></uni-checkbox>` dará lugar a un `filter = {bar: false}`.

Por último, los valores por defecto de los filtros se toman del contenido de los atributos `value` de los inputs. Son estos los que se restablecen al clicar en `clear`, si aplica. Por ejemplo `<uni-input name="bar" value="Por defecto"></uni-input>` se considerará *vacío* cuando esté a `'Por defecto'`.

## Ejemplo simple

```html
<uni-filters (filterChange)="foo($event)">
    <uni-input name="name"></uni-input>
    <uni-date-picker name="birth"></uni-date-picker>
    <uni-select name="progress" [options]="[
        {value: '0-24', label: '0 - 24%'},
        {value: '25-49', label: '25 - 49%'},
        {value: '50-74', label: '50 - 74%'},
        {value: '75-100', label: '75 - 100%'}
    ]"></uni-select>
    <uni-checkbox name="alerts" label="With alerts"></uni-checkbox>
</uni-filters>
```

## Ejemplo con filtros avanzados y guardado

```html
<uni-filters [savable]="true" (filterChange)="foo($event)" (save)="bar($event)">
    <uni-filters-main>
        <uni-input name="name" placeholder="First name" debounce="300" value="Default value"></uni-input>
        <uni-date-picker name="birth" placeholder="Date of birth"></uni-date-picker>
        <uni-select name="progress" placeholder="Progress" value="0-24" [options]="[
            {value: '0-24', label: '0 - 24%'},
            {value: '25-49', label: '25 - 49%'},
            {value: '50-74', label: '50 - 74%'},
            {value: '75-100', label: '75 - 100%'}
        ]"></uni-select>
        <uni-checkbox name="alerts" label="With alerts"></uni-checkbox>
    </uni-filters-main>
    <uni-filters-advanced>
        <uni-input name="extra1" placeholder="Extra filter 1" debounce="300" value="Default extra value"></uni-input>
        <uni-input name="extra2" placeholder="Extra filter 2" debounce="300"></uni-input>
        <uni-input name="extra3" placeholder="Extra filter 3" debounce="300"></uni-input>
        <uni-input name="extra4" placeholder="Extra filter 4" debounce="300"></uni-input>
        <uni-input name="extra5" placeholder="Extra filter 5" debounce="300"></uni-input>
        <uni-input name="extra6" placeholder="Extra filter 6" debounce="300"></uni-input>
    </uni-filters-advanced>
</uni-filters>
```

### Atributos de entrada

| Nombre        | Tipo                            | Por defecto | Descripción 
| ------------- | ------------------------------- | ----------- | -----------
| autoFilter    | `'onChange'` `'onBlur'` `false` | `false`     | Indica de qué manera se notifican los cambios de filtro
| persistent    | `string`                        | `null`      | Recibe una clave única y almacena los filtros para persistir al refresco de página
| savable       | `boolean`                       | `false`     | Habilita un botón para guardar los filtros
| clearable     | `boolean`                       | `true`      | Habilita un botón para limpiar los filtros. Este botón sólo es visible si los filtros actuales difieren de los filtros por defecto. Y cuando se clica se restablecen los valores por defecto.
| button        | `boolean`                       | `false`     | Muestra u oculta el botón de *Aplicar filtros*. Si `autoFilter = false` este parámetro debe ser `true`.
| buttonColor   | `UniColor`                      | `'primary'` | Asigna un color al botón de búsqueda.
| buttonLabel   | `string`                        | `'Apply'`   | Asigna una etiqueta al botón de búsqueda.
| buttonIcon    | `string`                        | `null`      | Asigna un icono al botón de búsqueda
| filter        | `UniFilter`                     | `{}`        | Filtros activos

### Eventos de salida

| Nombre       | Tipo        | Descripción
| ------------ | ----------- | -----------
| filterChange | `UniFilter` | Indica cambios en los filtros activos
| save         | `UniFilter` | Indica que se desean guardar los filtros activos 

## Subcomponentes

Sólo tienen sentido usados dentro de `uni-filters`.

| Componente          | Nomenclatura            | Estado         | + Info 
| ------------------- | ----------------------- | -------------- | -------
| Filters advanced    | `<uni-filters-avanced>` | :blue_circle:  | [+ Info](filters-advanced/README)
| Filters main        | `<uni-filters-main>`    | :blue_circle:  | [+ Info](filters-main/README)
