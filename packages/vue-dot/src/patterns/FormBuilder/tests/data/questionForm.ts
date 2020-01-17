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
	questionSelectButton: {
		type: 'select',
		title: 'Question select button',
		description: 'Informations supplémentaires',
		items: [
			{
				text: 'multiple 1',
				value: 11
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
			}
		],
		metadata: {
			type: 'choiceButton',
			multiple: true,
			hint: 'Texte informatif'
		}
	}
} as Form;
