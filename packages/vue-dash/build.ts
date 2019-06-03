import * as fs from 'fs-extra';
import * as path from 'path';

const { execSync } = require('child_process');

/** Dist folder */
const dist = 'bin';

// Create dist folder if not exists
if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}

// Clear the content of dist folder
fs.emptyDirSync(`./${dist}`);

// Copy the template folder to dist
fs.copySync('./template', `./${dist}/template`);

// Build the package
execSync(
	`tsc`,
	{
		stdio: 'inherit'
	}
);
