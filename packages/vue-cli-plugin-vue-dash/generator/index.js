const fs = require('fs');
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
			projectName,
			pm,
			// Functions
			capitalizeFirstLetter
		};

		api.render('./template', options);

		extendPackage(api, options, pm);

		api.postProcessFiles((resources) => {
			deleteOldResources(resources, getResourcesToDelete(options));

			const indexPath = 'public/index.html';
			resources[indexPath] = parseIndexFile(resources[indexPath]);
		});
	}

	// Do these operations after writing files to the disk
	// to be sure they are effective
	api.onCreateComplete(() => {
		fixPackageIndentation(api.invoking, projectName);
		fs.unlinkSync(api.resolve('src/main.js'));
	});
};
