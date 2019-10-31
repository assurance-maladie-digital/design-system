/** Parse public/index.html and replace placeholder tags with EJS tags */
function parseIndexFile(resources, indexPath = 'public/index.html') {
	// Replace {BASE_URL} with <%= BASE_URL %>
	resources[indexPath] = resources[indexPath].replace(/{BASE_URL}/g, '<%= BASE_URL %>');
}

module.exports = parseIndexFile;
