// https://docs.cypress.io/api/introduction/api.html
describe('About page', () => {
	beforeEach(() => {
		cy.visit('/a-propos');
	});

	it('contains link list', () => {
		cy.dataCy('links').find('ul').should('have.length', 4);
	});

	it('goes back to home page', () => {
		cy.dataCy('backBtn').click();

		cy.url().should('eq', Cypress.config().baseUrl);
	});
});
