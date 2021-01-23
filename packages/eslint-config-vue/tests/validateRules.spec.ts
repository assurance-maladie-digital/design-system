import { ESLint } from 'eslint';

import { codeFn, HtmlCodeTemplate, tsCodeTemplate } from './code';

// Create an instance of eslint
let eslint = new ESLint({});

describe('Validate shareable config eslint-vue of: index.js', () => {
	describe('Check config @cnamts/eslint-config/typescript', () => {
		beforeEach(() => {
			eslint = new ESLint({
				baseConfig: {
					extends: '@cnamts/eslint-config/typescript'
				}
			});
		});

		it('Check total count of error', async() => {
			const results = await eslint.lintText(codeFn);

			// Count results of errors lint
			expect(results[0].errorCount).toEqual(16);
		});

		it('Check rules', async() => {
			const results = await eslint.lintText(codeFn);

			expect(results[0].messages[1].ruleId).toEqual('@typescript-eslint/indent');
			expect(results[0].messages[1].message).toEqual('Expected indentation of 0 tabs but found 3 spaces.');

			expect(results[0].messages[4].ruleId).toEqual('@typescript-eslint/semi');
			expect(results[0].messages[4].message).toEqual('Missing semicolon.');
		});
	});

	describe('Check config : plugin:vue/recommended', () => {
		beforeEach(() => {
			eslint = new ESLint({
				baseConfig: {
					extends: 'plugin:vue/recommended'
				}
			});
		});

		it('Check total count of error', async() => {
			const results = await eslint.lintText(HtmlCodeTemplate);

			// Count results of errors lint
			expect(results[0].errorCount).toEqual(2);
		});

		it('Check rules ', async() => {
			const results = await eslint.lintText(HtmlCodeTemplate);

			expect(results[0].messages[0].ruleId).toEqual('vue/html-closing-bracket-spacing');
			expect(results[0].messages[0].message).toEqual('Expected a space before \'/>\', but not found.');

			expect(results[0].messages[1].ruleId).toEqual('vue/comment-directive');
			expect(results[0].messages[1].message).toEqual('clear');

			expect(results[0].messages[2].ruleId).toEqual('vue/comment-directive');
			expect(results[0].messages[2].message).toEqual('clear');
		});
	});

	describe('Check config : @vue/typescript/recommended', () => {
		beforeEach(() => {
			eslint = new ESLint({
				baseConfig: {
					extends: '@vue/typescript/recommended'
				}
			});
		});

		it('Check total count of error', async() => {
			const results = await eslint.lintText(tsCodeTemplate);

			// Count results of errors lint
			expect(results[0].errorCount).toEqual(20);

		});

		it('Check rules', async() => {
			const results = await eslint.lintText(tsCodeTemplate);

			expect(results[0].messages[0].ruleId).toEqual('quotes');
			expect(results[0].messages[0].message).toEqual('Strings must use singlequote.');

			expect(results[0].messages[5].ruleId).toEqual('comma-dangle');
			expect(results[0].messages[5].message).toEqual('Unexpected trailing comma.');

			expect(results[0].messages[9].ruleId).toEqual('@typescript-eslint/explicit-module-boundary-types');
			expect(results[0].messages[9].message).toEqual('Missing return type on function.');

			expect(results[0].messages[10].ruleId).toEqual('@typescript-eslint/no-empty-function');
			expect(results[0].messages[10].message).toEqual('Unexpected empty method \'mounted\'.');

			expect(results[0].messages[11].ruleId).toEqual('space-before-blocks');
			expect(results[0].messages[11].message).toEqual('Missing space before opening brace.');
		});
	});
});
