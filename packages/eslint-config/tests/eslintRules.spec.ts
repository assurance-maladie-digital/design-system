
import { ESLint } from 'eslint';

import { code } from './codes';

// Create instance of eslint
const eslint = new ESLint({});


describe('Validate shareable config eslint of: index.js', () => {


	it(`Check total count of error from: code `, async () => {

		const results = await eslint.lintText(code)

		expect(results[0].errorCount).toEqual(6);
	});


	it(`Check type of rule from: code`, async () => {

		const results = await eslint.lintText(code)

		expect(results[0].messages[0].ruleId).toEqual('no-var');

		expect(results[0].messages[1].ruleId).toEqual('semi');

		expect(results[0].messages[2].ruleId).toEqual('no-var');

		expect(results[0].messages[3].ruleId).toEqual('space-before-function-paren');

		expect(results[0].messages[4].ruleId).toEqual('semi');

		expect(results[0].messages[5].ruleId).toEqual('semi');

	});

	it(`Verify error message if correct `, async () => {

		const results = await eslint.lintText(code);

		expect(results[0].messages[0].message).toEqual('Unexpected var, use let or const instead.');

		expect(results[0].messages[1].message).toEqual('Missing semicolon.');

		expect(results[0].messages[2].message).toEqual('Unexpected var, use let or const instead.');

		expect(results[0].messages[3].message).toEqual('Unexpected space before function parentheses.');

		expect(results[0].messages[4].message).toEqual('Missing semicolon.');

		expect(results[0].messages[5].message).toEqual('Missing semicolon.');

	});
});
