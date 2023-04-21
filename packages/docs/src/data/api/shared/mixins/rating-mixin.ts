import { Props } from '~/types';

export const ratingMixinProps: Props = [
	{
		name: 'label',
		type: 'string',
		required: true,
		description: 'Le label du champ.'
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: false,
		description: 'Passe le champ en lecture seule.'
	},
	{
		name: 'value',
		type: 'number',
		default: -1,
		description: 'La note sélectionnée par l’utilisateur.'
	}
];

export const ratingMixinEvents = [
	{
		name: 'input',
		description: 'Événement émis lorsque la valeur est mise à jour.',
		value: 'number'
	}
];
