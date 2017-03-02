# Slider
`ui / nts-slider`

---
Selector mediante barra deslizante

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
### Usage
```html
<nts-slider [(ntsModel)]="myModel"></nts-slider>
```
### Known Issues
