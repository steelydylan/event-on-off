# event-on-off
A low-level module which supports jquery-like event delegations.<br>
If you have ever used jQuery 'on' method, then you already know how to use this.

## Install

npm

```
npm install event-on-off --save
```

or yarn

```
yarn add event-on-off
```

## Usage

```js
import { on, off } from 'event-on-off';

const parent1 = document.querySelector("#test");
on(parent1, ".btn", "click", () => {
  document.querySelector("#test-result").innerText = 'ok';
});
```

```html
<div id="test">
  <button class="btn">test</button>
  <div id="test-result"></div>
</div>
```

## Also

you can listen more than 2 events at once

```js
const parent2 = document.querySelector("#test2");
on(parent2, ".btn", "mousedown mouseup", (e) => {
  if (e.type === 'mousedown') {
    document.querySelector("#test2-result").innerText = 'mousedown';
  } else if (e.type === 'mouseup') {
    document.querySelector("#test2-result").innerText = 'mouseup';
  }
});
```

