import Vue, { VueConstructor } from 'vue';

import DataTableEx from './DataTableEx.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	DataTableEx
};

/** Globally register all components */
Object.keys(components).forEach((name: string) => {
	Vue.component(name, components[name]);
});
