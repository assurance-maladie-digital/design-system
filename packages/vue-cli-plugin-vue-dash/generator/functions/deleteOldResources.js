/**
 * Remove files & folders from default template
 *
 * @param {array} resources The complete list of resources (files or folders)
 * @param {array} resourcesToDelete The list of resources to delete
 */
function deleteOldResources(resources, resourcesToDelete) {
	for (const resource of resourcesToDelete) {
		let shouldDeleteFile;

		// If there is no condition, delete the resource,
		// Else, test the condition
		if (typeof resource.condition === 'undefined') {
			shouldDeleteFile = true;
		} else {
			shouldDeleteFile = resource.condition;
		}

		// If the ressource is a file
		if (resource.type === 'file') {
			if (shouldDeleteFile) {
				// Delete it
				delete resources[resource.path];
			}
		}

		// Else, if it's a folder
		if (resource.type === 'folder') {
			// Loop in all files
			for (resourceFile in resources) {
				// If the path of the ressource matches a file
				// and we should delete the file
				if (resourceFile.match(resource.path) && shouldDeleteFile) {
					// Delete it
					delete resources[resourceFile];
				}
			}
		}
	}
}

module.exports = deleteOldResources;
