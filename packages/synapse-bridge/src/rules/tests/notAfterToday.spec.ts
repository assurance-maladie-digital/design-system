import dayjs from 'dayjs';

import { notAfterToday, notAfterTodayFn } from '../notAfterToday';
import { describe, it, expect } from 'vitest'

const DATE_FORMAT = 'DD/MM/YYYY';

const futureDate = dayjs().add(1, 'year').format(DATE_FORMAT);
const pastDate = dayjs().subtract(1, 'year').format(DATE_FORMAT);

describe('notAfterToday', () => {
	it('returns an error when the date is future', () => {
		expect(typeof notAfterToday(futureDate)).toBe('string');
	});

	it('returns true when the date is past', () => {
		expect(notAfterToday(pastDate)).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		expect(notAfterToday('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = notAfterTodayFn({
			default: 'test'
		});

		expect(rule(futureDate)).toBe('test');
	});
});
