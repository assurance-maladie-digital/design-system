import { VueConstructor } from 'vue';

import { directives } from './directives';
import { registerDirectives } from './helpers/registerDirectives';

import { registerAllComponents } from './registerAllComponents';

import { VueDotPlugin } from '../types';

import './styles/index.scss';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options) {
		registerDirectives(Vue, directives);
		registerAllComponents(Vue);

		if (options) {
			Vue.prototype.$vd = options;
		}
	}
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
