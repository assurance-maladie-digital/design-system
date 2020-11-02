// Vue CLI configuration
// see https://cli.vuejs.org/guide/ for help

process.env.VUE_APP_VERSION = require('./package.json').version;

const componentMap = {
	// Elements
	CopyBtn: 'elements',
	CustomIcon: 'elements',
	DataList: 'elements',
	HeaderLoading: 'elements',
	PageCard: 'elements',
	DialogBox: 'elements',
	// Patterns
	DatePicker: 'patterns',
	FileUpload: 'patterns',
	FooterWrapper: 'patterns',
	LangBtn: 'patterns',
	NotificationBar: 'patterns',
	PaginatedTable: 'patterns',
	SubHeader: 'patterns',
	UploadWorkflow: 'patterns',
	// Templates
	ErrorPage: 'templates'
};

/**
 * @param {string} componentName The component name
 * @returns {boolean} Is the component a Vue Dot component
 */
function isVueDotComponent(componentName) {
	const vueDotComponents = Object.keys(componentMap);

	return vueDotComponents.includes(componentName);
}

/**
 * @param {string} componentName The component name
 * @returns {Array} The Vue Dot component
 */
function getVueDotComponent(componentName) {
	const componentType = componentMap[componentName];

	return [componentName, `import ${componentName} from '@cnamts/vue-dot/src/${componentType}/${componentName}'`];
}

const vueDotLoader = [{
	match({ pascalTag }) {
		if (isVueDotComponent(pascalTag)) {
			return getVueDotComponent(pascalTag);
		}
	}
}];

module.exports = { vueDotLoader };
