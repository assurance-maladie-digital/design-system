import { VueConstructor } from 'vue';

import { registerComponents, Components } from './helpers/registerComponents';

import { elements } from './elements';
import { patterns } from './patterns';

const components: Components[] = [
	elements,
	patterns
];

/**
 * Globally register all components (patterns & elements)
 *
 * @param {VueConstructor} Vue The global Vue instance
 */
export function registerAllComponents(Vue: VueConstructor): void {
	components.forEach((component) => {
		registerComponents(Vue, component);
	});
}
