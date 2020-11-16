const fs = require('fs');

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
 * Checks if the file exists (sync)
 *
 * @param {string} path The path of the file
 * @returns {boolean} If the file exists
 */
function fileExists(path) {
	return fs.existsSync(path);
}

module.exports = {
	capitalizeFirstLetter,
	fileExists
};
