import fs from 'fs-extra';
import consola from 'consola';

import { toKebabCase } from './utils';

import { Tokens } from '../../src/types';

/** @see https://github.com/rlapoele/json-to-scss/blob/master/lib/jsValueToSassString.js */
import jsValueToSassString from 'json-to-scss/lib/jsValueToSassString';

const TAB_CHARACTER = '	';

export function generateScssFile(tokens: Tokens, distPath: string): void {
	consola.info('Generating SCSS file');

	// Generate default SCSS exports from tokens to avoid using deep-get
	const tokenArray = Object.keys(tokens);

	const linesToAppend: string[] = [];

	tokenArray.forEach((tokenName) => {
		// eg. $vd-colors: map-get($vd-tokens, colors);
		const line = `\n$vd-${tokenName}: map-get($vd-tokens, ${tokenName});\n`;

		linesToAppend.push(line);

		// Generate var for each value
		const tokenContent = (tokens as Tokens)[tokenName];

		if (typeof tokenContent !== 'object') {
			return;
		}

		linesToAppend.push('\n');

		const tokenContentArray = Object.keys(tokenContent);

		tokenContentArray.forEach((key) => {
			// eg. $vd-accent: map-get($vd-colors, accent);
			const line = `$vd-${key}: map-get($vd-${tokenName}, ${key});\n`;

			linesToAppend.push(line);
		});
	});

	// Generate sass string using json-to-scss
	const sassString = jsValueToSassString(tokens, TAB_CHARACTER, 1);

	const scssFile = toKebabCase(`$vd-tokens: ${sassString};\n${linesToAppend.join('')}`);

	fs.writeFileSync(`${distPath}/tokens.scss`, scssFile);
}
