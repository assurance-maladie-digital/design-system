import { Fields } from '../../types';

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

export const addressFields: Fields = {
	streetNumber: {
		type: 'number',
		value: null,
		fieldOptions: {
			label: 'Numéro de voie',
			mask: '#####',
			outlined: true
		}
	},
	streetNumberComplement: {
		type: 'select',
		value: null,
		items: defaultItem,
		fieldOptions: {
			label: 'Complément de voie',
			outlined: true
		}
	},
	streetType: {
		type: 'select',
		value: null,
		items: defaultItem,
		fieldOptions: {
			type: 'choiceAutocomplete',
			label: 'Type de voie',
			outlined: true
		}
	},
	streetLabel: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Libellé de la voie',
			outlined: true
		}
	},
	streetComplement: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Complément d’adresse',
			outlined: true
		}
	},
	postalCode: {
		type: 'number',
		value: null,
		fieldOptions: {
			mask: '#####',
			label: 'Code postal',
			outlined: true
		}
	},
	city: {
		type: 'text',
		value: null,
		fieldOptions: {
			label: 'Ville',
			outlined: true
		}
	}
};
