import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

import '@cnamts/vue-dot/dist/vue-dot.css';
import VueDot from '@cnamts/vue-dot';

// Import the theme styles
import '@/theme/theme.scss';

// Register v-mask directive
import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);

Vue.use(VueDot);
