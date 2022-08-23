---
title: installRouter
description: La fonction `installRouter` permet d’ajouter une instance du router à une instance de Vue.
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
	installRouter,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Testing', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	installGlobalPlugins(localVue);
	installRouter(localVue);

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
<doc-api name="tests-unitaires/install-router"></doc-api>
</doc-tab-item>

</doc-tabs>
