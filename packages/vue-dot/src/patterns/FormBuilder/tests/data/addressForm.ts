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
			'bis',
			'ter',
			'quater'
		],
		metadata: {
			label: 'Complément de voie'
		}
	},
	streetType: {
		type: 'autocomplete',
		value: null,
		items: [
			'Allée',
			'Avenue',
			'Boulevard',
			'Aucun'
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
		mask: '#####',
		metadata: {
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
