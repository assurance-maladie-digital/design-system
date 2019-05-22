import { VueConstructor } from 'vue';

import CustomIcon from './CustomIcon.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	CustomIcon
};

/**
 * Globally register all components
*/
export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
