import directives from './directives';

import registerComponents from './registerComponents';

// Import global styles
import './global.scss';

import { VueConstructor } from 'vue';
import { VueDotPlugin } from '../types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options) {
		directives(Vue);
		registerComponents(Vue);

		const theme = options ? options.theme : undefined;

		// Extend the Vue instance with the theme as $vd
		if (theme) {
			Vue.prototype.$vd = theme;
		}

	}
};

// Ignore the next block in unit test
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
