// Vue CLI configuration
// see https://cli.vuejs.org/guide/ for help

const componentMap = {
	// Elements
	CopyBtn: 'elements',
	CustomIcon: 'elements',
	DataList: 'elements',
	DialogBox: 'elements',
	DownloadBtn: 'elements',
	ExternalLinks: 'elements',
	HeaderLoading: 'elements',
	Logo: 'elements',
	PageContainer: 'elements',
	// Patterns
	DataListGroup: 'patterns',
	DatePicker: 'patterns',
	FileUpload: 'patterns',
	FilterModule: 'patterns',
	FooterBar: 'patterns',
	FooterWrapper: 'patterns',
	HeaderBar: 'patterns',
	LangBtn: 'patterns',
	NotificationBar: 'patterns',
	PaginatedTable: 'patterns',
	SubHeader: 'patterns',
	TableToolbar: 'patterns',
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

/**
 * This function will be called for every tag used in each vue component
 * It should return an array, the first element will be inserted into the
 * components array, the second should be a corresponding import
 *
 * @see https://github.com/vuetifyjs/vuetify-loader#automatic-imports
 * @param {string} _ The tag as it was originally used in the template
 * @param {object} options The options of the component
 * @param {string} options.camelTag The tag normalized to PascalCase
 * @returns {Array} The Vue Dot components
 */
function match(_, { camelTag }) {
	if (isVueDotComponent(camelTag)) {
		return getVueDotComponent(camelTag);
	}
}

const vueDotLoader = () => [{
	match
}];

module.exports = { vueDotLoader };
