import { VueConstructor } from 'vue';

import { registerComponents, Components } from './helpers/registerComponents';

import { elements } from './elements';
import { patterns } from './patterns';
import { templates } from './templates';

const components: Components[] = [
	elements,
	patterns,
	templates
];

/** Globally register all components (patterns & elements) */
export function registerAllComponents(Vue: VueConstructor): void {
	components.forEach((component) => {
		registerComponents(Vue, component);
	});
}
