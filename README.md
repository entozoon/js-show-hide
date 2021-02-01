# js-show-hide

Simple as you'd imagine:

## Install

```bash
npm i js-show-hide
```

## Initiate

```js
import { JsShowHide } from "js-show-hide";
new JsShowHide();
```

Optionally pass through `{ hiders: 'data-foo', showers: 'data-bar' }` if you want to use different data attributes

## Instanciate

```html
<div data-js-hide=".hide-these, .elements" data-js-show=".show-these"></div>
```
