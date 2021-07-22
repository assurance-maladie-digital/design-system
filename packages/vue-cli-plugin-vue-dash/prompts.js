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
		message: 'Utiliser Vue i18n pour gérer les textes de l’application',
		default: true
	},
	{
		name: 'vuexPersist',
		type: 'confirm',
		message: 'Utiliser Vuex Persist pour persister le store',
		default: true
	},
	{
		name: 'cypress',
		type: 'confirm',
		message: 'Utiliser Cypress pour les tests d\'interface',
		default: true
	},
	{
		name: 'matomo',
		type: 'confirm',
		message: 'Utiliser Matomo pour l\'analyse d\'audience',
		default: false
	},
	{
		name: 'formBuilder',
		type: 'confirm',
		message: 'Installer le FormBuilder',
		default: false
	}
];

module.exports = shouldRenderTemplate ? prompts : undefined;
