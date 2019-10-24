import { VueConstructor, DirectiveFunction } from 'vue';

interface VueInstance extends VueConstructor {
	options: {
		components: VueConstructor[];
		directives: DirectiveFunction[];
	};
}

/** Returns the custom components from the Vue instance */
export function getComponents(Vue: VueConstructor) {
	const instance = Vue as VueInstance;

	const defaults = [
		'KeepAlive',
		'Transition',
		'TransitionGroup'
	];

	const instanceComponents = Object.keys(instance.options.components);

	// Remove default components
	const components = instanceComponents.filter((component) => {
		return !defaults.includes(component);
	});

	return components.sort();
}

/** Returns the directives from the Vue instance */
export function getDirectives(Vue: VueConstructor) {
	const instance = Vue as VueInstance;

	const defaults = [
		'model',
		'show'
	];

	const instanceDirectives = Object.keys(instance.options.directives);

	// Remove default directives
	const directives = instanceDirectives.filter((directives) => {
		return !defaults.includes(directives);
	});

	return directives.sort();
}
