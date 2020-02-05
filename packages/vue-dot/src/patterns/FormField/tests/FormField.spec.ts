import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FormField from '../FormField.vue';

let wrapper: Wrapper<Vue>;

const testField = {
	type: 'text',
	value: null,
	metadata: {
		label: 'Classic field',
		outlined: true
	}
};

// Tests
describe('FormField', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormField, {
			propsData: {
				value: testField
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
