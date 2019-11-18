const getFooterDate = require('./functions/getFooterDate');
const extendPackage = require('./functions/extendPackage');
const fixPackageIndentation = require('./functions/fixPackageIndentation');
const parseIndexFile = require('./functions/parseIndexFile');

const getResourcesToDelete = require('./getResourcesToDelete');
const deleteOldResources = require('./functions/deleteOldResources');

const { capitalizeFirstLetter } = require('../utils');

module.exports = (api, userOptions) => {
	const options = {
		...userOptions,
		// Custom options
		name: api.rootOptions.projectName,
		footerDate: getFooterDate(),
		pm: 'yarn',
		// Functions
		capitalizeFirstLetter
	};

	api.render('./template', options);

	// Update package.json
	extendPackage(api, options);

	api.postProcessFiles((resources) => {
		const resourcesToDelete = getResourcesToDelete(options);
		deleteOldResources(resources, resourcesToDelete);

		const indexPath = 'public/index.html';
		resources[indexPath] = parseIndexFile(resources[indexPath]);
	});

	// Delete old resources after writing files to disk
	api.onCreateComplete(() => {
		fixPackageIndentation();
	});
};
