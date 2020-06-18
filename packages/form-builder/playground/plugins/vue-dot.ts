import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

// Import VueDot
import VueDot from '@cnamts/vue-dot/';

// Import the theme styles
import '../theme/theme.scss';

import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

export const LOCAL_STORAGE_CONTROL = {
	version: 1
};

Vue.use(VueDot, {
	localStorageControl: LOCAL_STORAGE_CONTROL
});
