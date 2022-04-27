---
title: Fonction debounce
description: La fonction `debounce` permet d'empaquetter une fonction dans une autre qui rettardera son execution.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { debounce } from '@cnamts/vue-dot/src/functions/formatDate';

const sayHello = () => {
  console.log('Hello !');
}

sayHelloDebounced = debounce(sayHello);
sayHelloDebounced(); // console.log('Hello !') after 500 ms

sayHelloDebounced = debounce(sayHello, 2000);
sayHelloDebounced(); // console.log('Hello !') after 2000 ms
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="functions/debounce"></doc-api>
</doc-tab-item>

</doc-tabs>
