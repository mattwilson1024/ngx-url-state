---
id: installation-and-setup
title: Installation & Setup
---

### Installation

```
npm install ngx-url-state
```

-- or --

```
yarn add ngx-url-state
```


### Setup Steps

1. Define a TypeScript interface representing which parameters you need and their types.

```typescript
export interface ProductsPageParams {
  page: number;
  pageSize: number;
  redText: boolean;
}
```

2. Inject `ActivatedRoute` and `UrlStateService` in the component's constructor

```typescript
constructor(private activatedRoute: ActivatedRoute,
            private urlStateService: UrlStateService) { }
```

3. In `ngOnInit`, define the parameters you wish to track and obtain an instance of `UrlState`

```typescript

export class YourComponent implements OnInit {

  public urlState: UrlState<ProductsPageParams>;

  ...

  ngOnInit(): void {
    this.urlState = this.urlStateService.listen<ProductsPageParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: this.componentDestroyed$,
      paramDefinitions: {
        name: {
          mapper: StringMapper
        }
      }
    });

}
```

4. You're all set up and ready to rock. The following sections describe your new super powers.
