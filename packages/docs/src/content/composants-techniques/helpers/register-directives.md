---
title: registerDirectives
description: Le helper `registerDirectives` permet d’enregistrer des directives de manière globale.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import { customDirective } from './customDirective';

import { registerDirectives } from '@cnamts/vue-dot/src/helpers/registerDirectives';

const directives = {
	customDirective
};

registerDirectives(Vue, directives);
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/register-directives"></doc-api>
</doc-tab-item>

</doc-tabs>
