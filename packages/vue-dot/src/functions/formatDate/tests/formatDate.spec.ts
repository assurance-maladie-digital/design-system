import dayjs from 'dayjs';
import { formatDate } from '../';

describe('formatDate', () => {
	it('formats a valid date', () => {
		const date = dayjs('2022-01-01');

		expect(formatDate(date)).toEqual('01/01/2022');
	});

	it('does not format an invalid date', () => {
		const date = dayjs(null);

		expect(formatDate(date)).toEqual('Invalid Date');
	});
});
