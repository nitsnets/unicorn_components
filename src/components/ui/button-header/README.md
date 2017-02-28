## Button dropdown

```ui / nts-button-dropdown```

parent:  ``` base / base-button```

---
Botón con dropdown

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
<nts-button-dropdown label="Default button" color="primary">
    <nts-dropdown-item icon="close">Option 1</nts-dropdown-item>
    <nts-separator></nts-separator>
    <nts-dropdown-item icon="check">Option 2</nts-dropdown-item>
</nts-button-dropdown>
```

### Known issues
- No se controla la redimensión y la apertura en esquinas
- Falta la implementación correcta en mobile
- No se controla el scroll para reposicionarlo

