## Button menu

```ui / uni-button-menu```

parent:  ``` base / base-button```

---
Botón con menu

### Contract

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
### Usage
```html
<uni-button-menu label="Default button" color="primary">
    <uni-menu-item icon="close">Option 1</uni-menu-item>
    <uni-separator></uni-separator>
    <uni-menu-item icon="check">Option 2</uni-menu-item>
</uni-button-menu>
```

### Known issues
- No se controla la redimensión y la apertura en esquinas
- Falta la implementación correcta en mobile
- No se controla el scroll para reposicionarlo

