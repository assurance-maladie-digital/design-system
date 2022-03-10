import { isDateBeforeValue } from '../';

import dayjs from 'dayjs';
import { formatDate } from '../../formatDate';

describe('isDateBeforeValue', () => {
	const today = formatDate(dayjs());
	const pasteDate = formatDate(dayjs().subtract(1, 'year'));
	const futureDate = formatDate(dayjs().add(1, 'year'));

	it('returns true with a past date', () => {
		expect(isDateBeforeValue(today, pasteDate)).toBeTruthy();
	});

	it('returns false with a future date', () => {
		expect(isDateBeforeValue(today, futureDate)).toBeFalsy();
	});

	it('returns false with the current date', () => {
		expect(isDateBeforeValue(today, today)).toBeFalsy();
	});
});
