# Datagrid
`ui / nts-datagrid`

---
Vista de tabla compleja

### Contract

```typescript
```

### Usage
```html
<nts-datagrid>
    <nts-datagrid-column field="name"></nts-datagrid-column>
    <nts-datagrid-column field="date" fieldFormat="date"></nts-datagrid-column>
    <nts-datagrid-column field="progress" fieldFormat="custom">
        <template let-cellvalue>
            <nts-progress [value]="cellvalue"></nts-progress>
        </template>
    </nts-datagrid-column>
</nts-datagrid>
```

### Known Issues
