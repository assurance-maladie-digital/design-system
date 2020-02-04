import { isWeekEnd } from '../';

// Tests
describe('isWeekEnd', () => {
	it('returns true if the day is in a weekend', () => {
		const date = '2019-10-26'; // Saturday

		expect(isWeekEnd(date)).toBe(true);
	});

	it('returns false if the day isn\'t in a weekend', () => {
		const date = '2019-10-21'; // Monday

		expect(isWeekEnd(date)).toBe(false);
	});
});
