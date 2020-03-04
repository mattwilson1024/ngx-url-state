---
id: motivation
title: Motivation
---

Before we dive in, this page aims to describe the background / motivation for the library and what problem it aims to solve.

## User Expectations

Most users (technical or otherwise) are used to certain functionality / tools that are provided by web browsers and expect these features to work consistently and predictibly across all websites / applications.

Consider the following three expectations that users are likely to have:

1. **History navigation**: Users expect to be able to click back to return to the previous set of content, or make multiple steps backwards & forwards.

2. **Bookmarking**: Users expect to be able to bookmark a page and retrieve the same content at a later time when they click that bookmark

3. **Sharing**: Users expect to be able to share the content they are looking at with others, which may involve copying & pasting the URL and sending it to someone else

## Content and State

The expectations listed above all refer to **content**. What that actually means will depend on your application and use case, but broadly speaking this is likely to be:

- A listing of entities, with specific search, sorting, filtering or pagination parameters applied
- Details of a specific entity, based on specific identifier(s), possibly with a customised set of view parameters
- An information page, portraying information based on certain navigation or filtering choices that have been made by the user

Regardless of the application or domain, all of these examples have one thing in common - at any given time they depend on a certain **state** which dictates what content is shown on the page and how it can be interacted with.

In reality, any non-trivial application is likely to depend on a range of different types of "state". This library focuses on any state which represents the user's current activity, such as which filters are applied on a listing page, or which display parameters are currently selected when viewing an item.

## Managing state (well) is a hard problem

Managing state is arguably one of the hardest challenges when building modern frontend applications. 

There are a huge number of techniques, patterns, tools and libraries out there that aim to tackle the challenges associated with this. This is a hot topic and, as with anything, each option comes with pros & cons. 

Many of the options (whether transient or persisted, within a component or in a central store), suffer from one flaw which is that they are not complimentary with the expectations described above. In other words:

:::important
Without careful attention to the techniques used to handle UI state, it may be difficult (or even impossible) for the user to use the browser history, bookmarks or share links to content as they expect.
:::

## Introducing ngx-url-state

ngx-url-state aims to ease the complexity of handling this kind of state by providing a powerful but simple to use abstraction on top of the Angular router, treating the URL (specifically, query parameters) as the source of truth.

This approach makes it easy to provide a great experience for users, by allowing them to interact with the browser as they would naturally expect.

Handling this manually (and doing it well) is not a trivial task. ngx-url-state aims to change that by tackling some of the trickier aspects, such as:
- Working with strongly-typed parameters (and mapping those in and out of strings that can go into the URL)
- Specifying and enforcing default values without breaking back-navigation
- Reactively responding to changes in either individual or multiple parameters
- Patching one or more parameters whilst maintaining a clean history stack