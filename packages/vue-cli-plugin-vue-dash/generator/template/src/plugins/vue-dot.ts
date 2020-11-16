import Vue from 'vue';

// Import VueDot styles
import '@cnamts/vue-dot/dist/vue-dot.css';

// Import dayjs locale
import 'dayjs/locale/fr';

// Register v-facade directive
import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);
