import { Form } from '../../../../patterns/FormBuilder/types';

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
		items: [
			'bis',
			'ter',
			'quater'
		],
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
} as Form;

export const formNotNull = {
	streetNumber: {
		type: 'number',
		value: 1,
		mask: '#####'
	},
	streetNumberComplement: {
		type: 'select',
		value: 'bis',
		items: [
			'bis',
			'ter',
			'quater'
		]
	},
	streetLabel: {
		type: 'text',
		value: 'streetLabel'
	}
} as Form;
