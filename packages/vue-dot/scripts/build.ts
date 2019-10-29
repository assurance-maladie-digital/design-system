import * as fs from 'fs-extra';

import { renderHeader, info, done, log } from '@cnamts/cli-helpers';
import { execOpts } from './utils';

import { author } from '../package.json';

renderHeader('Self Build', author.name);

import { execSync } from 'child_process';

/** Dist folder */
const dist = 'dist';

// Create dist folder if not exists
if (!fs.existsSync(dist)) {
	info('Creating dist folder');

	fs.mkdirSync(dist);
} else {
	info('Removing dist folder content');

	// Clear the content of dist folder
	fs.emptyDirSync(`./${dist}`);
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
execSync('ts-node --project tsconfig.json --files scripts/generateTokens.ts', execOpts);

log();
info('Transpiling TypeScript');

// Remove demo.html file
fs.removeSync(`${dist}/demo.html`);

// Transpile TypeScript
execSync(`tsc -p tsconfig.build.json --outDir ${dist}`, execOpts);

// Remove playground folder
fs.removeSync(`${dist}/playground`);

// Remove component folders because we don't compile
// them individually at the moment
fs.removeSync(`${dist}/src/elements`);
fs.removeSync(`${dist}/src/patterns`);

log();
done('Build completed');
