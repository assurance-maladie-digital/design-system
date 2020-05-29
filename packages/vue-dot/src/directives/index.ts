import { debounce } from './debounce';

import { VueConstructor, DirectiveOptions } from 'vue';

interface Directives {
	[directive: string]: DirectiveOptions;
}

const directives: Directives = {
	debounce
};

/** Globally register all directives */
export default (Vue: VueConstructor): void => {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
};
