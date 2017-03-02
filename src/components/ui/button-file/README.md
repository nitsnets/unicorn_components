# Button file
```ui / nts-button-file```

---
Botón con file picker

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
fileType: string;

//OUTPUTS
fileChanged: EventEmitter;
```

## Usage
```html
<nts-button-file label="Default button" color="primary">
    Content of the closable popup
</nts-button-file>
```
