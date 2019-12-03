import { VueConstructor } from 'vue';

import registerComponents, { Components } from './helpers/registerComponents';

import { default as elements } from './elements';
import { default as patterns } from './patterns';

const components: Components[] = [
	elements,
	patterns
];

/**
 * Globally register all components (patterns & elements)
 *
 * @param {VueConstructor} Vue The global Vue instance
 */
function registerAllComponents(Vue: VueConstructor) {
	components.forEach((component) => {
		registerComponents(Vue, component);
	});
}

export default registerAllComponents;
