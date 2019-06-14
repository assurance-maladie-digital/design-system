import * as fs from 'fs-extra';
import { renderHeader, info, done, log } from '@cnamts/cli-helpers';
import { author } from './package.json';

renderHeader('Self Build', author.name);

const { execSync } = require('child_process');

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
	`${vueCliServicePath} build --target lib --name vue-dot ./src/index.ts`,
	{
		stdio: 'inherit'
	}
);

log();
info('Transpiling TypeScript');

// Remove demo.html file
fs.removeSync(`${dist}/demo.html`);

// Transpile TypeScript
execSync(
	`tsc -p tsconfig.build.json --outDir ${dist}`,
	{
		stdio: 'inherit'
	}
);

// Remove playground folder
fs.removeSync(`${dist}/playground`);

log();
done('Build completed');
