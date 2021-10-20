declare namespace Cypress {
	export interface Chainable {
		/**
		 * Custom command to select DOM element using data-cy attribute
		 *
		 * @example cy.dataCy('greeting')
		 */
		dataCy(value: string): Chainable<Element>;
		/**
		 *  command snapshot, additionnal type
		 */
		toMatchSnapshot(): Chainable<Element>;

	}
}

declare module '@/tests/*';