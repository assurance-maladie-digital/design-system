import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import Demo from '../Demo.vue';

describe('Demo', () => {
	const title = 'demo';
	const description = 'lorem ipsum dolor sit amet';
	const btnLabel = 'button';

	const propsData =  {
		title,
		description,
		btnLabel
	}

	it('should render', () => {

		const wrapper = mount(Demo, {
			global: {
				plugins: [ vuetify ],
			},
			propsData
		});
		const componentTest = wrapper.text();
		expect(componentTest).toContain(title);
		expect(componentTest).toContain(description);
		expect(componentTest).toContain(btnLabel);
	});

	it('should emit click event', async () => {
		const wrapper = mount(Demo, {
			global: {
				plugins: [ vuetify ],
			},
			propsData
		});

		const btn = wrapper.find('button');
		await btn.trigger('click');

		expect(wrapper.emitted()).toHaveProperty('click');
		expect(wrapper.emitted().click).toContainEqual(["clicked"]);
	});
});
