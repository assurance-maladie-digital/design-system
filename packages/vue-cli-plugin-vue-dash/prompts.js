const shouldRenderTemplate = require('./shouldRenderTemplate');

const Superb = require('superb');

// Make a function, so you can call superb()
const superb = () => Superb.random();

const prompts = [
	{
		name: 'description',
		type: 'text',
		message: 'Description du projet',
		default: `My ${superb()} project`
	},
	{
		name: 'i18n',
		type: 'confirm',
		message: 'Utiliser Vue i18n (pour l\'internationalisation)',
		default: true
	},
	{
		name: 'vuexPersist',
		type: 'confirm',
		message: 'Utiliser Vuex Persist',
		default: true
	},
	{
		name: 'cypress',
		type: 'confirm',
		message: 'Utiliser cypress pour les tests d\'interface',
		default: true
	},
	{
		name: 'matomo',
		type: 'confirm',
		message: 'Installer Matomo (pour les analyses d\'audience)',
		default: false
	}
];

module.exports = shouldRenderTemplate ? prompts : undefined;
