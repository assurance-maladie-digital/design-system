---
title: deepRemoveKeys
description: Le helper `deepRemoveKeys` permet de supprimer des clés d'un objet ou d'un tableau.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { deepRemoveKeys } from '@cnamts/vue-dot/src/helpers/deepRemoveKeys';

deepRemoveKeys({ a: 1, b: 2 }, ['a']); // { b: 2 }
deepRemoveKeys([ 1, 2, 3 ], [1]); // [ 1, 3 ]
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/deep-remove-keys"></doc-api>
</doc-tab-item>

</doc-tabs>
