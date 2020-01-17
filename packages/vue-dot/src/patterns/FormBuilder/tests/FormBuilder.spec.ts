import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import FormBuilder from '../';

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
	},
	questionPeriod: {
		type: 'period',
		title: 'Question période',
		description: 'Informations supplémentaires',
		value: null,
		metadata: {
			appendIcon: true,
			from: {
				textField: {
					label: 'Du',
					outlined: true
				}
			},
			to: {
				textField: {
					label: 'Au',
					outlined: true
				}
			}
		}
	},
	questionSelect: {
		type: 'select',
		title: 'Question select',
		description: 'Informations supplémentaires',
		value: null,
		items: [
			{
				text: 'Abricot',
				value: 1
			},
			{
				text: 'Citron',
				value: 2
			}
		],
		metadata: {
			outlined: true,
			chips: true,
			menuProps: {
				offsetY: true
			},
			label: 'Votre réponse'
		}
	},
	questionSelectMultiple: {
		type: 'select',
		title: 'Question select multiple',
		description: 'Informations supplémentaires',
		value: null,
		items: [
			{
				text: 'Abricot',
				value: 1
			},
			{
				text: 'Citron',
				value: 2
			}
		],
		metadata: {
			multiple: true,
			outlined: true
		}
	},
	questionAutocomplete: {
		type: 'autocomplete',
		title: 'Question avec complétion automatique',
		description: 'Informations supplémentaires',
		value: null,
		items: [
			{
				text: 'Abricot',
				value: 1
			},
			{
				text: 'Citron',
				value: 2
			}
		],
		metadata: {
			outlined: true,
			chips: true,
			menuProps: {
				offsetY: true
			},
			label: 'Votre réponse'
		}
	},
	questionSelectSliderTick: {
		type: 'select',
		title: 'Question select slider tick',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: 'value2',
		items: [
			{ text: 'text1', value: 'value1' },
			{ text: 'text2', value: 'value2' },
			{ text: 'text3', value: 'value3' }
		],
		metadata: {
			type: 'choiceSlider'
		}
	},
	questionSelectSliderThumb: {
		type: 'select',
		title: 'Question select slider thumb',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: 'value2',
		items: [
			{ text: 'text1', value: 'value1' },
			{ text: 'text2', value: 'value2' },
			{ text: 'text3', value: 'value3' }
		],
		metadata: {
			thumbLabel: true,
			type: 'choiceSlider'
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

	it('renders correctly with a question layout', () => {
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
