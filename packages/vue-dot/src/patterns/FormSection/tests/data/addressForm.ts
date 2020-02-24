import { FieldGroup } from '../../types';

const defaultItem = [
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
];

export const addressForm: FieldGroup = {
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
		items: defaultItem,
		metadata: {
			label: 'Complément de voie'
		}
	},
	streetType: {
		type: 'autocomplete',
		value: null,
		items: defaultItem,
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
};
