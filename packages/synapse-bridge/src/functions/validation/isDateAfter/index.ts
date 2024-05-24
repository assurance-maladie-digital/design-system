import { parseDate } from '../../../helpers/parseDate';

/** Check if a date is after another date (DD/MM/YYYY format) */
export function isDateAfter(maxDate: string, value: string): boolean {
	const parsedValue = parseDate(value);
	const parsedMaxDate = parseDate(maxDate);

	return parsedValue.isAfter(parsedMaxDate);
}
