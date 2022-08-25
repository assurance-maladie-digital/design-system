---
title: mockVFormRef
description: La fonction `mockVFormRef` permet de mocker une référence à un composant `VForm`.
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
	mockVFormRef
} from '@cnamts/vue-dot/src/helpers/testUtils';

describe('Component', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;

	installGlobalPlugins(localVue);

	it('submits form', () => {
		const mocks = {
			$refs: {
				form: mockVFormRef(true)
			}
		};

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
<doc-api name="tests-unitaires/mock-v-form-ref"></doc-api>
</doc-tab-item>

</doc-tabs>
