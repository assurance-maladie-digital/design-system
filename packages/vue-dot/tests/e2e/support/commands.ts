import { mount, mountCallback } from '@cypress/vue';

import { MountType } from '../types';

import { vuetify } from '../vuetify';

const vuetifyFn = () => {
	const root = document.getElementById('__cy_root');

	// Add the v-application class that allows Vuetify styles to work
	if (root !== null && !root.classList.contains('v-application')) {
		root.classList.add('v-application');
		root.setAttribute('data-app', 'true');
	}
};

// Add command to directive # dataCy
Cypress.Commands.add('dataCy', (value) => {
	return cy.get(`[data-cy=${value}]`);
});

// Mount and add Vuetify
Cypress.Commands.add('mountComponent', ( MountedComponent, options?, fullMount = false ) => {
	const fn: MountType = !fullMount ? mount: mountCallback;

	vuetifyFn();

	return fn(MountedComponent, {
		vuetify,
		...options
	});
});

// Wrapper component
Cypress.Commands.add('vue', () => {
	return cy.wrap(Cypress.vueWrapper);
});
