import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';
import { html } from '@cnamts/vue-dot/tests/utils/html';
import { Field } from './../../types.d';

import ChoiceField from '../ChoiceField.vue';

let wrapper: Wrapper<Vue>;

const testField: Field = {
	type: 'select',
	title: 'Votre taille',
	value: {
		value: 'autre',
		other: 'XXL'
	},
	items: [
		{
			text: 'S',
			value: 0
		},
		{
			text: 'M',
			value: 1
		},
		{
			text: 'L',
			value: 2,
			alone: true
		},
		{
			text: 'XL',
			value: 3,
			alone: true
		},
		{
			text: 'Autre',
			value: 'autre'
		}
	],
	other: {
		label: 'Autre taille',
		selectedChoice: 'autre',
		fieldOptions: {
			hint: 'Veuillez entrez votre taille'
		}
	},
	fieldOptions: {
		label: 'Classic field',
		outlined: true
	}
};

// Tests
describe('ChoiceField', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(ChoiceField, {
			propsData: {
				field: testField
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
