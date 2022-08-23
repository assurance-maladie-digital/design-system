---
title: mockTranslation
description: La fonction `mockTranslation` permet de créer le mock de traductions spécifiques.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';

import {
	Wrapper,
	mount,
	createLocalVue,
	installGlobalPlugins,
	mockTranslation
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Testing', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	const mocks = {
		...mockTranslation<string | string[]>({
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
