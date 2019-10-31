import dayjs from 'dayjs';
import parseDate from '../../helpers/parseDate';

/** Check that the date is after now */
export default function isDateAfterNow(value: string) {
	// Date is DD/MM/YYYY format
	const date = parseDate(value);
	const now = dayjs();

	// Is the date after now?
	const result = dayjs(date).isAfter(now);

	return result;
}
