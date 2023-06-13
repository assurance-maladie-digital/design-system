---
title: scrollBehavior
description: Le helper `scrollBehavior` permet de définir le comportement du scroll lors de la navigation avec [Vue Router](https://v3.router.vuejs.org/).
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import { scrollBehavior } from '@cnamts/vue-dot/src/helpers/scrollBehavior';

import { routes } from './routes';

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/scroll-behavior"></doc-api>
</doc-tab-item>

</doc-tabs>
