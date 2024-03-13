import vueSnapshotSerializer from 'jest-serializer-vue';
import { expect } from 'vitest';
import Vuex, { Store, StoreOptions } from 'vuex';

expect.addSnapshotSerializer(vueSnapshotSerializer)

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
	components,
	directives
})

export function createStore<T = unknown>(options: StoreOptions<T>): Store<T> {
	return new Vuex.Store(options);
}

global.ResizeObserver = require('resize-observer-polyfill')
