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

describe('ChoiceField', () => {
	it('renders correctly', () => {
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

		expect(wrapper).toMatchSnapshot();
	});

	it('renders the other field', () => {
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

		expect(wrapper).toMatchSnapshot();
	});

	it('renders the other field when the corresponding choice is selected', () => {
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

		expect(wrapper).toMatchSnapshot();
	});

	it('renders with single error message', () => {
		wrapper = mountComponent(
			ChoiceField,
			{
				propsData: {
					field: {
						...testField,
						fieldOptions: {
							type: 'choiceButton',
							errorMessages: 'Erreur'
						}
					}
				}
			},
			true
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders with multiple error messages', () => {
		wrapper = mountComponent(
			ChoiceField,
			{
				propsData: {
					field: {
						...testField,
						fieldOptions: {
							type: 'choiceButton',
							errorMessages: [
								'Erreur 1',
								'Erreur 2'
							]
						}
					}
				}
			},
			true
		);

		expect(wrapper).toMatchSnapshot();
	});
});
