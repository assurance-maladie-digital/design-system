import components from './components';
import directives from './directives';

import { VueConstructor } from 'vue';
import VueDotPlugin from './types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor) {
		components(Vue);
		directives(Vue);
	}
};

// Ignore the next block in unit test
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
