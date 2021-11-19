import { mount, mountCallback } from '@cypress/vue';

import { Wrapper } from '@vue/test-utils';

declare type VueComponent =  Vue.ComponentOptions<any> | Vue.VueConstructor;

declare type MountOptionsArgument = any;

declare type OptionsType =  Record<string, unknown> | any;

declare type MountType = ReturnType<typeof mount> | ReturnType<typeof mountCallback> | any;

declare global{
	namespace Cypress {
		export interface Chainable {
			/**
			 * Custom command to select DOM element using data-cy attribute
			 *
			 * @example cy.dataCy('greeting')
			 */
			dataCy(value: string): Chainable<Element>;

			mountComponent: (component: VueComponent | any, optionsOrProps?: MountOptionsArgument, fullMount?: boolean) => MountType;

			/**
			 *  command snapshot, additionnal type
			 */
			toMatchSnapshot(): Chainable<Element>;

			vue: () => Promise<any>

		}
	}
}