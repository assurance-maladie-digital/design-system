import { Form } from '../../types';

export default {
	streetNumber: {
		type: 'number',
		value: null,
		mask: '#####',
		metadata: {
			type: 'text',
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
		type: 'text',
		value: null,
		metadata: {
			label: 'Libellé de la voie'
		}
	},
	streetComplement: {
		type: 'text',
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
		type: 'text',
		value: null,
		metadata: {
			label: 'Ville'
		}
	}
} as Form;
