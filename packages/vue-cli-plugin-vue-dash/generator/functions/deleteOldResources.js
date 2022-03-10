/**
 * Delete files & folders from default template
 *
 * @param {Array} resources The complete list of resources (files or folders)
 * @param {Array} resourcesToDelete The list of resources to delete
 * @returns {void}
 */
function deleteOldResources(resources, resourcesToDelete) {
	for (const resource of resourcesToDelete) {
		let shouldDeleteFile;

		if (typeof resource.condition === 'undefined') {
			shouldDeleteFile = true;
		} else {
			shouldDeleteFile = resource.condition;
		}

		if (resource.type === 'file' && shouldDeleteFile) {
			delete resources[resource.path];
			return;
		}

		if (resource.type === 'folder') {
			for (const resourceFile in resources) {
				if (resourceFile.match(resource.path) && shouldDeleteFile) {
					delete resources[resourceFile];
				}
			}
		}
	}
}

module.exports = { deleteOldResources };
