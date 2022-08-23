---
title: createVuetifyInstance
description: La fonction `createVuetifyInstance` permet de créer une instance de vuetify.
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
	mount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Testing', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = mount(Component, {
			localVue,
			vuetify
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});

```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="tests-unitaires/create-vuetify-instance"></doc-api>
</doc-tab-item>

</doc-tabs>
