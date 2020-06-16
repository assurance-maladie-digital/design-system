import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

import '@cnamts/vue-dot/dist/vue-dot.css';
import VueDot from '@cnamts/vue-dot';

// Import the theme styles
import '@/theme/styles/index.scss';

// Register v-facade directive
import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

Vue.use(VueDot);
