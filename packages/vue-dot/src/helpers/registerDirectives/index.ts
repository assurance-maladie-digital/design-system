import { VueConstructor, DirectiveOptions } from 'vue';

export interface Directives {
	[name: string]: DirectiveOptions;
}

/**
 * Register directives in the global Vue instance
 *
 * @param {VueConstructor} Vue The global Vue instance
 * @param {object} directives The list of directives to register
 */
export function registerDirectives(Vue: VueConstructor, directives: Directives): void {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
}
