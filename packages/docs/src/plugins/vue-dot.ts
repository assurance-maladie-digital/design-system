import Vue from 'vue';

// Import dayjs locale
// import 'dayjs/locale/fr';

// Import VueDot from src
import VueDot from '@cnamts/vue-dot/src/index';

// Import the theme
import { icons } from '~/assets/icons';

import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

Vue.use(VueDot, {
	theme: {
		icons
	}
});
