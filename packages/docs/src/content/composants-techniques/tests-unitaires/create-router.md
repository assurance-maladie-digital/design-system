---
title: createRouter
description: La fonction `createRouter` permet de créer une instance pour mocker le router.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import Component from '../';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createRouter,
	installRouter,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Component', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let router: VueRouter;

	const routes = [
		{
			name: 'home',
			path: '/home'
		}
	];


	installGlobalPlugins(localVue);
	installRouter(localVue);

	it('renders correctly', () => {
		wrapper = shallowMount(Component, {
			localVue,
			router
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="unit-tests/create-router"></doc-api>
</doc-tab-item>

</doc-tabs>
