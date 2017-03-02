# Input
`forms / nts-input`

---
Input para introducción de texto con opciones avanzadas

### Contract
Parent contract: 

```typescript
//INPUTS
label: string;
ntsModel: boolean;
name: string = '';
color: NtsColor;
disabled: boolean = false;
value: string = '';
required: boolean = false;
debounce: number = 0;

//OUTPUTS
ntsModelChange: EventEmitter<boolean>;
ntsFocus: EventEmitter<Event>;
ntsBlur: EventEmitter<Event>;
```

Extended contract:
```typescript
//INPUTS
type: 'text' | 'number' | 'email' | 'password' | 'color' = 'text';
max: number = -1;
step: number = 1;

icon: string;
iconRight: string;

placeholder: string = '';
prefix: string = '';
hint: string = '';
mask: string = '';
error: string = '';

maxValue: number = null;
minValue: number = null;

floating: boolean = false;
multiline: boolean = false;
autofocus: boolean = false;
clear: boolean = false;
colorSwatch: boolean = false;
caret: boolean = false;
counter: boolean = false;

//OUTPUTS
ntsKeypress: EventEmitter;
```

## Usage
```html
<nts-button-toggle label="Toggle button" [(ntsModel)]="model"></nts-button-toggle>
```

## Known Issues

* Flexibilizar los iconos para poder introducir una url personalizada
* Añadir el input `hintIcon`
* Añadir el input `prefixIcon`
* Añadir los input `subfix` y `subfixIcon` al estilo de `prefix`
* Separar el input `[multiline]="true"` a otro componente
