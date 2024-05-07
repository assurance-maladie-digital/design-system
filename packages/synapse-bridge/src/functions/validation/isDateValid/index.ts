import dayjs from 'dayjs';

import { parseDate } from '../../../helpers/parseDate';

import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(isLeapYear);

const DATE_SEPARATORS = /[- /.]/;
/** Matches DD/MM/YYYY with one of the DATE_SEPARATORS */
export const DATE_FORMAT_REGEX = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]\d{4}/;

export enum DateErrorCodes {
	WRONG_FORMAT = 'wrongFormat',
	MONTH_NOT_MATCH = 'monthNotMatch',
	NOT_LEAP_YEAR = 'notALeapYear'
}

/** Check if a date is valid */
export function isDateValid(date: string): string | true {
	if (!date.match(DATE_FORMAT_REGEX)) {
		return DateErrorCodes.WRONG_FORMAT;
	}

	const DAYS_IN_MONTH = [
		31,
		28, // Check leap year later
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

	const parsedDate = date.split(DATE_SEPARATORS);

	const day = parseInt(parsedDate[0], 10);
	const month = parseInt(parsedDate[1], 10);

	if (month !== 2) {
		if (day > DAYS_IN_MONTH[month - 1]) {
			return DateErrorCodes.MONTH_NOT_MATCH;
		} else {
			return true;
		}
	} else {
		const parsed = parseDate(date);
		const isLeap = parsed.isLeapYear();

		if (isLeap && day > 29) {
			return DateErrorCodes.MONTH_NOT_MATCH;
		}

		if (!isLeap && day >= 29) {
			return DateErrorCodes.NOT_LEAP_YEAR;
		}

		return true;
	}
}
