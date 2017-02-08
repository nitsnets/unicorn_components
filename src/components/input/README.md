# INPUT
## ui / nts-button
---
Input simple


 <h5>Single-line inputs</h5>
      <div class="flex">
        <nts-input [(ntsModel)]="inputModel" label="Default input"></nts-input>
        <nts-input [(ntsModel)]="inputModel" label="Input with placeholder" placeholder="Input placeholder"></nts-input>
        <nts-input [(ntsModel)]="inputModel" label="Input with icon" placeholder="Input placeholder" icon="user"></nts-input>
        <nts-input [(ntsModel)]="inputModel" label="Input with hint" placeholder="Input placeholder" hint="i.e: user@domain.com"></nts-input>
        <nts-input [(ntsModel)]="inputModel" label="Input with error" placeholder="Input placeholder" error="Must be a valid email"></nts-input>
        <nts-input [(ntsModel)]="inputModel" label="Input with prefix" placeholder="Input placeholder" prefix="http://www."></nts-input>
      </div>
      <div class="flex">
        <nts-input [(ntsModel)]="inputModel" label="Input with counter" counter="true"></nts-input>
        <nts-input [(ntsModel)]="inputModel" label="Counter and max" max="10" counter="true"></nts-input>
        <nts-input [(ntsModel)]="inputModel" label="Input with right icon" placeholder="Input placeholder" iconRight="user"></nts-input>
      </div>
      <h5>Multi-line inputs</h5>
      <nts-input [(ntsModel)]="inputModel"
        placeholder="Here you can see all the available options of multiline input activated"
        label="Multiline input"
        multiline="true"
        counter="true"
        max="140"
        error="Something went wrong"
        hint="Write something above">
      </nts-input>



### Properties
- label : string / default = null / label del input
- sublabel : string / default = null / sublabel del input (ej: http://pages.revox.io/dashboard/latest/html/form_elements.html)
- placeholder : string / default = null / placeholder del input
- ___hint : string / default = null / ayuda debajo del campo ¿valorar nombre? ¿valorar si meter icono a la derecha info...?___
- ___error : string / default = null / me gusta mucho ?___

- icon : string / default = null / nombre del icono o path de la url de carga del icono (o quizás poner url('file-path'))
    - ___Kendo usa otro parametro para url iconUrl para imagen y iconClass por si es de Fonts___
- iconAlign: string / default = left / left, right / alineación del icono
    - ___¿iconRight para tener 2?___
- prefix : string / default = null / texto del prefix del input
- prefixIcon : string / default = null / nombre del icono o path de la url de carga del icono (o quizás poner url('file-path'))
    - ___Kendo usa otro parametro para url iconUrl para imagen y iconClass por si es de Fonts___
- subfix : string / default = null / texto del prefix del input
- subfixIcon : string / default = null / nombre del icono o path de la url de carga del icono (o quizás poner url('file-path'))
    - ___Kendo usa otro parametro para url iconUrl para imagen y iconClass por si es de Fonts___

---

- counter : bool / default = false / contador de caracteres
    - ___ponemos cosas del tipo: counterAlign, counterMax (max), counterMin(min)___


---

- multiline : bool / default = false / multilinea en los textos
    - ___¿que es mejor multiline o nts-textarea?___









/**
- popup : bool / default = false / abrir un popup en el botón estilo Trello --> ok
- popupAlign: string / default = right / right, tap, down / permite la alineación del popup. En la derecha, donde clickeas, debajo del boton
- popupArea: boolean / default = false / identifica todo el botón como para abrir el popup, no sólo el área de la derecha
- popupIcon: string / default = null / nombre del icono del popup o path de la url de carga del icono (o quizás poner url('file-path'))  --> ok
- popupIconAlign: string / default = right / left, right / alineación del icono
    - ___¿como poner el contenido del popup? ¿le ponemos el nombre del container?___
    - ___¿que pasa con la grafica aperturas en esquinas?___
    - ___¿que pasa con mobile?___
    - ___¿control de scrolls por pantalla?___

- dropdown : bool / default = false / abrir un desplegable de acciones --> ok
- dropdownArea: boolean / default = false / identifica todo el botón como para abrir el dropdown, no sólo el área de la derecha
- dropdownIcon: string / default = null / nombre del icono del dropdown o path de la url de carga del icono (o quizás poner url('file-path'))
- dropdownIconAlign: string / default = right / left, right / alineación del icono
    - ___¿como poner el contenido del popup? ¿le ponemos el nombre del container?___
    - ___¿que pasa con la grafica aperturas en esquinas?___
    - ___¿que pasa con mobile?___
    - ___¿control de scrolls por pantalla?___
    - ___¿como poner los DIVIDERS?___
    - ___submenus mejor no --> fase 5___

- toggleable : bool / default = false / hace que funcione como si fuera un checkbox
- toggleIcon : bool / default = false / nombre del icono del toggle activo o path de la url de carga del icono (o quizás poner url('file-path'))
    - ___¿no me encajan los nombres del toggle? la alineación la coge del padre iconAlign___
    - ___¿que sucede con el SwitchButton, es de checkbox o de aqui? ¿es simplemente una clase? http://quantumui.org/appdoc/documents/quantumui/switchbutton/___

- ___¿@Input() type: string; ?___
- ___¿@Input() fileType: string; ?___
- ___¿@Output() fileChanged = new EventEmitter(); ?___
- ___¿@ViewChild('inputFile') inputFile: ElementRef; ?___


### Properties / common
- id : string / identificador del componente
- disabled : bool / default = false / deshabilitar componente --> ok
- selected : bool / defautl = false / determina si el boton esta habilitado
- tabIndex : number / default = -1 / indice en el formulario
- ___¿formName : como agrupamos en un mismo form, dentro del anidamiento o por parámetro?___

### Properties / style
- class : string
    - estilo base css: btn-default, btn-primary, btn-light, btn-info, btn-success, btn-warning, btn-error --> ok
    - estilo labelButton css: lb-default, lb-primary, lb-light, lb-info, lb-success, lb-warning, lb-error
        - ___¿o mejor LinkButton?___
    - estilo añadir borde caja: box-normal, box-rounded, box-chip
            - ___no me acaban los nombres___
    - ___¿añadimos color?___
    - ___¿podemos definir por defecto los estados: normal, over, active?___
    
- size : string / tamaño del boton: large, normal, small, extra-small  --> ok


### Events
- click : click action  --> ok
- dropdownClick : click en dropdown
- popupClick : click en popup


---

### Methods 

**/