# Slider
`ui / uni-slider`

---
Selector mediante barra deslizante

### Contract

Parent contract:

```typescript
//INPUTS
label: string;
ntsModel: boolean;
name: string = '';
color: UniColor;
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
<uni-slider [(ntsModel)]="myModel"></uni-slider>
```
### Known Issues
