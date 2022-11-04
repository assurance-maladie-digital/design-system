import { ESLint } from 'eslint';

import { javascript } from './fixtures/code';

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const baseConfig = require('../javascript');

describe('JavaScript configuration', () => {
	const eslint = new ESLint({
		useEslintrc: false,
		baseConfig
	});

	it('lints the code correctly', async() => {
		const results = await eslint.lintText(javascript);

		expect(results[0].errorCount).toEqual(6);
	});

	it('applies the correct rules', async() => {
		const results = await eslint.lintText(javascript);

		expect(results[0].messages).toMatchSnapshot();
	});
});
