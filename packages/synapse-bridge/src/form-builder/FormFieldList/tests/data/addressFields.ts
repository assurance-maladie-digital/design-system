import { Fields } from '../../types'

const defaultItem = [
	{
		text: 'bis',
		value: 'valueBis',
	},
	{
		text: 'ter',
		value: 'valueTer',
	},
	{
		text: 'quater',
		value: 'valueQuater',
	},
]

export const addressFields: Fields = {
	streetNumber: {
		type: 'number',
		value: null,
		fieldOptions: {
			label: 'Numéro de voie',
			mask: '#####',
			variant: 'outlined',
		},
	},
	streetNumberComplement: {
		type: 'select',
		value: null,
		items: defaultItem,
		fieldOptions: {
			label: 'Complément de voie',
			variant: 'outlined',
		},
	},
	streetType: {
		type: 'select',
		value: null,
		items: defaultItem,
		fieldOptions: {
			type: 'choiceAutocomplete',
			label: 'Type de voie',
			variant: 'outlined',
		},
	},
	streetLabel: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Libellé de la voie',
			variant: 'outlined',
		},
	},
	streetComplement: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Complément d’adresse',
			variant: 'outlined',
		},
	},
	postalCode: {
		type: 'number',
		value: null,
		fieldOptions: {
			mask: '#####',
			label: 'Code postal',
			variant: 'outlined',
		},
	},
	city: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Ville',
			variant: 'outlined',
		},
	},
}
