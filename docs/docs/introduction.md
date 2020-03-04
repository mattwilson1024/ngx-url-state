---
id: introduction
title: Introduction
---

<!-- <iframe src="https://stackblitz.com/edit/ngx-url-state-examples?embed=1&file=src/app/app.component.ts&view=preview" width="100%" height="550px"></iframe> -->

## What is ngx-url-state?

`ngx-url-state` is a powerful yet flexible library for handling stateful URLs in Angular applications. 

The library provides a powerful abstraction on top of Angular's router, centralising state as a set of query parameters in the URL.

Using `ngx-url-state` avoids the complexity of dealing with the query parameters directly, making it easy to define a set of query parameters that represent state, specify and enforce default values, react to changes in those values, or update state in a simple, type safe fashion. 

## Features

- ✅ Tested with Angular 9
- ✅ Simple & declarative API for defining, monitoring, reading and writing query parameters to & from the URL
- ✅ Seamless integration with Angular's router, without conflicting with any other query parameters
- ✅ Strongly-typed API parameters:
  - Parameters are mapped to any TypeScript interface that you define, allowinng application code to work directly with parameters of any type, not just strings
  - Supports basic data types (e.g. strings, numbers, booleans & dates) out of the box with built-in mappers
  - Supports complex data types (e.g. custom objects, arrays, enums) by defining custom mappers
- ✅ Define default values for any or all parameters
- ✅ Easy to access parameters either individually or as a complete set
- ✅ Flexible enough to support a variety of approaches / styles:
  - Supports powerful reactive workflow by providing RxJS Obsrvables for each tracked parameter
  - Supports simple imperative access to current values by providing a snapshot of all current parameter values

## At a Glance

```typescript
// TODO: Add example
```