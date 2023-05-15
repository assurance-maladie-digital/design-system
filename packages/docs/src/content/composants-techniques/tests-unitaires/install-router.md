---
title: installRouter
description: La fonction `installRouter` permet de configurer Vue Router sur une instance Vue.
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
	installRouter,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Component', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	installGlobalPlugins(localVue);
	installRouter(localVue);

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
<doc-api name="unit-tests/install-router"></doc-api>
</doc-tab-item>

</doc-tabs>
