import { notBeforeDate } from '../';

import dayjs from 'dayjs';
import { formatDate } from '../../../functions/formatDate';

describe('notBeforeDate', () => {
	const currentDate = formatDate(dayjs());
	const pastDate = formatDate(dayjs().subtract(1, 'year'));
	const futureDate = formatDate(dayjs().add(1, 'year'));

	const rule = notBeforeDate(currentDate);

	it('returns true with a future date', () => {
		expect(rule(futureDate)).toBe(true);
	});

	it('returns an error with a past date', () => {
		expect(typeof rule(pastDate)).toBe('string');
	});

	it('returns true if the value is falsy', () => {
		expect(rule('')).toBe(true);
	});
});
