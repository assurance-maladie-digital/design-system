/**
 * Delete files & folders from default template
 *
 * @param {Array} resources The complete list of resources (files or folders)
 * @param {Array} resourcesToDelete The list of resources to delete
 * @returns {void}
 */
function deleteOldResources(resources, resourcesToDelete) {
	resourcesToDelete.forEach((resource) => {
		const shouldDeleteFile = typeof resource.condition === 'undefined' ? true : resource.condition;

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
	});
}

module.exports = { deleteOldResources };
