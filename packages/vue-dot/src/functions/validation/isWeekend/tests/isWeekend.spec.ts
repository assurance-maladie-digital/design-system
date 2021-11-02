import { isWeekend } from '../';

// Tests
describe('isWeekend', () => {
	it('returns true if the day is in a weekend', () => {
		const date = '2019-10-26'; // Saturday

		expect(isWeekend(date)).toBe(true);
	});

	it('returns false if the day is not in a weekend', () => {
		const date = '2019-10-21'; // Monday

		expect(isWeekend(date)).toBe(false);
	});
});
