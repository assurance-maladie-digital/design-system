import { Form } from '../../types';

const defaultItems = [
	{
		text: 'Abricot',
		value: 11
	},
	{
		text: 'Citron',
		value: 'citron'
	},
	{
		text: 'Null',
		value: null
	}
];

export default {
	questionString: {
		type: 'text',
		title: 'Question ?',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: null,
		metadata: {
			label: 'Label du champ',
			outlined: true
		}
	},
	questionNumber: {
		type: 'number',
		title: 'Question nombre ?',
		description: 'Informations supplémentaires',
		value: null,
		metadata: {
			mask: '###-###'
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
			from: {
				appendIcon: true,
				textField: {
					label: 'Du',
					outlined: true
				}
			},
			to: {
				appendIcon: true,
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
		items: defaultItems,
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
		items: defaultItems,
		metadata: {
			type: 'choiceSlider',
			ticks: 'always',
			tickSize: 7,
			thumbSize: 60,
			thumbLabel: true
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
	questionChoiceButton: {
		type: 'select',
		title: 'Question choix boutton',
		description: 'Informations supplémentaires',
		items: defaultItems,
		metadata: {
			type: 'choiceButton',
			hint: 'Texte informatif'
		}
	},
	questionChoiceButtonMultiple: {
		type: 'select',
		title: 'Question choix boutton multiple',
		description: 'Informations supplémentaires',
		items: [
			{
				text: 'multiple 1',
				value: 'test1'
			},
			{
				text: 'multiple 2',
				value: 22
			},
			{
				text: 'seul 1',
				value: 33,
				alone: true
			},
			{
				text: 'seul 2',
				value: 44,
				alone: true
			},
			{
				text: 'null value',
				value: null
			}
		],
		metadata: {
			type: 'choiceButton',
			multiple: true
		}
	}
} as Form;
