import { FieldGroup } from '../../../../patterns/FormSection/types';

const defaultItem = [
	{
		text: 'bis',
		value: 1
	},
	{
		text: 'ter',
		value: 2
	},
	{
		text: 'quarter',
		value: 3
	}
];

export const formNull = {
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
	streetLabel: {
		type: 'text',
		value: null,
		metadata: {
			label: 'Libellé de la voie'
		}
	}
} as FieldGroup;

export const formNotNull = {
	streetNumber: {
		type: 'number',
		value: 1,
		mask: '#####'
	},
	streetNumberComplement: {
		type: 'select',
		value: 'bis',
		items: defaultItem
	},
	streetLabel: {
		type: 'text',
		value: 'streetLabel'
	}
} as FieldGroup;
