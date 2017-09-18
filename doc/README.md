# Unicorn Components

## Development guide

### Project structure

All the config files are located at `/` (root), the static files are at `/assets/`, and the source code at `/src/`. 
Beside, the package's main file  is `/unicorn-components.ts`. All the relevant modules are exported from there.

Inside `/src/` we can find the following folders:

* **components/**: Where all the Unicorn components are located at.
* **directives/**: Auxiliar directives also included in the package.
* **models/**: All the models used in the components.
* **pipes/**: All the pipes used in the components.
* **styles/**: The styles structure.
* **unicorn.module.ts**: The package's main file.
* **utils.ts**: Auxiliar code shared in the whole project.

### Components

The `components/` are grouped in bundles:

```
components/
├── base/           * Abstract components that let others extend from
├── charts/         * Charts-related components
├── containers/     * Containers and layout definers
├── forms/          * Fields of a form
├── ui/             * Basic interaction elements
├── utils/          * Auxiliar components
├── view/           * Complex components that define a higher level UI.
└── index.ts        * All the components in a single array
```

### Styles

The `styles/` are grouped in themes:

```plain
styles/
├── abstracts/             * Define el estilo del código deseado
├── themes/                * Define el estilo del código deseado
│   ├── _starter           * An empty theme structure to begin with when creating a new theme
│   ├── default/           * The base theme all the others must extend from
│   └── ...                * All the other themes implemented
└── starter-main.scss/     * Example of file to import the components styles the right way.
```
