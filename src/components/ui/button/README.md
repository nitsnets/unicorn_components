## Button

``` ui / nts-button ```

parent:  ``` base / button-base```

---

Botón simple


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
### Usage
```html
<nts-button
    color="primary"
    icon="close"
    iconRight="caret"
    label="My example button"
    sublabel="My mublabel"
>
</nts-button>
```
