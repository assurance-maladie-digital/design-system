import vueSnapshotSerializer from 'jest-serializer-vue';
import { expect } from 'vitest';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import Vuex from 'vuex';
import { actions, mutations, state } from '@/modules/notification';

expect.addSnapshotSerializer(vueSnapshotSerializer);

export const vuetify = createVuetify({
  components,
  directives,
});

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

// eslint-disable-next-line ts/no-require-imports
globalThis.ResizeObserver = require('resize-observer-polyfill');
