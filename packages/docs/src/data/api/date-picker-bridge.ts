import { Api } from '~/types';

export const api: Api = {
	DatePicker: {
		props: [
			{
				name: 'model-value',
				type: 'string',
				default: `''`,
				description: 'La date sélectionnée au format spécifié par la prop `date-format-return`'
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
				description: 'Masque l’icône avant le `VTextField`.'
			},
			{
				name: 'no-icon',
				type: 'boolean',
				default: false,
				description: 'Masque l’icône avant et après le `VTextField`.'
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
				name: 'show-weekends',
				type: 'boolean',
				default: false,
				description: 'Affiche les weekends dans le calendrier.'
			},
			{
				name: 'warning-rules',
				type: 'ValidationRule[]',
				default: '[]',
				description: 'Les règles d’alertes, qui ne bloquent pas la validation.'
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
				description: 'Le format de la date utilisée avec le `v-model`.'
			},
			{
				name: 'birthdate',
				type: 'boolean',
				default: false,
				description: 'Simplifie la sélection d’une date de naissance en choisissant l’année, le mois puis le jour.'
			},
			{
				name: 'error',
				type: 'boolean',
				default: false,
				description: 'Mets le `VTextField` en erreur manuellement, à utiliser avec le modificateur `.sync`.'
			},
			{
				name: 'range',
				type: 'boolean',
				default: false,
				description: 'Permet de sélectionner une période de dates.'
			},
			{
				name: 'label',
				type: 'string',
				description: 'Libellé du champ.',
				default: `''`
			},
			{
				name: 'hint',
				type: 'string',
				description: 'Texte d’aide affiché sous le champ.',
				default: `'DD/MM/YYYY'`
			},
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
				name: 'update:model-value',
				description: 'Évènement émis lorsque la valeur est mise à jour.',
				value: 'string'
			}
		]
	}
};
