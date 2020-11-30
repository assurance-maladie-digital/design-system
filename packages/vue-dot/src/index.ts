import { VueConstructor } from 'vue';

import { directives } from './directives';
import { registerDirectives } from './helpers/registerDirectives';

import { registerAllComponents } from './registerAllComponents';

// Import styles
import './styles/index.scss';

import { VueDotPlugin } from '../types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options) {
		registerDirectives(Vue, directives);
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
