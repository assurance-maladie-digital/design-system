import { VueConstructor, DirectiveOptions } from 'vue';

export interface Directives {
	[name: string]: DirectiveOptions;
}

/** Register directives in the global Vue instance */
export function registerDirectives(Vue: VueConstructor, directives: Directives): void {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
}
