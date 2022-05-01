---
title: Fonction debounce
description: La fonction `debounce` permet de n’exécuter une fonction qu’une seule fois, après un délai depuis le dernier appel à la fonction.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { debounce } from '@cnamts/vue-dot/src/functions/debounce';

const sayHello = () => {
	console.log('Hello!');
};

let sayHelloDebounced = debounce(sayHello);
sayHelloDebounced();
sayHelloDebounced();
// console.log('Hello!') only one time, after 500ms

sayHelloDebounced = debounce(sayHello, 2000);
sayHelloDebounced();
sayHelloDebounced();
// console.log('Hello!') only one time, after 2s
```

<doc-alert type="info">
Cette fonction permet d’améliorer les performances en réduisant le nombre d’appels à une fonction.
</doc-alert>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="functions/debounce"></doc-api>
</doc-tab-item>

</doc-tabs>
