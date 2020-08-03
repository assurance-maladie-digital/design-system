import * as fs from 'fs-extra';
import { appendFileSync } from 'fs';

import { info, done, log } from '@cnamts/cli-helpers';

import { writeToBeginning } from './utils/writeToBeginning';

import { execSync, StdioOptions } from 'child_process';

import { default as tokensObj } from '../src/tokens';

const execOpts = {
	stdio: 'inherit' as StdioOptions
};

type Tokens = {
	[key: string]: string | Tokens;
};

const tokens = tokensObj as Tokens;

const SRC_FOLDER = './src';
const DIST_FOLDER = './dist';

function toKebabCase(value: string): string {
	return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

const tokenList = {
	js: '/tokens.js',
	ts: '/tokens.ts',
	scss: '/tokens.scss'
};

delete tokens._jsonToScss; // Remove package config

info('Generating Design Tokens');

log();
info('Transpiling TypeScript');

// Transpile tokens file to JS
// We need to do this because
// json-to-scss doesn't support TypeScript
execSync(`tsc ${SRC_FOLDER}/${tokenList.ts} --outDir ${DIST_FOLDER}`, execOpts);

info('Generating SCSS file');

// Generate SCSS file
execSync(`json-to-scss ${DIST_FOLDER}/${tokenList.js}`, execOpts);

const tokenArray = Object.keys(tokens);

const linesToAppend: string[] = [];

// Generate default SCSS exports to avoid using deep-get
tokenArray.forEach((tokenName) => {
	const normalizedTokenName = toKebabCase(tokenName);

	// eg. $vd-colors: map-get($vd-tokens, colors);
	const line = `\n$vd-${normalizedTokenName}: map-get($vd-tokens, ${tokenName});\n`;

	linesToAppend.push(line);

	// Generate var for each value
	const tokenContent = tokens[tokenName];

	if (typeof tokenContent !== 'object') {
		return;
	}

	linesToAppend.push('\n');

	const tokenContentArray = Object.keys(tokenContent);

	tokenContentArray.forEach((key) => {
		const normalizedKey = toKebabCase(key);

		// eg. $vd-accent: map-get($vd-colors, accent);
		const line = `$vd-${normalizedKey}: map-get($vd-${normalizedTokenName}, ${key});\n`;

		linesToAppend.push(line);
	});
});

// Append new content to SCSS file
appendFileSync(`${DIST_FOLDER}/${tokenList.scss}`, linesToAppend.join(''));

done('Generation completed');
