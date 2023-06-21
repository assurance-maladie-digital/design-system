---
title: registerComponents
description: Le helper `registerComponents` permet d’enregistrer des composants de manière globale.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import AppPage from './AppPage.vue';
import AppBtn from './AppBtn.vue';

import { registerComponents } from '@cnamts/vue-dot/src/helpers/registerComponents';

const components = {
	AppPage,
	AppBtn
};

registerComponents(Vue, components);
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/register-components"></doc-api>
</doc-tab-item>

</doc-tabs>
