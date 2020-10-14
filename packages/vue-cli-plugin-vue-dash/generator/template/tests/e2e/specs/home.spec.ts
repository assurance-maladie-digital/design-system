// https://docs.cypress.io/api/introduction/api.html
describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Verify contains of selected tab: Acceuil | À propos: ', () => {
		cy.dataCy('tab-content-link').find('a').should('have.attr', 'href');
	});

	it('Check contains tab: Acceuil : ', () => {
		cy.dataCy('tab-content-link').find('a').filter('[aria-selected=true]').click();
		cy.url().should('contain', '/');

		cy.contains('h2', ' Premiers pas ').parent().find('p').should('have.length', 2);
		cy.contains('h2', ' Premiers pas ').parent().find('a').contains('À propos').should('have.attr', 'href');
		cy.contains('h2', ' Premiers pas ').parent().find('button').contains(' Envoyer une notification (exemple) ');
	});

	it('Click button on tab: Acceuil ', () => {
		cy.contains('h2', ' Premiers pas ').parent().find('button').click();
	});

	it('Check contains of tab: À propos : ', () => {
		cy.dataCy('tab-content-link').find('a').filter('[aria-selected=false]').click();
		cy.url().should('contain', '/a-propos');

		cy.contains('h2', ' À propos ').parent().find('div').should('have.length', 4).each(($el) => {
			cy.wrap($el).find('li');
		})
	});

	it('Check contains of tab: À propos the click button: Retour ', () => {
		cy.dataCy('tab-content-link').find('a').filter('[aria-selected=false]').click();
		cy.contains('h2', ' À propos ').parent().find('a').click();
		cy.url().should('contain', '/');
	});
});
