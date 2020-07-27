import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';
import { html } from '@cnamts/vue-dot/tests/utils/html';
import { Field } from './../../types';

import ChoiceField from '../ChoiceField.vue';

let wrapper: Wrapper<Vue>;

const testField: Field = {
	type: 'select',
	title: 'Votre taille',
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
			text: 'Autre',
			value: 'autre'
		}
	],
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
				field: {
					...testField,
					value: {
						value: '0'
					}
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders the other field', () => {
		// Mount component
		wrapper = mountComponent(ChoiceField, {
			propsData: {
				field: {
					...testField,
					value: {
						value: null,
						other: 'XXL'
					},
					other: {
						label: 'Autre taille',
						fieldOptions: {
							hint: 'Veuillez entrez votre taille'
						}
					}
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders the other field when the corresponding choice is selected', () => {
		// Mount component
		wrapper = mountComponent(ChoiceField, {
			propsData: {
				field: {
					...testField,
					value: {
						value: 'autre',
						other: 'XXL'
					},
					other: {
						label: 'Autre taille',
						selectedChoice: 'autre',
						fieldOptions: {
							hint: 'Veuillez entrez votre taille'
						}
					}
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
