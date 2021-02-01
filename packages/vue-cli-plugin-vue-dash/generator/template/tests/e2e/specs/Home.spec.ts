describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('displays a notification when send notification button is pressed', () => {
		cy.dataCy('sendNotification').click();
		cy.dataCy('notificationBar').should('have.class', 'v-snack--active');
	});

	it('goes to about page', () => {
		cy.dataCy('aboutLink').click();

		cy.url().should('eq', Cypress.config().baseUrl + 'a-propos');
	});
});
