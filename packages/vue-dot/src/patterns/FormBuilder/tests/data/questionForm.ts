import { Form } from '../../types';

const defaultItems = [
	{
		text: '9h',
		value: 9
	},
	{
		text: '9h30',
		value: '9.30'
	},
	{
		text: '10h',
		value: 10
	},
	{
		text: '10h30',
		value: null
	}
];

export const questionForm: Form = {
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
			mask: '###-###',
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
		items: defaultItems,
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
		items: defaultItems,
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
			thumbLabel: true
		}
	},
	questionSelectSliderThumbLabel: {
		type: 'select',
		title: 'Question select slider thumb with custom label',
		description: 'Informations supplémentaires',
		tooltip: 'Texte d\'aide',
		value: 'value2',
		items: defaultItems,
		metadata: {
			labelMin: 'min',
			labelMax: 'max',
			type: 'choiceSlider',
			thumbLabel: true
		}
	},
	questionAutocomplete: {
		type: 'autocomplete',
		title: 'Question avec complétion automatique',
		description: 'Informations supplémentaires',
		value: null,
		items: defaultItems,
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
		title: 'Question choix bouton',
		description: 'Informations supplémentaires',
		items: defaultItems,
		metadata: {
			type: 'choiceButton',
			hint: 'Texte informatif'
		}
	},
	questionChoiceButtonMultiple: {
		type: 'select',
		title: 'Question choix bouton multiple',
		description: 'Informations supplémentaires',
		items: [
			{
				text: 'Multiple 1',
				value: 'test1'
			},
			{
				text: 'Multiple 2',
				value: 22
			},
			{
				text: 'Seul 1',
				value: 33,
				alone: true
			},
			{
				text: 'Seul 2',
				value: 44,
				alone: true
			},
			{
				text: 'Valeur nulle',
				value: null
			}
		],
		metadata: {
			type: 'choiceButton',
			multiple: true
		}
	}
};
