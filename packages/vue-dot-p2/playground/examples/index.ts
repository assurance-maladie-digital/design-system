import Vue, { VueConstructor } from 'vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {};

/** Globally register all components */
Object.keys(components).forEach((name: string) => {
	Vue.component(name, components[name]);
});
