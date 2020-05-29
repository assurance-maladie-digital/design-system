import { VueConstructor, ComponentOptions } from 'vue';

export interface VueInstance extends VueConstructor {
	options: {
		[key: string]: ComponentOptions<Vue>;
	};
}
