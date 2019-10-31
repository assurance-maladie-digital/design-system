import { ErrorMessages } from '../types';

export const defaultErrorMessages: ErrorMessages = {
	default: 'La date saisie n\'est pas valide',
	wrongFormat: 'Le format de la date n\'est pas valide',
	monthNotMatch: 'Le jour saisi dépasse le nombre de jours dans le mois',
	notALeapYear: 'Le jour saisi est invalide car ce n\'est pas une année bissextile'
};
