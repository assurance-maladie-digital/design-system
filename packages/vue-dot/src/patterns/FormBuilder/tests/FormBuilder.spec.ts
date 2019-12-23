import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import FormBuilder from '../FormBuilder.vue';

import FormField from '../../FormField';

let wrapper: Wrapper<Vue>;

const questionForm = {
	question_string: {
		type: 'string',
		title: 'Question ?',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: null,
		metadata: {
			label: 'Label du champ'
		}
	},
	questionDate: {
		type: 'date',
		title: 'Question',
		description: 'Informations supplémentaires',
		tooltip: 'date info',
		value: null,
		metadata: {
			label: 'date'
		}
	},
	questionPeriode: {
		type: 'periode',
		title: 'Question période',
		description: 'Informations supplémentaires',
		tooltip: 'periode info',
		value: null,
		metadata: {
			appendIcon: true,
				from: {
					textField: {
						label: 'Du',
						outlined: true,
						hint: 'Texte informatif',
						persistentHint: true
					}
				},
				to: {
					textField: {
						label: 'Au',
						outlined: true,
						hint: 'Texte informatif',
						persistentHint: true
					}
				}
		}
	}
};

const testForm = {
	question: {
		title: 'Test ?',
		type: 'string',
		value: null,
		description: 'Test description',
		tooltip: 'Test',
		metadata: {
			label: 'Question field',
			placeholder: 'Value example',
			outlined: true
		}
	},
	field: {
		type: 'string',
		value: null,
		metadata: {
			label: 'Classic field',
			outlined: true
		}
	}
};

// Tests
describe('FormBuilder', () => {
	it('renders form classic correctly', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			stubs: {
				FormField
			},
			propsData: {
				value: testForm
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders form question correctly', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			stubs: {
				FormField
			},
			propsData: {
				value: questionForm,
				defaultLayout:'question'

			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
