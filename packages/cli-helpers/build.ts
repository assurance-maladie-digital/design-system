import * as fs from 'fs-extra';
import { renderHeader } from './';
import { author } from './package.json';

renderHeader('Self Build', author.name);

import { execSync } from 'child_process';

/** Dist folder */
const dist = 'bin';

// Create dist folder if not exists
if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}

// Clear the content of dist folder
fs.emptyDirSync(`./${dist}`);

// Build the package
execSync(
	'tsc',
	{
		stdio: 'inherit'
	}
);
