import { ruleMessage } from '../../helpers/ruleMessage';

import { defaultErrorMessages } from './locales';

import { isDateBeforeNow } from './isDateBeforeNow';

/** Check that the date is not after today (expects ##/##/#### format) */
export function notAfterTodayFn(errorMessages = defaultErrorMessages) {
	return (value: string) => {
		// If the value is empty, return true (valid)
		if (!value) {
			return true;
		}

		// If the date is before now, it's a past date, it's valid,
		// else, the date is after today, it's invalid
		return isDateBeforeNow(value) || ruleMessage(errorMessages, 'default');
	};
}

export const notAfterToday = notAfterTodayFn();
