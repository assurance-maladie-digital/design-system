import { ESLint } from 'eslint';

import { code } from './codes';

const eslint = new ESLint({});

describe('Validate shareable config eslint-vue of: index.js', () => {


	it(`Check total count of error from: code `, async () => {

		const results = await eslint.lintText(code);

		expect(results[0].errorCount).toEqual(9);

	});

});
