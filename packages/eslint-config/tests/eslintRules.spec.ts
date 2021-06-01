import { ESLint } from 'eslint';

import { code } from './code';

// Create an instance of eslint
const eslint = new ESLint({});

describe('index.js', () => {
	it('Check total count of error from: code ', async() => {
		const results = await eslint.lintText(code);

		expect(results[0].errorCount).toEqual(7);
	});

	it('Check type of rule from: code', async() => {
		const results = await eslint.lintText(code);

		expect(results[0].messages[0].ruleId).toEqual('no-var');

		expect(results[0].messages[1].ruleId).toEqual('@typescript-eslint/semi');

		expect(results[0].messages[2].ruleId).toEqual('no-var');

		expect(results[0].messages[3].ruleId).toEqual('@typescript-eslint/explicit-function-return-type');

		expect(results[0].messages[4].ruleId).toEqual('space-before-function-paren');

		expect(results[0].messages[5].ruleId).toEqual('@typescript-eslint/no-empty-function');
	});

	it('Verify error message if correct ', async() => {
		const results = await eslint.lintText(code);

		expect(results[0].messages[0].message).toEqual('Unexpected var, use let or const instead.');

		expect(results[0].messages[1].message).toEqual('Missing semicolon.');

		expect(results[0].messages[2].message).toEqual('Unexpected var, use let or const instead.');

		expect(results[0].messages[3].message).toEqual('Missing return type on function.');

		expect(results[0].messages[4].message).toEqual('Unexpected space before function parentheses.');

		expect(results[0].messages[5].message).toEqual('Unexpected empty function.');
	});
});
