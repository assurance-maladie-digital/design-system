---
title: deepRemoveKeys
description: Le helper `deepRemoveKeys` permet de supprimer des clés d’un objet ou d’un tableau en profondeur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { deepRemoveKeys } from '@cnamts/vue-dot/src/helpers/deepRemoveKeys';

const deepObject = {
	a: 1,
	b: {
		c: 2
	}
};

deepRemoveKeys(deepObject, 'c'); // { a: 1, b: {} }

const deepArray = [
	1,
	{
		b: [2]
	}
];

deepRemoveKeys(deepArray, ['b']); // [1, {}]
```

Il est possible de spécifier le type de retour en passant ce type en paramètre.

```ts
deepRemoveKeys<MyObject>(deepObject, 'c');
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/deep-remove-keys"></doc-api>
</doc-tab-item>

</doc-tabs>
