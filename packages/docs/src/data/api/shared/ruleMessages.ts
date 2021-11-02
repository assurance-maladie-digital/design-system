import { Props } from '~/types';

export function ruleMessages(example?: string): Props {
	return [
		{
			name: 'errorMessages',
			type: 'ErrorMessages',
			description: 'Les messages affichés lorsque la règle n’est pas valide.',
			default: 'defaultErrorMessages',
			example
		}
	];
}
