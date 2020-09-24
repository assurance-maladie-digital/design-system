// https://docs.cypress.io/api/introduction/api.html
describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Verify contains of selected tab: Acceuil | À propos: ', () => {
		cy.get('.v-slide-group__wrapper>.v-slide-group__content>a').should('have.length', 2);
		cy.get('.v-slide-group__wrapper>.v-slide-group__content>a')
		.contains('a', ' Accueil ')
		.should('have.attr', 'href')
		.and('include', '/');

		cy.get('.v-slide-group__wrapper>.v-slide-group__content>a')
		.contains('a', ' À propos ')
		.should('have.attr', 'href')
		.and('include', '/a-propos');
	});

	it('Routing both side tab: Acceuil | À propos: ', () => {
		cy.get('.v-slide-group__wrapper>.v-slide-group__content>a')
		.last()
		.click();

		cy.wait(2000);

		cy.get('.v-slide-group__wrapper>.v-slide-group__content>a')
		.first()
		.click();

	});

	it('Check contains of tab: À propos : ', () => {
		cy.get('.v-slide-group__wrapper>.v-slide-group__content>a')
		.last()
		.click();

		cy.url().should('contain', '/a-propos');

		cy.get('.vd-page-card>.mt-4')
		.should('have.length', 4);

		cy.get('.vd-page-card>.mt-4');
	});

});
