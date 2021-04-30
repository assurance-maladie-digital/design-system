import { Api } from '~/types';

export const api: Api = {
	DatePicker: {
		props: [
			{
				name: 'value',
				type: 'string',
				default: `''`,
				description: 'La date sélectionnée.'
			},
			{
				name: 'outlined',
				type: 'boolean',
				default: false,
				description: 'Affiche le `VTextField` en mode `outlined`.'
			},
			{
				name: 'no-calendar',
				type: 'boolean',
				default: false,
				description: 'Désactive le calendrier.'
			},
			{
				name: 'no-prepend-icon',
				type: 'boolean',
				default: false,
				description: 'Supprime l\'icône avant le `VTextField`.'
			},
			{
				name: 'append-icon',
				type: 'boolean',
				default: false,
				description: 'Affiche le bouton du calendrier dans le `VTextField`.'
			},
			{
				name: 'text-field-activator',
				type: 'boolean',
				default: false,
				description: 'Affiche le calendrier lors du clic sur le `VTextField`.'
			},
			{
				name: 'text-field-class',
				type: [
					'string',
					'string[]'
				],
				default: 'undefined',
				description: 'Les classes à appliquer au `VTextField`.'
			},
			{
				name: 'start-date',
				type: 'string',
				default: 'undefined',
				description: 'La date de début de la période.'
			},
			{
				name: 'show-weekends',
				type: 'boolean',
				default: false,
				description: 'Affiche les weekends dans le calendrier.'
			},
			{
				name: 'warning-rules',
				type: 'ValidationRule[]',
				default: '[]',
				description: 'Les règles d\'alertes, qui ne bloquent pas la validation.'
			},
			{
				name: 'date-format',
				type: 'string',
				default: `'DD/MM/YYYY'`,
				description: 'Le format de la date affichée dans le `VTextField`.'
			},
			{
				name: 'date-format-return',
				type: 'string',
				default: `'YYYY-MM-DD'`,
				description: 'Le format de la date utilisé avec le `v-model`.'
			},
			{
				name: 'mask',
				type: [
					'string',
					'boolean'
				],
				default: 'undefined',
				description: 'Masque limitant les caractères pouvant être saisis dans le `VTextField`.<br>Par défaut, il est calculé à partir de la prop `date-format`. La valeur `false` permet de le désactiver.'
			},
			{
				name: 'birthdate',
				type: 'boolean',
				default: false,
				description: 'Simplifie la sélection d\'une date de naissance en choisissant l\'année, le mois puis le jour.'
			},
			{
				name: 'picker-date',
				type: 'string',
				default: 'undefined',
				description: 'Le mois / l\'année affiché, à utiliser avec le modificateur `.sync`.<br>En mode date de naissance, l\'année sélectionnée sera `1990` par défaut.'
			},
			{
				name: 'error',
				type: 'boolean',
				default: false,
				description: 'Mets le `VTextField` en erreur manuellement, à utiliser avec le modificateur `.sync`.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				default: 'undefined',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				example: `{
	textField: 'VTextField',
	datePicker: 'VDatePicker',
	icon: 'VIcon',
	btn: 'VBtn',
	menu: 'VMenu'
}`
			}
		],
		slots: [
			{
				name: 'prepend',
				description: 'Slot pour afficher du contenu avant le `VTextField` et remplacer le bouton par défaut.'
			},
			{
				name: 'append',
				description: 'Slot pour afficher du contenu dans le `VTextField` et remplacer le bouton par défaut.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'string'
			},
			{
				name: 'input',
				description: 'Événement émis dès que l\'utilisateur écrit dans le champ.',
				value: 'string'
			}
		]
	}
};
