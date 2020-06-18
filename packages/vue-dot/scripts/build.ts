/**
 * [Build script]
 *
 * Build assets in /dist folder
 * Use vue-cli-service in lib mode to build Vue Dot
 * Execute generate tokens script
 * Transpile TypeScript to JavaScript
 * Remove demo.html and empty folders
 */

import * as fs from 'fs-extra';

import { renderHeader, info, done, log } from '@cnamts/cli-helpers';
import { execOpts } from './utils';

import { author } from '../package.json';

renderHeader('Self Build', author.name);

import { execSync } from 'child_process';

const DIST_FOLDER = './dist';

// Create dist folder if not exists
if (!fs.existsSync(DIST_FOLDER)) {
	info('Creating dist folder');

	fs.mkdirSync(DIST_FOLDER);
} else {
	info('Removing dist folder content');

	// Clear the content of dist folder
	fs.emptyDirSync(`./${DIST_FOLDER}`);
}

const vueCliServicePath = './node_modules/.bin/vue-cli-service';

log();
info('Building full bundle');

// Build the full bundle
execSync(
	`LIB_MODE=true ${vueCliServicePath} build --target lib --name vue-dot ./src/index.ts`,
	execOpts
);

// Generate Design Tokens
execSync('ts-node --project tsconfig.json --files ./scripts/generateTokens.ts', execOpts);

log();
info('Transpiling TypeScript');

// Remove demo.html file
fs.removeSync(`${DIST_FOLDER}/demo.html`);

// Transpile TypeScript
execSync(`tsc -p tsconfig.build.json --outDir ${DIST_FOLDER}`, execOpts);

// Remove playground folder
fs.removeSync(`${DIST_FOLDER}/playground`);

// Remove component folders because we don't compile
// them individually at the moment
fs.removeSync(`${DIST_FOLDER}/src/elements`);
fs.removeSync(`${DIST_FOLDER}/src/patterns`);
fs.removeSync(`${DIST_FOLDER}/src/registerAllComponents.js`);

log();
done('Build completed');
