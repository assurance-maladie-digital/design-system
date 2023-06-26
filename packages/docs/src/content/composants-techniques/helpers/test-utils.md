---
title: testUtils
description: Le helper `testUtils` contient un ensemble de fonctions utilitaires pour les tests unitaires.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	config,
	createLocalVue
} from '@cnamts/vue-dot/src/helpers/testUtils';

import MyComponent from '../';

describe('MyComponent', () => {
	it('applies the global config', () => {
    applyGlobalConfig();

    expect(Vue.config.devtools).toBeFalsy();
	});

	it('installs the global plugins', () => {
    const localVue = createLocalVue();

		installGlobalPlugins(localVue);

		expect(localVue.use).toHaveBeenCalledWith(VueI18n);
	});

	it('installs the router', () => {
    const localVue = createLocalVue();

    installRouter(localVue);

    expect(localVue.use).toHaveBeenCalledWith(VueRouter);
	});

	it('creates a router', () => {  
    const router = createRouter();

    expect(router).toBeInstanceOf(VueRouter);
	});

	it('creates a store', () => {
    const store = createStore();

    expect(store).toBeInstanceOf(Vuex.Store);
	});

	it('creates a Vuetify instance', () => {
    const vuetify = createVuetify();

    expect(vuetify).toBeInstanceOf(Vuetify);
	});

	it('mocks a valid VForm ref', () => {
    const { validate, reset, resetValidation } = mockVFormRef(true);

		expect(validate()).toBeTruthy();
		expect(resetValidation()).toBeUndefined();
		expect(reset()).toBeUndefined();
	});

	it('mocks translations', () => {
    const translations = mockTranslations();

    expect(translations).toEqual({
      fr: {
        'my-component': {
          title: 'Mon composant',
        },
      },
    });
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/test-utils"></doc-api>
</doc-tab-item>

</doc-tabs>
