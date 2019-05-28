import dayjs from 'dayjs';
import parseDate from '../helpers/parseDate';

const defaultErrorMessages = {
	default: 'La date doit être antérieure à aujourd\'hui.'
};

function isDateBeforeNow(value: string) {
	// Date is DD/MM/YYYY format
	const date = parseDate(value);
	const now = dayjs();

	// Is the date before now?
	const result = dayjs(date).isBefore(now);

	return result;
}

/** Check that the date is not after today */
export function notAfterToday(errorMessages = defaultErrorMessages) {
	return function(value: string) {
		// If the date is before now, it's a past date, it's valid,
		// else, the date is after today, it's invalid
		return isDateBeforeNow(value) || errorMessages.default;
	};
}

export default notAfterToday();
