# Datagrid
`ui / uni-datagrid`

---
Vista de tabla compleja

### Contract

```typescript
```

### Usage
```html
<uni-datagrid>
    <uni-datagrid-column field="name"></uni-datagrid-column>
    <uni-datagrid-column field="date" fieldFormat="date"></uni-datagrid-column>
    <uni-datagrid-column field="progress" fieldFormat="custom">
        <template let-cellvalue>
            <uni-progress [value]="cellvalue"></uni-progress>
        </template>
    </uni-datagrid-column>
</uni-datagrid>
```

### Known Issues
