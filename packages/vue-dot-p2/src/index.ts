import { registerAllComponents } from './registerAllComponents';

// Import plugins
import './plugins/vue-dot';

// Import global styles
import './styles/global.scss';
import './styles/reset.scss';
import './styles/utility.scss';
import './styles/vuetify.scss';

import { VueConstructor } from 'vue';
import { VueDotP2Plugin } from '../types';

const VueDotP2: VueDotP2Plugin = {
	install(Vue: VueConstructor, options) {
		registerAllComponents(Vue);
	}
};

// Ignore the next block in unit test
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDotP2);
}

export default VueDotP2;
