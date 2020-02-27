import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';<% if (vuexPersist) { %>
import VuexPersistence from 'vuex-persist';<% } %>

import { RootState } from './types';

// Use the notification module from Vue Dot
import { notification } from '@cnamts/vue-dot/src/modules/notification';<% if (vuexPersist) { %>

/** The store is saved in the browser's session */
const vuexLocal = new VuexPersistence<RootState>();<% } %>

Vue.use(Vuex);

/** See https://vuex.vuejs.org/fr/getting-started.html for help */
const store: StoreOptions<RootState> = {
	strict: true,
	state: {},
	// See https://vuex.vuejs.org/guide/modules.html for more info on modules
	modules: {
		notification
	}<% if (vuexPersist) { %>,
	plugins: [
		vuexLocal.plugin
	]<% } %>
};

export default new Vuex.Store<RootState>(store);
