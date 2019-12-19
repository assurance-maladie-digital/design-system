import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import { ComputedField } from '../../FormBuilder/types';
import { Layouts } from '../layoutsEnum';

import FormLayout from '../FormLayout.vue';

let wrapper: Wrapper<Vue>;

const testField: ComputedField = {
	type: 'string',
	value: null,
	name: 'field1'
};

const layout = {
	type: Layouts.Medium,
	fields: [testField]
};

// Tests
describe('FormLayout', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FormLayout, {
			propsData: {
				layout
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
