---
title: mockVFormRef
description: La fonction `mockVFormRef` permet de créer un mock d’un VForm.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import { ActionTree } from 'vuex';

import {
	Wrapper,
	mount,
	createLocalVue,
	installGlobalPlugins,
	mockVFormRef
} from '@/tests-unit/utils';

describe('Testing', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let actions: ActionTree<string, never>;

	installGlobalPlugins(localVue);
	installRouter(localVue);

	beforeEach(() => {
		actions = {
			submitForm: jest.fn()
		};
	});

	it('submit form', async () => {
		const mocks = {
			$refs: {
				form: mockVFormRef(true)
			}
		};

		wrapper = mount(Component, {
			localVue,
			mocks
		});

		wrapper.findComponent({ ref: 'form' }).trigger('submit');
		await wrapper.vm.$nextTick();

		expect(actions.submitForm).toHaveBeenCalled();
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="tests-unitaires/mock-v-form-ref"></doc-api>
</doc-tab-item>

</doc-tabs>
