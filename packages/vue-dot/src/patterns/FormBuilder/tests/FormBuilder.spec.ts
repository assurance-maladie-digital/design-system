import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import FormBuilder from '../FormBuilder.vue';

import FormField from '../../FormField';

let wrapper: Wrapper<Vue>;

const questionForm = {
	questionString: {
		type: 'string',
		title: 'Question ?',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: null,
		metadata: {
			label: 'Label du champ'
		}
	},
	questionSelect: {
		type: 'select',
		title: 'Question select',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: null,
		items: [{ text: 'Abricot', value: 1 },{ text: 'Citron', value: 2 }]
	},
	questionTextarea: {
		type: 'textarea',
		title: 'Question longue type textarea',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: null,
		metadata: {
			outlined: true
		}
	},
	questionDate: {
		type: 'date',
		title: 'Question',
		description: 'Informations supplémentaires',
		value: null,
		metadata: {
			appendIcon: true,
			textField: {
				outlined: true,
				hint: 'Texte informatif'
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
	it('renders correctly', () => {
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

	it('renders correctly with a specified question layout', () => {
		// Mount component
		wrapper = mountComponent(FormBuilder, {
			stubs: {
				FormField
			},
			propsData: {
				value: questionForm,
				defaultLayout: 'question'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
