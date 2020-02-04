import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

import { notification } from '../../src/modules/notification';

Vue.use(Vuex);

/** See https://vuex.vuejs.org/fr/getting-started.html for help */
const storeOptions: StoreOptions<RootState> = {
	strict: true,
	state: {},
	// See https://vuex.vuejs.org/guide/modules.html for more info on modules
	modules: {
		notification
	}
};

export const store = new Vuex.Store<RootState>(storeOptions);
