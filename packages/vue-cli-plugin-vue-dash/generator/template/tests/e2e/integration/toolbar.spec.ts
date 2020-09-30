// https://docs.cypress.io/api/introduction/api.html
/// <reference path="../support/index.d.ts" />
describe('Toolbar page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Visits the app root url then the current ttitle', () => {
		cy.contains('div','Projet my-project-game');
	});

	it('Click on logo user', () => {
		cy.dataCy('toolbar-elmt').parent().find('a').should('have.attr', 'href');
	});

	it('Check contains menu of popup', () => {

		cy.dataCy('toolbar-elmt').parent().find('button').click();

		cy.contains('Accueil');

		cy.contains('Déconnexion');
	});

});
