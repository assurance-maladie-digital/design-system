/**
 * Parse index file and replace placeholder tags with EJS tags
 *
 * @param {string} indexFile The index file to parse as a string
 * @returns {string} The parsed file
 */
function parseIndexFile(indexFile) {
	// Replace {BASE_URL} with <%= BASE_URL %>
	return indexFile.replace(/{BASE_URL}/g, '<%= BASE_URL %>');
}

module.exports = parseIndexFile;
