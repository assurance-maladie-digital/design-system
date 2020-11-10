describe('NotFound page', () => {
	beforeEach(() => {
		cy.visit('/not-found');
	});

	it('contains title and description', () => {
		cy.dataCy('errorPage').find('h2').should('exist');;
		cy.dataCy('errorPage').find('p').should('exist');;
	});

	it('goes back to home page', () => {
		cy.dataCy('errorPage').find('.v-btn').click();

		cy.url().should('eq', Cypress.config().baseUrl);
	});
});
