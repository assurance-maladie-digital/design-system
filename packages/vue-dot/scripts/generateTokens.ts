import * as fs from 'fs-extra';
import { appendFileSync } from 'fs';

import { info, done, log } from '@cnamts/cli-helpers';
import { getPath, execOpts, writeToBeginning } from './utils';

import { execSync } from 'child_process';

const tokensFolder = getPath('src/tokens');

const tokenList = {
	js: `${tokensFolder}/index.js`,
	ts: `${tokensFolder}/index.ts`,
	scss: `${tokensFolder}/index.scss`
};

// Require is needed because we use module.exports
// tslint:disable-next-line: no-var-requires
const tokens = require(tokensFolder);
delete tokens._jsonToScss; // Remove package config

info('Generating Design Tokens');

log();
info('Transpiling TypeScript');

// Transpile tokens file to JS
// We need to do this because
// json-to-scss doesn't support TypeScript
execSync(`tsc ${tokenList.ts}`, execOpts);

info('Generating SCSS file');

// Generate SCSS file
execSync(`json-to-scss ${tokenList.js}`, execOpts);

// Add comment to first line
writeToBeginning(tokenList.scss, '// AUTO-GENERATED FILE, DO NOT EDIT\n');

const tokenArray = Object.keys(tokens);

const linesToAppend: string[] = [];

// Generate default SCSS exports to avoid using deep-get
tokenArray.forEach((tokenName) => {
	// eg. $vd-colors: map-get($vd-tokens, colors);
	const line = `\n$vd-${tokenName}: map-get($vd-tokens, ${tokenName});\n\n`;

	linesToAppend.push(line);

	// Generate var for each value
	const tokenContent = tokens[tokenName];
	const tokenContentArray = Object.keys(tokenContent);

	tokenContentArray.forEach((key) => {
		// eg. $vd-accent: map-get($vd-colors, accent);
		const line = `$vd-${key}: map-get($vd-${tokenName}, ${key});\n`;

		linesToAppend.push(line);
	});
});

// Append new content to SCSS file
appendFileSync(tokenList.scss, linesToAppend.join(''));

// Remove JS file
fs.removeSync(tokenList.js);

done('Generation completed');
