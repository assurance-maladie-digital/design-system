import { ESLint } from 'eslint';

describe('Verify versioning of eslint', () => {

	it(`Check Eslint version >= 7 `, () => {

		const version = ESLint.version.charAt(0)

		expect(parseInt(version)).toBeGreaterThanOrEqual(7)
	});

});
