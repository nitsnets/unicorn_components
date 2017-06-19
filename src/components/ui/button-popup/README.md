# Button popup

```ui / uni-button-popup```

parent:  ``` base / base-button```

---
Botón con popup

## Contract

Parent contract: 
```typescript
//INPUTS
color: UniColor;
icon: string;
iconRight: string;
label: string;
sublabel: string;
size: string;
disabled: boolean = false;
```
Extended contract: 
```typescript
//INPUTS
position: UniPosition = 'bottom-left';
```
## Usage
```html
<uni-button-popup label="Default button" color="primary">
    Content of the closable popup
</uni-button-popup>
```

## Known issues
- No se controla la redimensión y la apertura en esquinas
- Falta la implementación correcta en mobile
- No se controla el scroll para reposicionarlo
