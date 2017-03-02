## Button menu

```ui / nts-button-menu```

parent:  ``` base / base-button```

---
Botón con menu

### Contract

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
### Usage
```html
<nts-button-menu label="Default button" color="primary">
    <nts-menu-item icon="close">Option 1</nts-menu-item>
    <nts-separator></nts-separator>
    <nts-menu-item icon="check">Option 2</nts-menu-item>
</nts-button-menu>
```

### Known issues
- No se controla la redimensión y la apertura en esquinas
- Falta la implementación correcta en mobile
- No se controla el scroll para reposicionarlo

