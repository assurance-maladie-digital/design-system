import dayjs from 'dayjs';

import { parseDate } from '../../../helpers/parseDate';

import isLeapYear from 'dayjs/plugin/isLeapYear';

// Extend dayjs
dayjs.extend(isLeapYear);

const DATE_SEPARATORS = /[- /.]/;
/** Matches DD/MM/YYYY with one of the DATE_SEPARATORS */
export const DATE_FORMAT_REGEX = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]\d{4}/;

export enum DateErrorCodes {
	wrongFormat = 'wrongFormat',
	monthNotMatch = 'monthNotMatch',
	notALeapYear = 'notALeapYear'
}

/**
 * Check if the date is valid
 * (exists in the calendar and has DD/MM/YYYY format)
 *
 * @param {string} date The date to check
 * @returns {string|boolean} Returns true if the date is valid or an error code if it's not
 */
export function isDateValid(date: string): string | true {
	// If date doesn't match regex, date format isn't valid
	if (!date.match(DATE_FORMAT_REGEX)) {
		return DateErrorCodes.wrongFormat;
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
	const parsedDate = date.split(DATE_SEPARATORS);

	const day = parseInt(parsedDate[0], 10);
	const month = parseInt(parsedDate[1], 10);

	// For every month except february
	if (month !== 2) {
		// If the day is superior to the day in month,
		// the date is invalid
		if (day > DAYS_IN_MONTH[month - 1]) {
			return DateErrorCodes.monthNotMatch;
		} else {
			// Else, the date is valid
			return true;
		}
	} else { // It's february, we should handle leap years
		const parsed = parseDate(date);
		const isLeap = parsed.isLeapYear();

		// If it's a leap year
		// and the day is superior to 29 (1-29 range)
		// the date is invalid
		if (isLeap && day > 29) {
			return DateErrorCodes.monthNotMatch;
		}

		// Else, if it's not a leap year
		// and the day is superior or equals to 29 (1-28 range)
		// the date is invalid
		if (!isLeap && day >= 29) {
			return DateErrorCodes.notALeapYear;
		}

		// Else, the date is valid
		return true;
	}
}
