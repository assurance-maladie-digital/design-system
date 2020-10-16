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
		name: 'matomo',
		type: 'confirm',
		message: 'Installer Matomo (pour les analyses d\'audience)',
		default: false
	},
	{
		name: 'formBuilder',
		type: 'confirm',
		message: 'Installer Form-builder (bundle pour afficher des formulaires)',
		default: false
	}
];

module.exports = shouldRenderTemplate ? prompts : undefined;
