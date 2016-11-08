# NTS Angular 2 Seed

Proyecto pensado para ser el punto de partida de aplicaciones desarrolladas con Angular 2

### Prerequisitos ###
1. [NodeJS](https://nodejs.org/) (>6.x) con NPM (>3.x). Se recomienda utilizar [NVM](http://nvm.sh) para la gestión de versiones de Node
2. Typings (>1.x) ```npm install -g typings```
3. Angular CLI (>1.0.0-beta.19-3) ```npm install -g angular-cli```)

### Set up ###
1. **Fork** del proyecto
2. **Instalación** de las dependencias con ```npm install```
3. **Compilación y ejecución** con ```npm start```. Este comando realiza las siguientes tareas automáticas:
    * Crea la carpeta ```/dist```
    * Compila todo el Typescript en Javascript y lo agrupa en el bundle ```dist/main.bundle.js```
    * Compila todo el Sass en CSS y lo agrupa en el bundle ```dist/styles.bundle.css```
    * Crea un servidor local en ```localhost:4200``` y activa *watchers* que lo recargan cuando cambia algún fichero

### Estructura del proyecto ###

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