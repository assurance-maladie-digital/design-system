---
title: mockTranslation
description: La fonction `mockTranslation` permet de créer le mock d’une traduction spécifique.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
	Wrapper,
	mount,
	createLocalVue,
	installGlobalPlugins,
	mockTranslation
} from '@/tests-unit/utils';

describe('Testing', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	const mocks = {
		...mockTranslation<string[]>('path.to.translation1', ['translation1']),
		...mockTranslation<string[]>('path.to.translation2', ['translation2'])
	};

	installGlobalPlugins(localVue);

	it('renders correctly', () => {
		wrapper = mount(Component, {
			localVue,
			mocks
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});

```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="tests-unitaires/mock-translation"></doc-api>
</doc-tab-item>

</doc-tabs>
