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
			expect(results[0].errorCount).toEqual(10);
		});

		it('Check rules', async() => {
			const results = await eslint.lintText(codeFn);

			expect(results[0].messages[1].ruleId).toEqual('no-var');
			expect(results[0].messages[1].message).toEqual('Unexpected var, use let or const instead.');

			expect(results[0].messages[4].ruleId).toEqual('no-var');
			expect(results[0].messages[4].message).toEqual('Unexpected var, use let or const instead.');
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
			expect(results[0].errorCount).toEqual(1);
		});

		it('Check rules ', async() => {
			const results = await eslint.lintText(HtmlCodeTemplate);

			expect(results[0].messages[0].ruleId).toBeNull();
			expect(results[0].messages[0].message).toEqual('Parsing error: \'>\' expected.'); 
			
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
			expect(results[0].errorCount).toEqual(1);

		});

		it('Check rules', async() => {
			const results = await eslint.lintText(tsCodeTemplate);

			expect(results[0].messages[0].ruleId).toBeNull();
			expect(results[0].messages[0].message).toEqual('Parsing error: \'}\' expected.');

		});
	});
});
