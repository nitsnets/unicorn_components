# Button file
```ui / uni-button-file```

---
Botón con file picker

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
fileType: string;

//OUTPUTS
fileChanged: EventEmitter;
```

## Usage
```html
<uni-button-file label="Default button" color="primary">
    Content of the closable popup
</uni-button-file>
```
