import directives from './directives';

import registerAllComponents from './registerAllComponents';

// Import global styles
import './styles/global.scss';

import { VueConstructor } from 'vue';
import { VueDotPlugin } from '../types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options) {
		directives(Vue);
		registerAllComponents(Vue);

		// Extend the Vue instance with $vd
		if (options) {
			Vue.prototype.$vd = options;
		}
	}
};

// Ignore the next block in unit test
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
