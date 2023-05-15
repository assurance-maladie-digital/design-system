---
title: createStore
description: La fonction `createStore` permet de créer une instance Vuex pour mocker le store.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import { Store } from 'vuex';

import { UserState } from '@/store/modules/user/types';

import Component from '../';

import {
	Wrapper,
	shallowMount,
	createLocalVue,
	createStore,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Component', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let store: Store<Record<string, never>>;
	let state: Partial<UserState>;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		state = {
			firstname: 'Nom',
			lastname: 'Prénom'
		};

		store = createStore({
			modules: {
				user: {
					state,
					actions,
					namespaced: true
				}
			}
		});
	});

	it('renders correctly', () => {
		wrapper = shallowMount(Component, {
			localVue,
			store
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="unit-tests/create-store"></doc-api>
</doc-tab-item>

</doc-tabs>
