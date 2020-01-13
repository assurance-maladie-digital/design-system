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
	questionButtonToggle: {
		type: 'selectButton',
		title: 'Question select button',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: [],
		items: [{ text: 'Abricot', value: 1 }, { text: 'Citron', value: 2 }],
		metadata: {
			multiple: true
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

	it('renders form question correctly', () => {
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
