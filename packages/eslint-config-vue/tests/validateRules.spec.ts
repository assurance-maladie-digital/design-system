import { ESLint } from 'eslint';

import { code } from './fixtures/code';

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const baseConfig = require('../');

describe('Vue.js configuration', () => {
	const eslint = new ESLint({
		useEslintrc: false,
		baseConfig
	});

	it('lints the code correctly', async() => {
		const results = await eslint.lintText(code);

		expect(results[0].errorCount).toEqual(23);
	});

	it('applies the correct rules', async() => {
		const results = await eslint.lintText(code);

		expect(results[0].messages).toMatchSnapshot();
	});
});
