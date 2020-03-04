---
id: defining-default-values
title: Defining default values
---

## Reading parameter values

For any or all parameters defined during setup, it is possible to specify a default value.

If the parameter is not included in the URL, `ngx-url-state` will automatically add the query parameter with the specified default value:
- at initialisation (when `listen` is called)
- whenever a change to the activated route is detected.

This provides a convenient way to guarantee that certain values exist.

### Defining a default value for a parameter

```typescript
this.urlState = this.urlStateService.listen<ProductsPageParams>({
  ...
  paramDefinitions: {
    page: {
      mapper: IntMapper,
      defaultValue: 1
    },
```

### Automatic redirection

Any parameters with a `defaultValue` are deemed to be **required parameters**. Whenever `ngx-url-state` detects that a required parameter is missing in the URL, it will automatically perform a redirect to add that parameter with the specified default value.

:::note
Automatic redirects to insert required parameters use the `ReplaceHistory` navigation mode, to avoid breaking the history stack.

Example:

1. User starts on `/home` and follows a link in the navbar to `/products`
2. `ngx-url-state` automatically redirects to `/products?page=1` because `page` has a `defaultValue` configured
3. User navigates back (browser back button), and they land on `/home`, not `/products`.
:::