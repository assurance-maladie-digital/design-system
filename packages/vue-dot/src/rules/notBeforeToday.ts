import dayjs from 'dayjs';
import parseDate from '../helpers/parseDate';

const defaultErrorMessages = {
	default: 'La date ne doit pas être antérieure à aujourd\'hui.'
};

function isDateAfterNow(value: string) {
	// Date is DD/MM/YYYY format
	const date = parseDate(value);
	const now = dayjs();

	// Is the date after now?
	const result = dayjs(date).isAfter(now);

	return result;
}

/** Check that the date is not before today (expects ##/##/#### format) */
export function notBeforeToday(errorMessages = defaultErrorMessages) {
	return function(value: string) {
		// If the date is after now, it's a future date, it's valid,
		// else, the date is before today, it's invalid
		return isDateAfterNow(value) || errorMessages.default;
	};
}

export default notBeforeToday();
