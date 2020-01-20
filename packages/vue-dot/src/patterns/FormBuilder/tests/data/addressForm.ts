import { Form } from '../../types';

export default {
	streetNumber: {
		type: 'number',
		value: null,
		mask: '#####',
		metadata: {
			type: 'string',
			label: 'Numéro de voie'
		}
	},
	streetNumberComplement: {
		type: 'select',
		value: null,
		items: [
			{
				text: 'bis',
				value: 'valueBis'
			},
			{
				text: 'ter',
				value: 'valueTer'
			},
			{
				text: 'quater',
				value: 'valueQuater'
			}
		],
		metadata: {
			label: 'Complément de voie'
		}
	},
	streetType: {
		type: 'autocomplete',
		value: null,
		items: [
			{
				text: 'Allée',
				value: 'valueAllée'
			},
			{
				text: 'Avenue',
				value: 'valueAvenue'
			},
			{
				text: 'Boulevard',
				value: 'valueBoulevard'
			},
			{
				text: 'Aucun',
				value: null
			}
		],
		metadata: {
			label: 'Type de voie'
		}
	},
	streetLabel: {
		type: 'string',
		value: null,
		metadata: {
			label: 'Libellé de la voie'
		}
	},
	streetComplement: {
		type: 'string',
		value: null,
		metadata: {
			label: 'Complément d\'adresse'
		}
	},
	postalCode: {
		type: 'number',
		value: null,
		metadata: {
			mask: '#####',
			label: 'Code postal'
		}
	},
	city: {
		type: 'string',
		value: null,
		metadata: {
			label: 'Ville'
		}
	}
} as Form;
