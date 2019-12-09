import { VueConstructor } from 'vue';

export interface Components {
	[name: string]: VueConstructor;
}

/**
 * Register components in the global Vue instance
 *
 * @param {VueConstructor} Vue The global Vue instance
 * @param {object} componentList The list of components to register
 */
export default function registerComponents(Vue: VueConstructor, componentList: Components) {
	Object.keys(componentList).forEach((name: string) => {
		Vue.component(name, componentList[name]);
	});
}
