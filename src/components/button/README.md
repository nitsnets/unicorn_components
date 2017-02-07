# BUTTON
## ui / nts-button
---
Botón simple

### Properties
- label : string / default = null / texto del boton --> ok
- sublabel : string / default = null / subtitulo del boton --> ok ¿? ¿es necesario?
- icon : string / default = null / nombre del icono o path de la url de carga del icono (o quizás poner url('file-path')) --> ok
    - ___Kendo usa otro parametro para url iconUrl para imagen y iconClass por si es de Fonts___
- iconAlign: string / default = left / left, right / alineación del icono



// otro componente?

- popup : bool / default = false / abrir un popup en el botón estilo Trello --> ok
- popupAlign: string / default = right / right, down / permite la alineación del popup. En la derecha, donde clickeas, debajo del boton
- popupArea: boolean / default = false / identifica todo el botón como para abrir el popup, no sólo el área de la derecha
- popupIcon: string / default = null / nombre del icono del popup o path de la url de carga del icono (o quizás poner url('file-path'))  --> ok
- popupIconAlign: string / default = right / left, right / alineación del icono
    - ___¿como poner el contenido del popup? ¿le ponemos el nombre del container? Mejor que sea el propio contenido <nts-item>, quizás si son componentes distintos a nts-button___
    - ___¿que pasa con la grafica aperturas en esquinas? Si no quepo hago por caber (mirar Trello)... ___
    - ___¿que pasa con mobile? Mobile fullscreen___
    - ___¿control de scrolls por pantalla? Poder poner max para meter scroll ¿popupWidth? ¿popupHeight?___


// otro componente? http://www.telerik.com/kendo-angular-ui/components/buttons/splitbutton/ vs http://www.telerik.com/kendo-angular-ui/components/buttons/dropdownbutton/
- dropdown : bool / default = false / abrir un desplegable de acciones --> ok
- dropdownArea: boolean / default = false / identifica todo el botón como para abrir el dropdown, no sólo el área de la derecha
- dropdownIcon: string / default = null / nombre del icono del dropdown o path de la url de carga del icono (o quizás poner url('file-path'))
- dropdownIconAlign: string / default = right / left, right / alineación del icono
    - ___¿como poner el contenido del popup? ¿le ponemos el nombre del container?___
    - ___¿que pasa con la grafica aperturas en esquinas?___
    - ___¿que pasa con mobile?___
    - ___¿control de scrolls por pantalla?___
    - ___¿como poner los DIVIDERS? nts-dividers___
    - ___submenus mejor no --> fase 5___

// otro componente?
- toggleable : bool / default = false / hace que funcione como si fuera un checkbox
- toggleIcon : bool / default = false / nombre del icono del toggle activo o path de la url de carga del icono (o quizás poner url('file-path'))
    - ___¿no me encajan los nombres del toggle? la alineación la coge del padre iconAlign___
    - ___¿que sucede con el SwitchButton, es de checkbox o de aqui? ¿es simplemente una clase? http://quantumui.org/appdoc/documents/quantumui/switchbutton/___
    - Selected es solo para este componente



- type: string / default = button / submit, button, ... / type de html-button___

//otro compomente: FILE PICKER -> fase 3
- ___¿@Input() fileType: string; ?___
- ___¿@Output() fileChanged = new EventEmitter(); ?___
- ___¿@ViewChild('inputFile') inputFile: ElementRef; ?___


### Properties / common
- id : string / identificador del componente
- disabled : bool / default = false / deshabilitar componente --> ok
- selected : bool / defautl = false / determina si el boton esta habilitado
- tabIndex : number / default = -1 / indice en el formulario
- ___¿formName : como agrupamos en un mismo form, dentro del anidamiento o por parámetro? <nts-form></nts-form> o mejor <form></form>___

### Properties / style
- class : string
    - estilo base css: default, primary, light, info, success,warning, error
    - estilo style type css: label, btn, btn-rouded, btn-chip
    - ___¿podemos definir por defecto los estados: normal, over, active? Añadir en skinning___
     - ___¿class no? Mejor no?___
    
- size : string / tamaño del boton: large, normal, small, extra-small


### Events
- click : click action  --> ok
- dropdownClick : click en dropdown
- popupClick : click en popup


---

### Methods



------

# BUTTON GROUP --> FASE 2
## ui / nts-buttongroup
---
Agrupación de botones en una barra de botones
- ___split button al final??? Guay, si es complicado NO hasta que lo necesitemos___

### Properties
- data : array / array de valores seleccionados, para arrancar con datos precargados debería ir aquí



### Properties / common
- id : string / identificador del componente
- disabled : bool / default = false / deshabilitar componente
- tabIndex : number / default = -1 / indice en el formulario
- selecte: string / default = multiple / single, multiple
- ___¿formName : como agrupamos en un mismo form, dentro del anidamiento o por parámetro? No <form>___

### Properties / style
- ___¿poder poner estilos desde el padre aplicable a todos los botones???___
  
### Events
- change : change action

---

### Methods