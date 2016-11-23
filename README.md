# NTS Angular 2 Seed

Punto de partida de aplicaciones desarrolladas con Angular 2 en NITSNETS

### Prerequisitos ###
1. [NodeJS](https://nodejs.org/) (>6.x) con NPM (>3.x). Se recomienda utilizar [NVM](http://nvm.sh) para la gestión de versiones de Node
2. Typings (>1.x) ```npm install -g typings```
3. Angular CLI (>1.0.0-beta.19-3) ```npm install -g angular-cli```)

### Recomendaciones ###
1. Como IDE, se recomienda Visual Studio Code
2. Pluggins recomendados: [Angular 2 Typescript Snippets](https://marketplace.visualstudio.com/items?itemName=UVBrain.Angular2) | [Angular2 Files](https://marketplace.visualstudio.com/items?itemName=alexiv.vscode-angular2-files) | [TS Lint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) | [Typescript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter) | [Sass Lint](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint)

### Set up ###
1. **Fork** del proyecto
2. **Instalación** de las dependencias con ```npm install```
3. **Compilación y ejecución** con ```npm start```. Este comando realiza las siguientes tareas automáticas:
    * Compila todo el Typescript en Javascript y lo agrupa en un bundle
    * Compila todo el Sass en CSS y lo agrupa en un bundle
    * Crea un servidor local en ```localhost:4200``` y activa *watchers* que lo recargan cuando cambia algún fichero

### Despliegue ###

1. En el servidor web de producción, descargar el código mediante ```git pull```
2. Compilarlo para producción con el comando ```ng build -prod```
3. Crear un virtual host que tenga como root dist/index.html

### Estructura del proyecto ###

Todos los ficheros de configuración se encuentran en la carpeta raíz. La carpeta ```src/``` contiene el código fuente de desarrollo. En la raíz de ```src/``` están los ficheros raíz del proyecto y dos carpetas: ```assets/``` donde se colocan los ficheros estático que simplemente se copiarán  durante la compilación; y ```app/``` que es la carpeta del primer y más básico módulo del proyecto.

La carpeta de un módulo (module_name) puede constar de los siguientes elementos:

* **Clase del módulo** con los elementos que empaqueta ```module_name.module.ts```
* **Componente principal** del módulo, que comparte nombre con él, y tambien carpeta
     * **Clase** del componente, que contiene la lógica ```module_name.component.ts```
     * **Template** HTML del componente, que contiene la estructura: ```module_name.component.html```
     * **Estilos** Sass del componente: ```module_name.component.scss```.
* **Enrutado** del módulo en su caso: ```module_name.routing.ts```.
* **Otros componentes** o módulos secundarios que en su caso se colocan en subcarpetas con el nombre correspondiente
* **Elementos compartidos** del módulo (servicios, modelos, pipes, ...) en una carpeta siempre llamada ```shared/```

Aunque cada componente debe pertenecer a un solo módulo, un módulo puede contener varios componentes. En el caso de componentes definidos en carpetas independientes, estas contarán solo con los tres ficheros de clase, template y estilos.

```
angular2-seed/
├── src/
|    ├── app/
|    |    ├── app.module.ts                     * Empaquetado del módulo principal
|    |    ├── app.routing.ts                    * Enrutado del módulo principal
|    |    ├── app.component.ts                  * Lógica del componente principal
|    |    ├── app.component.html                * Template del componente principal
|    |    ├── app.component.scss                * Estilos del componente principal
|    |    ├── dashboard/                        * Carpeta ejemplo de módulo con un sólo componente
│    │    │    ├── dashboard.component.html     
│    │    │    ├── dashboard.component.ts       
│    │    │    ├── dashboard.component.scss     
│    │    │    └── dashboard.module.ts          
│    │    │
│    │    ├── header/                           * Carpeta ejemplo de componentes anidados
│    │    │── home/
│    │    │── users/
│    │    └── shared/                           * Clases y funciones compartidas con toda la app
│    │         ├── components/                  
│    │         ├── directives/
│    │         ├── models/
│    │         ├── modules/
│    │         ├── pipes/
│    │         ├── services/
│    │         ├── styles/
│    │         ├── shared.modules.ts            * Módulo que aglutina las clases compartidas
│    │         └── utils.ts                     * Funciones auxiliares
|    |
|    ├── assests/                               * Ficheros estáticos
|    |    └── images/
|    |          └── icons/
|    |                ├── arrow-left.svg
|    |                └── ...
|    ├── index.html                             * HTML raíz donde se renderiza la app
|    ├── main.ts                                * TypeScript raíz desde donde se lanza la app
|    ├── styles.scss                            * Estilos generales
|    └── tsconfig.json                          * Define las opciones del compilador de Typescript
|
├── .gitignore                          
├── .editorconfig                               * Define el estilo del código deseado
├── README.md                                   * Este fichero
├── karma.conf.js                               * Configuración de los tests unitarios
├── protractor.conf.js                          * Configuración de los tests e2e
├── angular-cli.json                            * Define las opciones del proyecto de Angular
├── package.json                                * Define las dependencias del proyecto
├── tsconfig.json                               * Define las opciones del compilador de Typescript
└── tslint.json                                 * Define las reglas del linter de TypeScript
```

### Extender el proyecto ###

Para crear nuevos elementos de una manera sencilla, el CLI nos ofrece varios comandos. Para empezar siempre deberemos navegar hasta la carpeta donde queramos colocar el nuevo elemento.

**Crear un nuevo módulo**

Deberá crearse dentro de la carpeta de su módulo padre o en alguna de las carpetas ```shared/modules/```.
```
ng generate module module_name
```
**Crear un nuevo componente**

Deberá crearse dentro de la carpeta de su módulo / componente padre o en alguna de las carpetas ```shared/components/```.
```
ng generate component component_name
```
**Crear un nueva directiva**

Deberá crearse dentro de la carpeta de su módulo / componente padre o en alguna de las carpetas ```shared/directives/```.
```
ng generate directive diretive_name
```

Para más opciones de scaffolding consultar la documentación de [Angular CLI](https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services).