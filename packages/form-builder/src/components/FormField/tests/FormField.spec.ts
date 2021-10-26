import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests/unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import FormField from '../FormField.vue';

let wrapper: Wrapper<Vue>;

const testField = {
	type: 'text',
	value: null,
	fieldOptions: {
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
				field: testField
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
