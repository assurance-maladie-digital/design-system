import vueSnapshotSerializer from 'jest-serializer-vue';
import { expect } from 'vitest';

expect.addSnapshotSerializer(vueSnapshotSerializer)

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Vuex from "vuex";
import { state, actions, mutations } from "@/modules/notification";

export const vuetify = createVuetify({
	components,
	directives
})

export function createNotificationStore() {
	return new Vuex.Store({
		modules: {
			notification: {
				namespaced: true,
				state,
				actions,
				mutations
			}
		}
	});
}

global.ResizeObserver = require('resize-observer-polyfill')
