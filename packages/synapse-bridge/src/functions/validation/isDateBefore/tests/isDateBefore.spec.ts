import { isDateBefore } from '../';

import dayjs from 'dayjs';
import { formatDate } from '../../../formatDate';

describe('isDateBefore', () => {
	const today = formatDate(dayjs());
	const pasteDate = formatDate(dayjs().subtract(1, 'year'));
	const futureDate = formatDate(dayjs().add(1, 'year'));

	it('returns true with a past date', () => {
		expect(isDateBefore(today, pasteDate)).toBeTruthy();
	});

	it('returns false with a future date', () => {
		expect(isDateBefore(today, futureDate)).toBeFalsy();
	});

	it('returns false with the current date', () => {
		expect(isDateBefore(today, today)).toBeFalsy();
	});
});
