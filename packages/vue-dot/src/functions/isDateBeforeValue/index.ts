import { parseDate } from '@cnamts/vue-dot/src/helpers/parseDate';

/** Check that the date is before a value (date with DD/MM/YYYY format) */
export function isDateBeforeValue(minDate: string, value: string): boolean {
	const parsedValue = parseDate(value);
	const parsedMinDate = parseDate(minDate);

	return parsedValue.isBefore(parsedMinDate);
}
