---
title: testUtils
description: Le helper `testUtils` contient un ensemble de fonctions utilitaires pour les tests unitaires.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-alert type="info">

Le helper `testUtils` exporte également toutes les fonctions du package [Vue Test Utils](https://vue-test-utils.vuejs.org/).

</doc-alert>

### applyGlobalConfig

La fonction `applyGlobalConfig` permet d’appliquer la configuration globale pour les tests, elle est utilisée dans le fichier `setup.ts`.

```ts
import { applyGlobalConfig } from '@cnamts/vue-dot/src/helpers/testUtils';

applyGlobalConfig();
```

### installGlobalPlugins

La fonction `installGlobalPlugins` permet d’installer les plugins [Vue Input Facade](https://ronaldjerez.github.io/vue-input-facade/), [Vue Meta](https://vue-meta.nuxtjs.org/), [Vuex](https://vuex.vuejs.org/), [Vuetify](https://v2.vuetifyjs.com/) et Vue Dot pour les tests.

```ts
import { createLocalVue, installGlobalPlugins } from '@cnamts/vue-dot/src/helpers/testUtils';

const localVue = createLocalVue();

installGlobalPlugins(localVue);
```

### installRouter

La fonction `installRouter` permet d’installer [Vue Router](https://v3.router.vuejs.org/fr/) pour les tests.

```ts
import { createLocalVue, installRouter } from '@cnamts/vue-dot/src/helpers/testUtils';

const localVue = createLocalVue();

installRouter(localVue);
```

### createRouter

La fonction `createRouter` permet de créer une instance de [Vue Router](https://v3.router.vuejs.org/fr/) pour les tests.

```ts
import { createRouter } from '@cnamts/vue-dot/src/helpers/testUtils';

const routes = [];

const router = createRouter({
	routes
});
```

### createStore

La fonction `createStore` permet de créer une instance de [Vuex](https://vuex.vuejs.org/) pour les tests.

```ts
import { createStore } from '@cnamts/vue-dot/src/helpers/testUtils';

const store = createStore({
	state: {}
});
```

### createVuetifyInstance

La fonction `createVuetifyInstance` permet de créer une instance de [Vuetify](https://v2.vuetifyjs.com/) pour les tests.

```ts
import { createVuetifyInstance } from '@cnamts/vue-dot/src/helpers/testUtils';

const vuetify = createVuetifyInstance();
```

### mockVFormRef

La fonction `mockVFormRef` permet de mocker la référence d’un composant [VForm](https://v2.vuetifyjs.com/en/components/forms/) pour les tests.

```ts
import { mockVFormRef } from '@cnamts/vue-dot/src/helpers/testUtils';

const mocks = {
	$refs: {
		form: mockVFormRef(true)
	}
};
```

### mockTranslations

La fonction `mockTranslations` permet de mocker les traductions pour les tests.

```ts
import { mockTranslations } from '@cnamts/vue-dot/src/helpers/testUtils';

const mocks = {
	...mockTranslations<string | string[]>({
		'path.to.title': 'Titre',
		'path.to.items': [
			'Élément 1',
			'Élément 2',
			'Élément 3'
		]
	})
};
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/test-utils"></doc-api>
</doc-tab-item>

</doc-tabs>
