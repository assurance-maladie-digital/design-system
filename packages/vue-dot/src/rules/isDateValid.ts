import dayjs from 'dayjs';

import isLeapYear from 'dayjs/plugin/isLeapYear';

// Extend dayjs
dayjs.extend(isLeapYear);

import parseDate from '../helpers/parseDate';
import { ErrorMessages } from './types';

const defaultErrorMessages: ErrorMessages = {
	default: 'La date saisie n\'est pas valide.',
	wrongFormat: 'Le format de la date n\'est pas valide.',
	monthNotMatch: 'Le jour saisi dépasse le nombre de jours dans le mois.',
	notALeapYear: 'Le jour saisi est invalide car ce n\'est pas une annéee bissextile.'
};

/** Check if the date is valid (exists in the calendar and has the right format) */
function checkIfDateValid(value: string, errorMessages: ErrorMessages) {
	const dateFormatRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

	// If value doesn't match regex, date format isn't valid
	if (!value.match(dateFormatRegex)) {
		return errorMessages.wrongFormat;
	}

	/**
	 * List of days in months
	 * Assume there is no leap year by default
	 */
	const DAYS_IN_MONTH = [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	];

	// Split the date
	const date = value.split('/');

	const day = parseInt(date[0], 10);
	const month = parseInt(date[1], 10);

	// For every month except february
	if (month === 1 || month > 2) {
		// If the day is superior to the day in month,
		// the date is invalid
		if (day > DAYS_IN_MONTH[month - 1]) {
			return errorMessages.monthNotMatch;
		} else {
			// Else, the date is valid
			return true;
		}
	}

	// It's february, we should handle leap years
	if (month === 2) {
		const parsed = parseDate(value);
		const isLeap = parsed.isLeapYear();

		// If it's a leap year
		// and the day is superior to 29 (1-29 range)
		// the date is invalid
		if (isLeap && day > 29) {
			return errorMessages.monthNotMatch;
		}

		// Else, if it's not a leap year
		// and the day is superior or equals to 29 (1-28 range)
		// the date is invalid
		if (!isLeap && day >= 29) {
			return errorMessages.notALeapYear;
		}

		// Else, the date is valid
		return true;
	}
}

/** Check that the date is valid (expects ##/##/#### format) */
export function isDateValid(errorMessages = defaultErrorMessages) {
	return function(value: string) {
		return checkIfDateValid(value, errorMessages) || errorMessages.default;
	};
}

export default isDateValid();
