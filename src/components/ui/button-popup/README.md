# Button popup

```ui / nts-button-popup```

parent:  ``` base / base-button```

---
Botón con popup

## Contract

Parent contract: 
```typescript
//INPUTS
color: NtsColor;
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
position: NtsPosition = 'bottom-left';
```
## Usage
```html
<nts-button-popup label="Default button" color="primary">
    Content of the closable popup
</nts-button-popup>
```

## Known issues
- No se controla la redimensión y la apertura en esquinas
- Falta la implementación correcta en mobile
- No se controla el scroll para reposicionarlo
