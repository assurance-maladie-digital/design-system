// https://docs.cypress.io/api/introduction/api.html
describe('Toolbar page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Visits the app root url then the current title', () => {
		cy.contains('div','Projet <%= name %>');
	});

	it('Click on logo user', () => {
		cy.get('.menu-el')
		.click();

		cy.get('.white').should('be.visible');

		cy.get('.white>div').should('have.length', 2);
	});

	it('Check contains menu of popup', () => {

		cy.get('.menu-el').click();

		cy.contains('Accueil');

		cy.contains('Déconnexion');

		cy.get('.white>button').click();

	});

});
