const fs = require('fs-extra');

const { getPath } = require('../../utils');

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
	const packagePath = getPath(invoking ? 'package.json' : projectName + '/package.json');

	const package = fs.readFileSync(packagePath).toString();

	const fixedPackage = package.replace(SPACE_REGEX, TAB_CHARACTER);

	fs.writeFileSync(packagePath, fixedPackage);
}

module.exports = { fixPackageIndentation };
