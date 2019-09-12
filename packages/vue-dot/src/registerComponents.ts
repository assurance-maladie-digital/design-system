import { VueConstructor } from 'vue';

import { default as elements } from './elements';
import { default as patterns } from './patterns';

interface Components {
	[name: string]: VueConstructor;
}

/** Register components in the global Vue instance */
function register(Vue: VueConstructor, componentList: Components) {
	Object.keys(componentList).forEach((name: string) => {
		Vue.component(name, componentList[name]);
	});
}

const components = [
	elements,
	patterns
];

/** Globally register all components */
function registerComponents(Vue: VueConstructor) {
	components.forEach((component) => {
		register(Vue, component);
	});
}

export default registerComponents;
