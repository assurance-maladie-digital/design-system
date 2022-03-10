/**
 * [Build script]
 *
 * Build assets in /dist folder
 * Use vue-cli-service in lib mode to build Vue Dot
 * Transpile TypeScript to JavaScript
 * Remove demo.html and empty folders
 */

import * as fs from 'fs-extra';

import { renderHeader, info, done, log } from '@cnamts/cli-helpers';

import { author } from '../package.json';

renderHeader('Self Build', author.name);

import { execSync, StdioOptions } from 'child_process';

const execOpts = {
	stdio: 'inherit' as StdioOptions
};

const DIST_FOLDER = './dist';

// Create dist folder if it doesn't exist
if (!fs.existsSync(DIST_FOLDER)) {
	info('Creating dist folder');
	fs.mkdirSync(DIST_FOLDER);
} else {
	// Clear the content of dist folder
	info('Removing dist folder content');
	fs.emptyDirSync(`./${DIST_FOLDER}`);
}

const vueCliServicePath = './node_modules/.bin/vue-cli-service';

log();
info('Building full bundle');

// Build the full bundle
execSync(
	`cross-env LIB_MODE=true ${vueCliServicePath} build --target lib --name vue-dot ./src/index.ts`,
	execOpts
);

log();
info('Transpiling TypeScript');

// Remove demo.html file
fs.removeSync(`${DIST_FOLDER}/demo.html`);

// Transpile TypeScript
execSync(`tsc -p tsconfig.build.json --outDir ${DIST_FOLDER}`, execOpts);

// Remove dev folder
fs.removeSync(`${DIST_FOLDER}/dev`);

// Remove component folders because we don't compile them individually at the moment
fs.removeSync(`${DIST_FOLDER}/src/elements`);
fs.removeSync(`${DIST_FOLDER}/src/patterns`);
fs.removeSync(`${DIST_FOLDER}/src/registerAllComponents.js`);

log();
done('Build completed');
