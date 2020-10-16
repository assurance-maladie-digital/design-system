// https://docs.cypress.io/api/introduction/api.html
describe('About page ', () => {
	beforeEach(() => {
		cy.visit('/a-propos');
	});

	it('check if the route is : /a-propos', () => {
		cy.url().should('contain', '/a-propos');
	});

	it('check if the title is : À propos', () => {
		cy.contains('h2', ' À propos ');
	});

	it('check each list contains', () => {
		cy.contains('h3', 'CNAM');
		cy.contains('h3', 'Vue.js');
		cy.contains('h3', 'Vuetify');
		cy.contains('h3', 'Écosystème');
	});

	it('check contains title CNAM and length ', () => {
		cy.contains('h3', 'CNAM').parent().find('li').should('have.length', 1).as('cnamContains');
		cy.get('@cnamContains').contains('Design System');
	});

	it('check contains title Vue.js and length ', () => {
		cy.contains('h3', 'Vue.js').parent().find('li').should('have.length', 2).as('vueJsContains');
		cy.get('@vueJsContains').contains('Core Docs');
		cy.get('@vueJsContains').contains('Forum');
	});

	it('check contains title Vuetify and length ', () => {
		cy.contains('h3', 'Vuetify').parent().find('li').should('have.length', 1).as('vuetifyContains');
		cy.get('@vuetifyContains').contains('Vuetify');
	});

	it('check contains title Ecosystème and length ', () => {
		cy.contains('h3', 'Écosystème').parent().find('li').should('have.length', 3).as('ecosysContains');
		cy.get('@ecosysContains').contains('Vue Router');
		cy.get('@ecosysContains').contains('Vuex');
		cy.get('@ecosysContains').contains('Awesome Vue');
	});

	it('click on button: retour', () => {
		cy.contains('a', ' Retour ').click();
	});
});
