---
title: testUtils
description: Le helper `testUtils` permet de récupérer des fonctions utilitaires pour les tests.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';
import Vuetify from 'vuetify';

import {
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins,
	mockTranslations
} from '@cnamts/vue-dot/src/helpers/testUtils';

import MyComponent from '../';

describe('MyComponent', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(AppHeader, {
			localVue,
			vuetify,
			mocks: {
				...mockTranslations<string[]>({
					'components.layout.myComponent.items': []
				}),
				$maintenanceEnabled: false
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/test-utils"></doc-api>
</doc-tab-item>

</doc-tabs>
