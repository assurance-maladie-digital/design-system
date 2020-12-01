const fs = require('fs-extra');

const { getPath } = require('@cnamts/cli-helpers');

const TAB_CHARACTER = '	';
const SPACE_REGEX = / {2}/gm;

/**
 * Fix package.json indentation (from 2 spaces to tabs)
 *
 * @param {boolean} invoking Is the plugin being invoked
 * @param {string} projectName The name of the project
 * @returns {void}
 */
function fixPackageIndentation(invoking, projectName) {
	let packagePath;

	if (invoking) {
		packagePath = getPath('package.json');
	} else {
		packagePath = getPath(projectName + '/package.json');
	}

	const package = fs.readFileSync(packagePath).toString();

	const fixedPackage = package.replace(SPACE_REGEX, TAB_CHARACTER);

	fs.writeFileSync(packagePath, fixedPackage);
}

module.exports = { fixPackageIndentation };
