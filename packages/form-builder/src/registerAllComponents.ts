import { VueConstructor } from 'vue';

import { registerComponents } from '@cnamts/vue-dot/src/helpers/registerComponents';

import { components } from './components';

/**
 * Globally register all components (patterns & elements)
 *
 * @param {VueConstructor} Vue The global Vue instance
 */
export function registerAllComponents(Vue: VueConstructor): void {
	registerComponents(Vue, components);
}
