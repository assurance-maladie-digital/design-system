---
title: createRouter
description: La fonction `createRouter` permet de créer une instance du router.
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
	createRouter,
	installRouter,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Testing', () => {
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
		wrapper = mount(Component, {
			localVue,
			router
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});

```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="tests-unitaires/create-router"></doc-api>
</doc-tab-item>

</doc-tabs>
