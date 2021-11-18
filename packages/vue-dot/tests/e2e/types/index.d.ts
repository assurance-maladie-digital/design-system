declare namespace Cypress {
	export interface Chainable {
		/**
		 * Custom command to select DOM element using data-cy attribute
		 *
		 * @example cy.dataCy('greeting')
		 */
		dataCy(value: string): Chainable<Element>;
	}

	export interface Cypress{
		vue: Record<string, unknown>
	}
}
