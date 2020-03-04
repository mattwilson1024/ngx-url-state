---
id: updating-state
title: Updating State
---

There are several options for easily updating the value of one or more parameters.


### Using a regular RouterLink

```html
<a routerLink="/products"
   [queryParams]="{ page: 1 }"
   queryParamsHandling="merge"
>
   Go to page 1
</a>
```

### Programatically updating state

```typescript
public setFilters(newSearchTerm: string, newColour: string) {
  this.urlState.set({
    search: newSearchTerm,
    colour: newColour
  });
}
```

### Programmatically updating state, based on current values

The `snapshot` provides an easy way to access the current value of a parameter. This can be useful if you need to update a parameter based on an existing value (incrementing a value, for example).

```typescript
public nextPage(): void {
  this.urlState.set({
    page: this.urlState.snapshot.page + 1
  });
}
```

### TODO

- navigation modes