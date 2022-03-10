import { VueConstructor } from 'vue';

import { registerComponents } from '@cnamts/vue-dot/src/helpers/registerComponents';

import { components } from './components';

/** Globally register all components */
export function registerAllComponents(Vue: VueConstructor): void {
	registerComponents(Vue, components);
}
