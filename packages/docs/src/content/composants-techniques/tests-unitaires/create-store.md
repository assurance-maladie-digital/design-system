---
title: createStore
description: La fonction `createStore` permet de créer une instance de vuex pour simuler le store.
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
	html,
	mount,
	createLocalVue,
	createStore,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Testing', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let store: Store<Record<string, never>>;
	let state: Partial<UserState>;


	installGlobalPlugins(localVue);

	beforeEach(() => {
		state = {
			firstname: 'Nom',
			lastname: 'prenom'
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
		wrapper = mount(Component, {
			localVue,
			store
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});

```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="tests-unitaires/create-store"></doc-api>
</doc-tab-item>

</doc-tabs>
