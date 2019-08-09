import dayjs from 'dayjs';

/**
 * Checks if the date is saturday or sunday
 *
 * @param {string} date The date to check (must be a valid dayjs format)
 */
export default function isWeekEnd(date: string) {
	/* The name of the day of the week */
	const day = dayjs(date).format('dddd');

	/** List of disabled days */
	const disabledDays = ['Saturday', 'Sunday'];

	/** Disable if in array */
	return disabledDays.includes(day);
}
