import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

import VueDot from '@cnamts/vue-dot';

// Import the theme styles
import '../styles/global.scss';
import '../styles/reset.scss';
import '../styles/utility.scss';
import '../styles/vuetify.scss';
import icons from '@/theme/icons';

Vue.use(VueDot, {
	theme: {
		icons
	}
});
