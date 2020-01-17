import { Form } from '../../types';

export default {
	questionString: {
		type: 'string',
		title: 'Question ?',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: null,
		metadata: {
			label: 'Label du champ',
			outlined: true
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
	questionSelectSliderTick: {
		type: 'select',
		title: 'Question select slider',
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
			ticks: 'always',
			tickSize: 7,
			thumbSize: 30,
			thumbLabel: true,
			type: 'choiceSlider'
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
	}
} as Form;
