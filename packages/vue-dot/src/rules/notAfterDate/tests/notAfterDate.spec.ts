import { notAfterDate } from '../';

import dayjs from 'dayjs';
import { formatDate } from '../../../functions/formatDate';

describe('notAfterDate', () => {
	const currentDate = formatDate(dayjs());
	const pastDate = formatDate(dayjs().subtract(1, 'year'));
	const futureDate = formatDate(dayjs().add(1, 'year'));

	const rule = notAfterDate(currentDate);

	it('returns true with a future date', () => {
		expect(rule(pastDate)).toBe(true);
	});

	it('returns an error with a past date', () => {
		expect(typeof rule(futureDate)).toBe('string');
	});

	it('returns true if the value is falsy', () => {
		expect(rule('')).toBe(true);
	});
});
