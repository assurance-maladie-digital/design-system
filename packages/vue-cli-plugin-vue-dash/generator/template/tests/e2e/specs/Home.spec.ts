describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('displays a notification when notify button is pressed', () => {
		cy.dataCy('notify').click();
		cy.dataCy('notificationBar').should('have.class', 'v-snack--active');
	});

	it('goes to about page', () => {
		cy.dataCy('aboutLink').click();

		cy.url().should('eq', Cypress.config().baseUrl + 'a-propos');
	});
});
