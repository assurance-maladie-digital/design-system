import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

// Import VueDot from src
import VueDotP2 from '../../src/';
import VueDot from '@cnamts/vue-dot';

import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);

export const LOCAL_STORAGE_CONTROL = {
	version: 1
};

Vue.use(VueDot, {
	localStorageControl: LOCAL_STORAGE_CONTROL
});

Vue.use(VueDotP2);
