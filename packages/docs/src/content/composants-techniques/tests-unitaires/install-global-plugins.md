---
title: installGlobalPlugins
description: La fonction `installGlobalPlugins` permet d’ajouter les plugins `InputFacade`, `Meta`, `Vuex`, `VueDot` et `Vuetify` à une instance de Vue.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import Component from '../';

import {
	Wrapper,
	html,
	mount,
	createLocalVue,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Testing', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	installGlobalPlugins(localVue);

	it('renders correctly', () => {
		wrapper = mount(Component, {
			localVue
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});

```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="tests-unitaires/install-global-plugins"></doc-api>
</doc-tab-item>

</doc-tabs>
