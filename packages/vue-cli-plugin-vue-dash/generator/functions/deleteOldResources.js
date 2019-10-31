/** Remove files & folders from default template */
function deleteOldResources(resources, options) {
	const resourcesToDelete = [
		{
			type: 'file',
			path: 'src/assets/logo.png'
		},
		{
			type: 'folder',
			path: 'src/router/'
		},
		{
			type: 'file',
			path: 'src/shims-tsx.d.ts'
		},
		{
			type: 'file',
			path: 'src/shims-vue.d.ts'
		},
		{
			type: 'file',
			path: 'src/components/HelloWorld.vue'
		},
		{
			type: 'file',
			path: 'tests/unit/example.spec.ts'
		},
		{
			type: 'folder',
			path: 'src/translations/',
			condition: !options.i18n
		},
		{
			type: 'file',
			path: 'src/i18n.ts',
			condition: !options.i18n
		},
		{
			type: 'file',
			path: 'tests/e2e/specs/test.js'
		}
	];

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
