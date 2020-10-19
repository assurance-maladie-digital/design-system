// https://docs.cypress.io/api/introduction/api.html
describe('Home page ', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Check contains tab: Acceuil', () => {
		cy.contains('h2', ' Premiers pas ').parent().find('p').should('have.length', 2);
		cy.contains('h2', ' Premiers pas ').parent().find('button').contains(' Envoyer une notification (exemple) ');
	});

	it('Click button on tab: Acceuil', () => {
		cy.contains('h2', ' Premiers pas ').parent().find('button').click();
	});

	it('Check contains and length of the tab: À propos :', () => {
		cy.dataCy('toolbar-tabs').find('a').filter('[aria-selected=false]').click();
		cy.url().should('contain', '/a-propos');

		cy.contains('h2', ' À propos').parent().find('div').should('have.length', 4).each(($el) => {
			cy.wrap($el).find('li');
		});
	});
});
