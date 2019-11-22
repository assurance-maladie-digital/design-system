import * as fs from 'fs-extra';
import { execSync } from 'child_process';

import renderHeader from '../src/renderHeader';

import { author } from '../package.json';

renderHeader('Self Build', author.name);

/** Dist folder */
const DIST_FOLDER = './bin';

// Create dist folder if not exists
if (!fs.existsSync(DIST_FOLDER)) {
	fs.mkdirSync(DIST_FOLDER);
}

// Clear the content of dist folder
fs.emptyDirSync(DIST_FOLDER);

// Build the package
execSync(
	'tsc --project tsconfig.build.json',
	{
		stdio: 'inherit'
	}
);
