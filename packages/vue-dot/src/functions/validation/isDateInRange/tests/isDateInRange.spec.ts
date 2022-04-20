import { isDateInRange } from '../';

const start = '2019-10-21';
const end = '2019-10-27';

const date = '2019-10-23';

describe('isDateInRange', () => {
	it('returns true if the date is in the range', () => {
		expect(isDateInRange(date, start, end)).toBe(true);
	});

	it('returns false if the range is negative', () => {
		// Invert start & end date to create a negative range
		expect(isDateInRange(date, end, start)).toBe(false);
	});

	it('works with a custom interval', () => {
		const start = '2019-10-21';
		const end = '2019-10-27';

		const date = '2019-10-27';

		// We change the interval to allow the last day in the range
		expect(isDateInRange(date, start, end, '[]')).toBe(true);
	});
});
