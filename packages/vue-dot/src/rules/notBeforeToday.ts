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

/** Check that the date is not after now */
export function notAfterNow(errorMessages = defaultErrorMessages) {
	return function(value: string) {
		return isDateAfterNow(value) || errorMessages.default;
	};
}

export default notAfterNow();
