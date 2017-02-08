# NTS Angular 2 Components #

Paquete de componentes para Angular2 desarrollado por NITSNETS.

---

## Conceptos ##
0- Typography es directamente con HTML
1- STYLE. Tienen que poder ser customizables por css desde distintos niveles de manera que te permita poder crear botones con diferentes colores, etc...
2- EXTENDS. Posibilidad de extender un componente a partir de otro para poder añadirle funcionalidades
3- DATA. Mediante el objeto data puede cargar los datos
4- JSON config & data. Todos los componentes se pueden cargar en datos por JSON, también sería bueno que fueran configurables con JSON por defecto.
5- TabIndex Control en todos los componentes
6- Keyboard Navigation estaría bien





## Usarlo en tu proyecto ##

Desde la raíz del mismo
```
npm install nts-ng2-components
```
---
## Demo del paquete ##

Desde la raíz del mismo
```
npm start
```
Y abrir `localhost:4201`

---
## Contenidos ##

El paquete contiene un conjunto de ***components***, ***directives*** y ***pipes***

### Components ###
- `nts-accordion`: Contenido colapsable al clicar su header.
- `nts-aside`: Combinable con `nts-layout` para formar un contemedor lateral.
- `nts-body`: Combinable con `nts-layout` para formar un contemedor principal.
- `nts-button`: Botón configurable que acepta las siguientes opciones entre otras:
    - `class`: Configurable el color (primary, error, warnign...).
    - `size`: Configurable el tamaño (small, large).
    - `popup`: Botón interno auxiliar que abre un popup con contenido personalizado.
    - `dropdown`: Botón adyacente con *caret* que abre un dropdown con opciones personalizadas. 
- `nts-calendar`
- `nts-checkbox`
- `nts-clock`
- `nts-color-picker`
- `nts-datetime-picker`
- `nts-dropcown`
- `nts-header`
- `nts-icon`
- `nts-image-picker`
- `nts-input`
- `nts-layout`
- `nts-link-picker`
- `nts-popup`
- `nts-search-header`
- `nts-select`
- `nts-separator`
- `nts-simple-list`

### Directives ###
- `autofocus`
- `clickoutside`
- `component-loader`
- `droppable`

### Pipes ###
- `nts-accordion`
- `nts-aside`
- `nts-body`
- `nts-button`
