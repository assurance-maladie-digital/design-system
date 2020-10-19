// https://docs.cypress.io/api/introduction/api.html
describe('Toolbar', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Visits the app root url then the current title', () => {
		cy.contains('div', 'Projet <%= name %>');
	});

	it('Check contains menu of popup', () => {
		cy.dataCy('header-menu').parent().find('button').click();

		cy.contains('Accueil');

		cy.contains('Déconnexion');
	});
});
