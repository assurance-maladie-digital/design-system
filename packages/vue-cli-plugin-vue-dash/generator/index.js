const getFooterDate = require('./functions/getFooterDate');
const extendPackage = require('./functions/extendPackage');
const fixPackageIndentation = require('./functions/fixPackageIndentation');
const deleteOldResources = require('./functions/deleteOldResources');
const parseIndexFile = require('./functions/parseIndexFile');

const { capitalizeFirstLetter } = require('../utils');

module.exports = (api, userOptions) => {
	const options = {
		...userOptions,
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
		deleteOldResources(resources, options);
		parseIndexFile(resources);
	});

	// Delete old resources after writing files to disk
	api.onCreateComplete(() => {
		fixPackageIndentation();
	});
};
