import * as fs from 'fs-extra';

import { info, done, log } from '@cnamts/cli-helpers';

import { execSync, StdioOptions } from 'child_process';

import { tokens } from '../src/tokens';

/** @see https://github.com/rlapoele/json-to-scss/blob/master/lib/jsValueToSassString.js */
import jsValueToSassString from 'json-to-scss/lib/jsValueToSassString';

const execOpts = {
	stdio: 'inherit' as StdioOptions
};

const SRC_FOLDER = './src';
const DIST_FOLDER = './dist';

function toKebabCase(value: string): string {
	return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

const tokenList = {
	js: 'tokens.js',
	ts: 'tokens.ts',
	scss: 'tokens.scss',
	json: 'tokens.json'
};

const TAB_CHARACTER = '	';

info('Generating Design Tokens');
log();

// Create dist folder if it doesn't exist
if (!fs.existsSync(DIST_FOLDER)) {
	info('Creating dist folder');

	fs.mkdirSync(DIST_FOLDER);
} else {
	info('Removing dist folder content');

	// Clear the content of dist folder
	fs.emptyDirSync(`./${DIST_FOLDER}`);
}

info('Generating JSON file');

// Stringify tokens
const tokensString = JSON.stringify(tokens, null, TAB_CHARACTER);
// Convert camelCase to kebab-case and append new line
const jsonFile = toKebabCase(tokensString) + '\n';

fs.writeFileSync(`${DIST_FOLDER}/${tokenList.json}`, jsonFile);

info('Generating SCSS file');

// Generate default SCSS exports from tokens to avoid using deep-get
const tokenArray = Object.keys(tokens);

const linesToAppend: string[] = [];

tokenArray.forEach((tokenName) => {
	// eg. $vd-colors: map-get($vd-tokens, colors);
	const line = `\n$vd-${tokenName}: map-get($vd-tokens, ${tokenName});\n`;

	linesToAppend.push(line);

	// Generate var for each value
	const tokenContent = tokens[tokenName];

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

fs.writeFileSync(`${DIST_FOLDER}/${tokenList.scss}`, scssFile);

info('Transpiling TypeScript');

// Transpile tokens file to JS
execSync(`tsc ${SRC_FOLDER}/${tokenList.ts} --outDir ${DIST_FOLDER}`, execOpts);

done('Generation completed');
