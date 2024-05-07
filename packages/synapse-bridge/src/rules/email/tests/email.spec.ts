import { email, emailFn } from '../';
import { describe, it, expect } from 'vitest';

describe('email', () => {
	it('returns an error when the email is invalid', () => {
		expect(typeof email('test')).toBe('string');
	});

	it('returns true when the email is valid', () => {
		expect(email('test@example.com')).toBe(true);
	});

	it('returns true if the value is falsy', () => {
		expect(email('')).toBe(true);
	});

	it('works with custom error messages', () => {
		const rule = emailFn({
			default: 'test'
		});

		expect(rule('test')).toBe('test');
	});
});
