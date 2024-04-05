import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@cnamts/vue-dot/tests';
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

	it('renders the other field when the corresponding choice is selected and type of other is array', () => {
		wrapper = mountComponent(ChoiceField, {
			propsData: {
				field: {
					type: 'select',
					title: 'Question choix multiple conditionnel',
					items: [
						{
							text: 'Oui',
							value: 'oui'
						},
						{
							text: 'Non',
							value: 'non'
						}
					],
					fieldOptions: {
						outlined: true,
						type: 'choiceButton',
						inline: true
					},
					value: {
						value: 'oui',
						other: 'justification'
					},
					other: [
						{
							label: 'Merci d\'expliquer les raisons de votre réponse affirmative ?',
							selectedChoice: 'oui',
							fieldOptions: {
								hint: 'Veuillez entrez votre réponse'
							}
						},
						{
							label: 'Merci de clarifier les raisons de votre réponse négative ?',
							selectedChoice: 'non',
							fieldOptions: {
								hint: 'Veuillez entrez votre réponse'
							}
						}
					]
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
