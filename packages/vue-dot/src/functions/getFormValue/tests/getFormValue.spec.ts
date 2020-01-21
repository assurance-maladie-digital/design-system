import { Form } from './../../../patterns/FormBuilder/types';
import getFormValue from '../';

const formNull = {
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

const formNotNull = {
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
	streetType: {
		type: 'autocomplete',
		value: 'Allée',
		items: [
			'Allée',
			'Avenue',
			'Boulevard',
			'Aucun'
		]
	},
	streetLabel: {
		type: 'string',
		value: 'streetLabel'
	},
	streetComplement: {
		type: 'string',
		value: 'streetComplement'
	},
	postalCode: {
		type: 'number',
		value: 75020
	},
	city: {
		type: 'string',
		value: 'city'
	}
} as Form;

// Tests
describe('getFormValue', () => {
	it('returns correctly all null', () => {
		expect(getFormValue(formNull)).toEqual({});
	});

	it('returns correctly all not null', () => {
		expect(getFormValue(formNotNull)).toEqual({
			city: 'city',
			postalCode: 75020,
			streetComplement: 'streetComplement',
			streetLabel: 'streetLabel',
			streetNumber: 1,
			streetNumberComplement: 'bis',
			streetType: 'Allée'
		});
	});
});
