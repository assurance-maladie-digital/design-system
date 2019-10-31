const path = require('path');
const fs = require('fs-extra');

const { getPath } = require('@cnamts/cli-helpers');

const TAB_CHARACTER = '	';
const SPACE_REGEX = /  /gm;

/** Fix package.json indentation (from 2 spaces to tabs) */
function fixPackageIndentation() {
	const packagePath = getPath('package.json');

	const package = fs.readFileSync(packagePath).toString();

	const fixedPackage = package.replace(SPACE_REGEX, TAB_CHARACTER);

	fs.writeFileSync(packagePath, fixedPackage);
}

module.exports = fixPackageIndentation;
