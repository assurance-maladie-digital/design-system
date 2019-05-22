import components from './components';
import directives from './directives';

import { VueConstructor } from 'vue';
import VueDotPlugin from '../types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options) {
		components(Vue);
		directives(Vue);

		const theme = options ? options.theme : undefined;

		// Extend the Vue instance with the theme as $theme
		if (theme) {
			Vue.prototype.$theme = theme;
		}

	}
};

// Ignore the next block in unit test
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
