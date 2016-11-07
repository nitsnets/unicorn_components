# NTS Angular 2 Seed

Proyecto pensado para ser el punto de partida de aplicaciones desarrolladas con Angular 2

### Prerequisitos ###
1. [NodeJS](https://nodejs.org/) (>6.x) con NPM (>3.x). Se recomienda utilizar [NVM](http://nvm.sh) para la gestión de versiones de Node
2. Typings (>1.x) ```npm install -g typings```
3. Angular CLI (>1.0.0-beta.19-3) ```npm install -g angular-cli```)

### Set up ###
1. Fork del proyecto
2. Instalación de las dependencias ```npm install```
3. Compilación y ejecución ```npm start```. Este comando realiza las siguientes tareas automáticas:
    1. Crea la carpeta ```/dist```
    2. Compila todo el Typescript en Javascript y lo agrupa en el bundle ```dist/main.bundle.js```
    3. Compila todo el Sass en CSS y lo agrupa en el bundle ```dist/styles.bundle.css```
    4. Crea un servidor local en ```localhost:4200``` y activa *watchers* que lo recargan cuando cambia algún fichero
