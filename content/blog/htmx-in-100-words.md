---
external: false
draft: false
title: HTMX in 100 Words
description: HTMX in one hundred words
url: https://www.imran-nazir.com/blog/htmx-in-100-words
image: https://www.imran-nazir.com/images/htmx-in-100-words.png
imageAlt: A stylised HTMX logo graphic
date: 2025-03-12
tags: [tech, framework, htmx]
---

![Illustration](/images/htmx-in-100-words.png)

[HTMX](https://htmx.org/) is a lightweight JavaScript library that lets you access modern browser features directly from HTML, without writing JavaScript. It allows you to fire HTTP methods from any HTML elements and to receive and insert HTML snippets sent my the server.

Core concepts:

- Use attributes like `hx-get`, `hx-post`, `hx-put`, `hx-delete` for AJAX requests
- Specify target with `hx-target` to update specific elements
- Trigger actions with `hx-trigger` (click, load, etc.)
- Use CSS selectors with `hx-swap` to control how content is inserted

Example:

```html
<button
  hx-get="/api/data"
  hx-target="#result"
  hx-trigger="click"
  hx-swap="innerHTML"
>
  Load Data
</button>
<div id="result"></div>
```

This creates a button that loads data from `/api/data` into `#result` when clicked
