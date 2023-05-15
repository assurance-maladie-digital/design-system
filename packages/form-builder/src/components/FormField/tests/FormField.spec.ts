import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';

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

describe('FormField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FormField, {
			propsData: {
				field: testField
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
