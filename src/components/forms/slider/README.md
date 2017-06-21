# Slider
`ui / uni-slider`

---
Selector mediante barra deslizante

### Contract

Parent contract:

```typescript
//INPUTS
label: string;
uniModel: boolean;
name: string = '';
color: UniColor;
disabled: boolean = false;
value: string = '';
required: boolean = false;
debounce: number = 0;

//OUTPUTS
uniModelChange: EventEmitter<boolean>;
uniFocus: EventEmitter<Event>;
uniBlur: EventEmitter<Event>;
```
### Usage
```html
<uni-slider [(uniModel)]="myModel"></uni-slider>
```
### Known Issues
