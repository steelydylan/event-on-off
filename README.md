# event-on-off
A low-level module which supports jquery-like event delegations.<br>
If you have ever used jQuery 'on' method, then you already know how to use this.

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
