Input
===================
`uni-input`
---
:white_check_mark: Estable

Campo de texto básico pero vitaminado.

## Uso

### Ejemplos

```html
<uni-input [(model)]="inputModel" label="Default input"></uni-input>
<uni-input label="Input with placeholder" placeholder="Input placeholder"></uni-input>
<uni-input label="Input with icon" icon="user"></uni-input>
<uni-input label="Input with hint" hint="i.e: user@domain.com"></uni-input>
<uni-input label="Input with error" error="Must be a valid email"></uni-input>
<uni-input label="Input with prefix" prefix="http://www."></uni-input>
<uni-input label="Input with prefix" suffix=".com"></uni-input>
<uni-input label="Input with counter" counter="true"></uni-input>
<uni-input label="Counter and max" max="10" counter="true"></uni-input>
<uni-input label="Input with right icon" iconRight="user"></uni-input>
<uni-input label="Floating label" floating="true"></uni-input>
<uni-input label="Input with mask (alpha)" mask="(999) 999-999"></uni-input>
<uni-input label="Input with debounce" [debounce]="200"></uni-input>
<uni-input label="Multiline input" multiline="true"></uni-input>
```

### Atributos de entrada

| Nombre      | Tipo        | Por defecto | Descripción 
| ----------- | ----------- | ----------- | -----------
| name        | `string`    | `''`        | Nombre del campo de cara a usarse en formularios
| label       | `string`    | `''`        | Etiqueta textual del botón
| color       | `UniColor`  | `''`        | Color del fondo y del contenido
| disabled    | `boolean`   | `false`     | Estado deshabilitado que impide la manipulación del campo
| model       | `boolean`   | `false`     | Valor introducido en el campo
| value       | `boolean`   | `false`     | Valor por defecto del campo
| debounce    | `number`    | `0`         | Tiempo que debe permanecer el campo sin cambios tras un cambio dado para que este se propague
| type        | `InputType` | `''`        | Puede versar entre `'text' ⎮ 'number' ⎮ 'email' ⎮ 'password' ⎮ 'color'`
| max         | `number`    | `''`        | Longitud máxima del texto a introducir
| icon        | `string`    | `''`        | Icono a colocar el la parte izquierda interior del campo
| iconRight   | `string`    | `''`        | Icono a colocar el la parte derecha interior del campo
| placeholder | `string`    | `''`        | Texto que aparece en el campo cuando no tiene contenido
| prefix      | `string`    | `''`        | Texto auxiliar situado en el lado izquierdo exterior del campo
| hint        | `string`    | `''`        | Pista textual sobre el cometido del campo situado debajo a la izquierda del mismo
| mask        | `string`    | `''`        | Mascara que deberá cumplir el campo. Se pueden emplear los carácteres `9` (número), `A` (letra mayúscula), `a` (letra minúscula), `x` (letra) o `X` (letra o número). El resto de carácteres se tomarán de manera textual. Por ejemplo un DNi sería `99999999A`.
| error       | `string`    | `''`        | Texto enfatizado de error situado abajo a la derecha del campo
| counter     | `boolean`   | `''`        | Contador de carácteres. Se muestran respecto al total si el atributo `max` tiene valor
| maxValue    | `any`       | `''`        | Máximo valor que puede tomar el campo. Su fomato dependerá del atributo `type`, pero lo más usual es que sea numérico.
| minValue    | `any`       | `''`        | Mínimo valor que puede tomar el campo. Su fomato dependerá del atributo `type`, pero lo más usual es que sea numérico.
| readonly    | `boolean`   | `false`     | Indica si se puede modificar el valor del campo (`false`) o no (`true`)
| floating    | `boolean`   | `false`     | Cuando vale `true`, si el campo no tiene valor, el label flota sobre él hasta que lo tenga
| multiline   | `boolean`   | `false`     | Si se activa el campo se convierte en un área de texto
| autofocus   | `boolean`   | `false`     | Al activarlo el campo pide el foco nada más crearse
| clear       | `boolean`   | `false`     | Habilita un botón para limpiar el campo, situado a la derecha del mismo
| colorSwatch | `boolean`   | `false`     | Coloca una celda coloreada a la izquierda del campo, pensada para introducción de códigos de color
| caret       | `boolean`   | `false`     | Colocal una flecha a la derecha del campo, pensada para los campos de selección de opciones

### Eventos de salida

| Nombre          | Tipo      | Descripción
| --------------- | --------- | -----------
| modelChange     | `boolean` | Notifica cuando ha habido un cambio de valor en el input
| uniFocus        | `Event`   | Notifica cuando se ha hecho puesto el foco en el input
| uniBlur         | `Event`   | Notifica cuándo se ha quitado el foco del input
| uniKeypress     | `Event`   | Notifica cuándo se pulsa una tecla dentro del input

## Mejoras previstas (TODO)

- Implementación del `mask`.
- Implementación el comportamiento de `disabled`
- Flexibilizar los iconos para poder introducir una url personalizada
- Añadir el input `hintIcon`
- Añadir el input `prefixIcon`
- Añadir los input `suffix` y `suffixIcon` al estilo de `prefix`
- Separar el input `[multiline]="true"` a otro componente
