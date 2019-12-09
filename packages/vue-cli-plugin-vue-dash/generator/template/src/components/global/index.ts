import { VueConstructor } from 'vue';

interface Components {
	[name: string]: VueConstructor;
}

/** Register components in the global Vue instance */
function register(Vue: VueConstructor, componentList: Components) {
	Object.keys(componentList).forEach((name: string) => {
		Vue.component(name, componentList[name]);
	});
}

// Custom block
import Vue from 'vue';

import ErrorPage from './ErrorPage';

const components: Components = {
	ErrorPage
};

register(Vue, components);
