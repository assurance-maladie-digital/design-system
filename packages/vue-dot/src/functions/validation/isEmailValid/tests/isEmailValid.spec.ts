import { isEmailValid } from '../';

// Tests
describe('isEmailValid', () => {
	it('returns true if the email is valid', () => {
		const email = 'me@deraw.dev';

		expect(isEmailValid(email)).toBe(true);
	});

	it('returns false if the email isn\'t valid', () => {
		const email = 'not-valid@.fr';

		expect(isEmailValid(email)).toBe(false);
	});
});
