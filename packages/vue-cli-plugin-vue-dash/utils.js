const path = require('path');

/**
 * Capitalize the first letter of a string
 *
 * @param {string} string The string to capitalize
 * @returns {string} The capitalized string
 */
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Get path relative to current working directory
 *
 * @param {string} value The path to join
 * @returns {string} The normalized path
 */
function getPath(value) {
	return path.join(process.cwd(), value);
}

module.exports = {
	capitalizeFirstLetter,
	getPath
};
