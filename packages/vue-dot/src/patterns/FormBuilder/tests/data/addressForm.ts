import { Form } from '../../types';

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

export const addressForm: Form = {
	streetNumber: {
		type: 'number',
		value: null,
		mask: '#####',
		fieldOptions: {
			type: 'text',
			label: 'Numéro de voie'
		}
	},
	streetNumberComplement: {
		type: 'select',
		value: null,
		items: defaultItem,
		fieldOptions: {
			label: 'Complément de voie'
		}
	},
	streetType: {
		type: 'autocomplete',
		value: null,
		items: defaultItem,
		fieldOptions: {
			label: 'Type de voie'
		}
	},
	streetLabel: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Libellé de la voie'
		}
	},
	streetComplement: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Complément d\'adresse'
		}
	},
	postalCode: {
		type: 'number',
		value: null,
		fieldOptions: {
			mask: '#####',
			label: 'Code postal'
		}
	},
	city: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Ville'
		}
	}
};
