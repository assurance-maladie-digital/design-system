import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

// Import VueDot from src
import VueDot from '../../src/';

// Import the theme
import { icons } from '../theme/icons';

// Import the theme styles
import '../theme/theme.scss';

import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

export const LOCAL_STORAGE_CONTROL = {
	version: 1
};

Vue.use(VueDot, {
	theme: {
		icons
	},
	localStorageControl: LOCAL_STORAGE_CONTROL
});
