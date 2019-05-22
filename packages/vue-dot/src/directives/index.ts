import debounce from './debounce';

import { VueConstructor, DirectiveOptions } from 'vue';

interface Directives {
	[key: string]: DirectiveOptions;
}

const directives: Directives = {
	debounce
};

export default (Vue: VueConstructor) => {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
};
