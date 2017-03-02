# Button toggle
```forms / nts-button-toggle```

---
Botón con estado activo / desactivo.

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

## Usage
```html
<nts-button-toggle label="Toggle button" [(ntsModel)]="model"></nts-button-toggle>
```
