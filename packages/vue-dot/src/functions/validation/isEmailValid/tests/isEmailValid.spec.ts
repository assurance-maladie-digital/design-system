import { isEmailValid } from '../';

// Tests
describe('isEmailValid', () => {
	it('returns true if the email is valid', () => {
		const email = 'test@example.com';

		expect(isEmailValid(email)).toBe(true);
	});

	it('returns false if the email is not valid', () => {
		const email = 'not-valid@.fr';

		expect(isEmailValid(email)).toBe(false);
	});
});
