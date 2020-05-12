const shouldRenderTemplate = require('./shouldRenderTemplate');

const Superb = require('superb');

// Make a function, so you can call superb()
const superb = () => Superb.random();

const prompts = [
	{
		name: 'description',
		type: 'text',
		message: 'Project description',
		default: `My ${superb()} project`
	},
	{
		name: 'i18n',
		type: 'confirm',
		message: 'Use i18n (internationalization)',
		default: true
	},
	{
		name: 'vuexPersist',
		type: 'confirm',
		message: 'Use Vuex Persist',
		default: true
	},
	{
		name: 'matomo',
		type: 'confirm',
		message: 'Install Matomo for analytics',
		default: false
	}
];

module.exports = shouldRenderTemplate ? prompts : undefined;
