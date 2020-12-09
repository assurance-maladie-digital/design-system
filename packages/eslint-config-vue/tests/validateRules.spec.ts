
import { code } from './codes';

const { ESLint } = require('eslint');

const eslint = new ESLint();


describe('Validate shareable config eslint-vue of: index.js', () => {


	it(`Check total count of error from: code `, async () => {

		const results = await eslint.lintText(code);

		console.log(results[0]);

		expect(results[0].errorCount).toEqual(9);

	});

});
