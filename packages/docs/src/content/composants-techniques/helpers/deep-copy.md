---
title: deepCopy
description: Le helper `deepCopy` permet de copier un objet ou un tableau sans référence en profondeur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';

deepCopy({ a: 1, b: 2 }); // { a: 1, b: 2 }
deepCopy([1, 2, 3]); // [1, 2, 3]
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/deep-copy"></doc-api>
</doc-tab-item>

</doc-tabs>
