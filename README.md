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
ionic-conference-app/
├── src/
|    ├── app/
|    |    ├── app.module.ts
|    |    ├── app.routing.ts
|    |    ├── app.component.ts
|    |    ├── app.component.html
|    |    ├── app.component.scss
|    |    ├── index.ts
|    |    ├── main.prod.ts
|    |    ├── dashboard/
│    │    │    ├── dashboard.component.html
│    │    │    ├── dashboard.component.ts
│    │    │    ├── dashboard.component.scss
│    │    │    └── dashboard.module.ts
│    │    │
│    │    ├── header/
│    │    │── home/
│    │    │── users/
│    │    └── shared/
│    │         ├── components/
│    │         ├── directives/
│    │         ├── models/
│    │         ├── modules/
│    │         ├── pipes/
│    │         ├── services/
│    │         ├── styles/
│    │         ├── shared.modules.ts
│    │         └── utils.ts
|    |
|    ├── assests/
|    |    └── images/
|    |          └── icons/
|    |                ├── arrow-down.svg
|    |                ├── arrow-left.svg
|    |                ├── arrow-right.svg
|    |                └── ...
|    ├── index.html
|    ├── main.ts
|    ├── styles.scss
|    ├── test.ts
|    └── tsconfig.json                  * Define las opciones del compilador de Typescript
|
├── .gitignore                          
├── .editorconfig                       * Define el estilo del código deseado
├── README.md                           * Este fichero
├── karma.conf.js                       * Configuración de los tests unitarios
├── protractor.conf.js                  * Configuración de los tests e2e
├── angular-cli.json                    * Define las opciones del proyecto de Angular
├── package.json                        * Define las dependencias del proyecto
├── tsconfig.json                       * Define las opciones del compilador de Typescript
└── tslint.json                         * Define las reglas del linter de TypeScript
```