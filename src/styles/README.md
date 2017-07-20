Los estilos parciales que se encuentran en las carpetas `abstracts/` son los que se usarían en los componentes a nivel estructural. Todos los estilos estructurales usados a nivel de componente deberían importarlos de la siguiente forma para poder hacer uso de ellos:

```sass
@import
	'./src/styles/abstracts/variables',
	'./src/styles/abstracts/mixins',
	'./src/styles/abstracts/functions';
```

Por otro lado, en la carpeta `themes/` nos encontramos con los estilos de los componentes relacionados con su estética visual, organizados en carpetas.

El funcionamiento de estos temas, es el siguiente:

* `default` -> Tema por defecto y que tiene todos los estilos básicos.
* `starter` -> Tema de partida y que habría que replicar para crear uno nuevo. En él se hace @import de todos los estilos que nos encontramos en el tema default para facilitar el mantenimiento de estilos.
* `cms` -> Tema usado por la demo de los componentes y que tiene modificaciones en ´/base/_base.scss´.

El fichero `starter-main.scss` sirve como referencia para hacer la importación de estilos necesaria en el proyecto en el que se utilicen los uni-components.