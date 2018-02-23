# CHANGELOG

## Current

### Breaking changes
- The interface `UniListItem`'s attibute `name` renamed to `label`. This is to be consistent with `UniOption`, `UniButton`, `UniInput` and other classes.
### New features
- Demo links included at the components table, at README.
- Component `<uni-select>` now accepts items with icons:
```html
<uni-select [options]="[
  { label: 'Good', icon: 'check', value: 1 },
  { label: 'Wrong', icon: 'cross', value: 0 },
]"></uni-select>
```
## **[1.0.1]** - 25/01/2018

### New features
- Demo integrated in the project as a Storybook showroom.

### Bug fixes
- Documentation mistakes fixed.

## **[1.0.0]** - 16/01/2018

[Storybook]: https://github.com/storybooks/storybook

[1.0.0]: https://github.com/nitsnets/unicorn_components/releases/tag/v1.0.0 "v1.0.0"
[1.0.1]: https://github.com/nitsnets/unicorn_components/releases/tag/v1.0.1 "v1.0.0"
