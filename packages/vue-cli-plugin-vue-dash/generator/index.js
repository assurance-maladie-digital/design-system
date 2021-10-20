const { getFooterDate } = require('./functions/getFooterDate');
const { extendPackage } = require('./functions/extendPackage');
const { fixPackageIndentation } = require('./functions/fixPackageIndentation');
const { parseIndexFile } = require('./functions/parseIndexFile');
const { deleteOldResources } = require('./functions/deleteOldResources');

const { getResourcesToDelete } = require('./getResourcesToDelete');

const { shouldRenderTemplate } = require('../shouldRenderTemplate');
const { capitalizeFirstLetter } = require('../utils');

module.exports = (api, userOptions) => {
	const projectName = api.rootOptions.projectName;
	const pm = api.generator.pm.bin;

	// By default, do not render template when invoking
	// except if --render-template option is provided
	// (this prevents erasing an entire project by accident)
	if (shouldRenderTemplate) {
		const options = {
			...userOptions,
			// Custom options
			name: projectName,
			footerDate: getFooterDate(),
			pm,
			// Functions
			capitalizeFirstLetter
		};

		api.render('./template', options);

		// Update package.json
		extendPackage(api, options, pm);

		// Delete old ressources and parse public/index.html
		api.postProcessFiles((resources) => {
			const resourcesToDelete = getResourcesToDelete(options);
			deleteOldResources(resources, resourcesToDelete);

			const indexPath = 'public/index.html';
			resources[indexPath] = parseIndexFile(resources[indexPath]);
		});
	}

	// Fix package indentation after writing files to the disk
	// Even if no template is rendered the indentation is modified
	api.onCreateComplete(() => {
		fixPackageIndentation(api.invoking, projectName);
	});
};
