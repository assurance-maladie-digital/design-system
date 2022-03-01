import { parseDate } from '../../helpers/parseDate';

/** Check that the date is after a value (date with DD/MM/YYYY format) */
export function isDateAfterValue(maxDate: string, value: string): boolean {
	const parsedValue = parseDate(value);
	const parsedMaxDate = parseDate(maxDate);

	return parsedValue.isAfter(parsedMaxDate);
}
