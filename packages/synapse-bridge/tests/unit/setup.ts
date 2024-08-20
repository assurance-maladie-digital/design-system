import vueSnapshotSerializer from 'jest-serializer-vue';
import {afterEach, beforeEach, expect, vitest} from 'vitest';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import Vuex from 'vuex';
import {actions, mutations, state} from '@/modules/notification';

// Configuration de Vuetify
export const vuetify = createVuetify({
	components,
	directives,
});

// Fonction pour créer un store Vuex personnalisé
export function createNotificationStore() {
	return new Vuex.Store({
		modules: {
			notification: {
				namespaced: true,
				state,
				actions,
				mutations,
			},
		},
	});
}

// Ajout du sérialiseur de snapshots pour Vue
expect.addSnapshotSerializer(vueSnapshotSerializer);

// Polyfill pour ResizeObserver
global.ResizeObserver = require('resize-observer-polyfill');


// Ajout des hooks globaux pour isoler les tests et eviter les faux positifs
beforeEach(() => {
	document.body.innerHTML = ''; // Réinitialisation du DOM
});

afterEach(() => {
	vitest.clearAllMocks(); // Réinitialisation des mocks
	vitest.clearAllTimers(); // Réinitialisation des timers
});
