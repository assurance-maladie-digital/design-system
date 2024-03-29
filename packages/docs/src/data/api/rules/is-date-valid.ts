import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	isDateValid: {
		arguments: [
			...ruleMessages(`{
	default: 'La date saisie n’est pas valide.',
	wrongFormat: 'Le format de la date n’est pas valide.',
	monthNotMatch: 'Le jour saisi dépasse le nombre de jours dans le mois correspondant.',
	notALeapYear: 'Le jour saisi est invalide car l’année correspondante n’est pas une année bissextile.'
}`)
		]
	}
};
