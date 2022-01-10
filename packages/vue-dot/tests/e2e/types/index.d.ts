/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, mountCallback } from '@cypress/vue';

declare type VueComponent =  Vue.ComponentOptions<any> | Vue.VueConstructor;

declare type OptionsType =  Record<string, unknown> | any;

declare type MountOptionsArgument = any;
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

			/** Command snapshot, additional type */
			toMatchSnapshot(): Chainable<Element>;

			vue: () => Promise<any>;
		}
	}
}
