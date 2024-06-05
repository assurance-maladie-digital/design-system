import fs from 'fs-extra';
import consola from 'consola';

import { toKebabCase } from './utils';

import { Tokens, TokensBootstrap } from '../../src/types';

const TAB_CHARACTER = '	';

export function generateJsonFile(tokens: Tokens, distPath: string): void {
	consola.info('Generating JSON file');

	const tokensString = JSON.stringify(tokens, null, TAB_CHARACTER);
	const jsonFile = toKebabCase(tokensString) + '\n';

	fs.writeFileSync(`${distPath}/tokens.json`, jsonFile);
}

export function generateBootstrapJsonFile(tokens: TokensBootstrap, distPath: string): void {
	consola.info('Generating Bootstrap JSON file');

	const tokensString = JSON.stringify(tokens, null, TAB_CHARACTER);
	const jsonFile = toKebabCase(tokensString) + '\n';

	fs.writeFileSync(`${distPath}/bootstrap-tokens.json`, jsonFile);
}
