Aside
===================
`uni-aside`
---
:white_check_mark: Stable

Contenedor situado en los laterales de una página. Debe situarse dentro de un `<uni-layout>` y combinarse con un `<uni-body>`.

## Usage

### Ejemplo

```html
<uni-layout>
    <uni-aside position="left">
        Quis id nostrud sit cupidatat magna dolor commodo ullamco deserunt id est laboris pariatur. 
    </uni-aside>
    <uni-body>
        Aliquip voluptate nulla aliqua dolor sit voluptate dolore sit culpa voluptate commodo. In dolor excepteur id incididunt officia do reprehenderit in. Consequat mollit non amet cupidatat velit voluptate velit cillum eu ad.
    </uni-body>
    <uni-aside right>
        Ullamco sunt veniam est mollit.
    </uni-aside>
</uni-layout>
```

### Inputs

| Name      | Type               | Default | Description 
| ----------- | ------------------ | ----------- | -----------
| position    | `'left' 'right'`   | `'left'`    | Indica a qué lado del `body` se colocará el aside. Puede colocarse directamente como atributo (ver ejemplo).