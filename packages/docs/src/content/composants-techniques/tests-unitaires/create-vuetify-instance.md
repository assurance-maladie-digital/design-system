---
title: createVuetifyInstance
description: La fonction `createVuetifyInstance` permet de créer une instance Vuetify.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import Component from '../';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Component', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(Component, {
			localVue,
			vuetify
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="unit-tests/create-vuetify-instance"></doc-api>
</doc-tab-item>

</doc-tabs>
