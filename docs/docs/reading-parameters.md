---
id: reading-parameters
title: Reading & Subscribing to Parameters
---

## Reading parameter values

`ngx-url-state` provides a number of ways to retrieve parameter values to suit a variety of situations. At a glance, you can:

- subscribe to an individual parameter
- subscribe to all parameters
- read the current value of one or more parameters (referred to as a "snapshot")


:::tip
Where possible, using a reactive approach (_subscribing_ to parameter values, rather than just reading them from the snapshot) provides a lot of benefits.

The observables provided by `ngx-url-state` (whether for individual parameters, or all parameters) will automatically emit the new value whenever the parameter's value changes, meaning that it is easy to react to changes in the values over time.
:::

### Subscribe to a parameter from the template using the async pipe

```html
<p>Hello {{ urlState.params.name | async }}!</p>
```

### Subscribe to a parameter from the component class

```typescript
ngOnInit(): void {
  // ... setup as described above

  this.urlState.params.name.subscribe(
    name => console.log(`Name is now ${name}`);
  );
}
```

### Read the current value of a parameter (once)

In situations where you just need to get the current value of a specific parameter (for example inside a button click handler), you can use the `snapshot` property.

```typescript
sayHello(): void {
  alert(`Hello ${this.urlState.snapshot.name}`);
}
```