import dayjs from 'dayjs';

import { notBeforeToday, notBeforeTodayFn } from '../';
import { describe, it, expect} from 'vitest'

const DATE_FORMAT = 'DD/MM/YYYY';

const pastDate = dayjs().subtract(1, 'year').format(DATE_FORMAT);
const futureDate = dayjs().add(1, 'year').format(DATE_FORMAT);
const today = dayjs().format(DATE_FORMAT);

describe('notBeforeToday', () => {
	it('returns an error when the date is past', () => {
		expect(typeof notBeforeToday(pastDate)).toBe('string');
	});

	it('returns true when the date is future', () => {
		expect(notBeforeToday(futureDate)).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		expect(notBeforeToday('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = notBeforeTodayFn({
			default: 'test'
		});

		expect(rule(pastDate)).toBe('test');
	});

	it('returns true when value is today', () => {
		expect(notBeforeToday(today)).toBe(true);
	});
});
