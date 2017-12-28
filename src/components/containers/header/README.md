Header
===================
`uni-header`
---
:white_check_mark: Estable

Contenedor que funciona como cabecera. Es combinable con un `<uni-layout>`.

## Uso

### Ejemplo

```html
<uni-header>
    <h1>Título de la cabecera</h1>
    <uni-button-header icon="board"></uni-button-header>
    <uni-button-header icon="user"></uni-button-header>
</uni-header>
<uni-layout>
    <uni-body>
        Aliquip voluptate nulla aliqua dolor sit voluptate dolore sit culpa voluptate commodo. In dolor excepteur id incididunt officia do reprehenderit in. Consequat mollit non amet cupidatat velit voluptate velit cillum eu ad.
    </uni-body>
</uni-layout>
```
### Atributos de entrada

| Nombre      | Tipo                  | Por defecto | Descripción 
| ----------- | --------------------- | ----------- | -----------
| size        | `'medium' | 'normal'` | `'normal'`  | Indica la altura de la barra
| color       | NtsColor              | `''`        | Indica el color de la barra
| visible     | `boolean`             | `true`      | Muestra u oculata la barra con una animación


## Mejoras previstas (TODO)

- Implementar los casos para `size="small"` y `size="large"`
