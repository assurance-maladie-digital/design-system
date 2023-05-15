---
title: installGlobalPlugins
description: La fonction `installGlobalPlugins` permet d’ajouter les plugins `InputFacade`, `Meta`, `Vuex`, `VueDot` et `Vuetify` à une instance Vue.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import Component from '../';

import {
	Wrapper,
	shallowMount,
	createLocalVue,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Component', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	installGlobalPlugins(localVue);

	it('renders correctly', () => {
		wrapper = shallowMount(Component, {
			localVue
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="unit-tests/install-global-plugins"></doc-api>
</doc-tab-item>

</doc-tabs>
