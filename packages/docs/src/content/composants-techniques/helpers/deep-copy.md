---
title: deepCopy
description: Le helper `deepCopy` permet de copier un objet ou un tableau sans référence en profondeur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';

deepCopy({
	a: 1,
	b: {
		c: 2
	}
});
// 'c' est bien copié

deepCopy([
	1,
	2,
	[3]
]);
// '[3]' est bien copié
```

Il est possible de spécifier le type de retour en passant ce type en paramètre.

```ts
deepCopy<MyObject>({
	a: 1,
	b: {
		c: 2
	}
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/deep-copy"></doc-api>
</doc-tab-item>

</doc-tabs>
