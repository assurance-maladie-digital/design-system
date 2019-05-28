import debounce from './debounce';
import mask from './mask';

import { VueConstructor, DirectiveOptions } from 'vue';

interface Directives {
	[key: string]: DirectiveOptions;
}

const directives: Directives = {
	debounce,
	mask
};

/**
 * Globally register all directives
*/
export default (Vue: VueConstructor) => {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
};
