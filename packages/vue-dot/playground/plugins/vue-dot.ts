import Vue from 'vue';

// Import dayjs locale
import 'dayjs/locale/fr';

// Import VueDot from src
import VueDot from '../../src/';

// Import the theme
import theme from '../theme/theme.json';

// Import the theme styles
import '../theme/theme.scss';

Vue.use(VueDot, {
	theme
});
