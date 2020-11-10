declare namespace Cypress {
	interface Chainable {
		/**
		 * Custom command to select DOM element using data-cy attribute
		 * @example cy.dataCy('greeting')
		 */
		dataCy(value: string): Chainable<Element>;
	}
}
