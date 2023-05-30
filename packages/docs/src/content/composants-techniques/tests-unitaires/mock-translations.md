---
title: mockTranslations
description: La fonction `mockTranslations` permet de mocker des traductions spécifiques.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import {
	Wrapper,
	shallowMount,
	createLocalVue,
	installGlobalPlugins,
	mockTranslations
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Component', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	const mocks = {
		...mockTranslations<string | string[]>({
			'path.to.title': 'Title',
			'path.to.label': 'Label',
			'path.to.items': [
				'Item 1',
				'Item 2',
				'Item 3'
			]
		})
	};

	installGlobalPlugins(localVue);

	it('renders correctly', () => {
		wrapper = shallowMount(Component, {
			localVue,
			mocks
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="unit-tests/mock-translations"></doc-api>
</doc-tab-item>

</doc-tabs>
