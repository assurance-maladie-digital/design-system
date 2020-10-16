// https://docs.cypress.io/api/introduction/api.html
describe('Toolbar', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Visits the app root url then the current ttitle', () => {
		cy.contains('div', 'Projet <%= name %>');
	});

	it('Click on logo user', () => {
		cy.dataCy('header-menu').parent().find('a').should('have.attr', 'href');
	});

	it('Check contains menu of popup', () => {
		cy.dataCy('header-menu').parent().find('button').click();

		cy.contains('Accueil');

		cy.contains('Déconnexion');
	});
});
