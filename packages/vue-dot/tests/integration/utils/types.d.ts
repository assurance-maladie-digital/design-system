import { VueConstructor, ComponentOptions, DirectiveOptions } from 'vue';

export interface VueInstance extends VueConstructor {
	options: {
		[key: string]: ComponentOptions<Vue> | DirectiveOptions;
	};
}
