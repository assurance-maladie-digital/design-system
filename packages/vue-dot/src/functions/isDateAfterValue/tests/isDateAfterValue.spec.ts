import { isDateAfterValue } from '../';

import dayjs from 'dayjs';
import { formatDate } from '../../formatDate';

describe('isDateAfterValue', () => {
	const today = formatDate(dayjs());
	const pasteDate = formatDate(dayjs().subtract(1, 'year'));
	const futureDate = formatDate(dayjs().add(1, 'year'));

	it('returns true with a future date', () => {
		expect(isDateAfterValue(today, futureDate)).toBeTruthy();
	});

	it('returns false with a past date', () => {
		expect(isDateAfterValue(today, pasteDate)).toBeFalsy();
	});
});
