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
	section1: {
		questions: {
			streetNumber: {
				type: 'number',
				value: null,
				metadata: {
					label: 'Numéro de voie',
					mask: '#####',
					outlined: true
				}
			},
			streetNumberComplement: {
				type: 'select',
				value: null,
				items: defaultItem,
				metadata: {
					label: 'Complément de voie',
					outlined: true
				}
			},
			streetType: {
				type: 'autocomplete',
				value: null,
				items: defaultItem,
				metadata: {
					label: 'Type de voie',
					outlined: true
				}
			},
			streetLabel: {
				type: 'text',
				value: null,
				metadata: {
					label: 'Libellé de la voie',
					outlined: true
				}
			},
			streetComplement: {
				type: 'text',
				value: null,
				metadata: {
					label: 'Complément d\'adresse',
					outlined: true
				}
			},
			postalCode: {
				type: 'number',
				value: null,
				metadata: {
					mask: '#####',
					label: 'Code postal',
					outlined: true
				}
			},
			city: {
				type: 'text',
				value: null,
				metadata: {
					label: 'Ville',
					outlined: true
				}
			}
		}
	}
};
