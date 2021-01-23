import { ESLint } from 'eslint';

describe('ESLint version', () => {
	it('checks that eslint version is >= 7', () => {
		const version = ESLint.version.charAt(0);

		expect(parseInt(version)).toBeGreaterThanOrEqual(7);
	});
});
