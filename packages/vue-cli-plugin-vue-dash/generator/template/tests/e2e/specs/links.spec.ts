// -- Start: Our Cypress Tests --
describe('Checking links on the all app', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.dataCy('header-menu').parent().find('a').as('linkHeader');
		cy.dataCy('toolbar-tabs').parent().find('a').as('linkTab');
	});

	context('header', () => {
		it('Logo', () => {
			cy.get('@linkHeader').should('have.attr', 'href');
			cy.get('@linkHeader').click();
		});
	});

	context('toolbar', () => {
		it('On contain toolbar: acceuil', () => {
			cy.get('@linkTab').eq(0).should('have.attr', 'href');
			cy.get('@linkTab').filter('[aria-selected=false]').click();
		});

		it('On contain toolbar: à propos', () => {
			cy.get('@linkTab').eq(1).should('have.attr', 'href');
			cy.get('@linkTab').filter('[aria-selected=true]').click();
		});
	});

	context('Home', () => {

		it('On contain page acceuil', () => {
			cy.contains('h2', ' Premiers pas ').parent().find('a').contains('À propos').should('have.attr', 'href');
			cy.contains('h2', ' Premiers pas ').parent().find('a').contains('À propos').click();
		});
	});

	context('About', () => {
		it('On contain à page propos', () => {
			cy.visit('/a-propos');
			cy.contains('h2', ' À propos ').parent().find('a').as('linksAbout');
			cy.get('@linksAbout').eq(0).should('have.attr', 'href');
			cy.get('@linksAbout').eq(1).should('have.attr', 'href');
			cy.get('@linksAbout').eq(2).should('have.attr', 'href');
			cy.get('@linksAbout').eq(3).should('have.attr', 'href');
			cy.get('@linksAbout').eq(4).should('have.attr', 'href');
			cy.get('@linksAbout').eq(5).should('have.attr', 'href');
			cy.get('@linksAbout').eq(6).should('have.attr', 'href');
		});
	});
});
