import { ESLint } from 'eslint';

import { typescript } from './fixtures/code';

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const baseConfig = require('../typescript.js');

describe('TypeScript configuration', () => {
	const eslint = new ESLint({
		useEslintrc: false,
		baseConfig
	});

	it('lints the code correctly', async() => {
		const results = await eslint.lintText(typescript);

		expect(results[0].errorCount).toEqual(8);
	});

	it('applies the correct rules', async() => {
		const results = await eslint.lintText(typescript);

		expect(results[0].messages).toMatchSnapshot();
	});
});
