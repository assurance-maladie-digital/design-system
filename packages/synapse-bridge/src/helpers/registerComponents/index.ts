import { IndexedObject } from '../../types';
import { VueConstructor } from 'vue';

export type Components = IndexedObject<VueConstructor>;

/** Register components in the global Vue instance */
export function registerComponents(Vue: VueConstructor, components: Components): void {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
}
