import { createDecorator } from 'vue-class-component';
import type { MetaInfo } from 'vue-meta';

export { MetaInfo };

/** Vue Meta decorator */
export const Meta = createDecorator((options, key) => {
	if (options.methods) {
		options.metaInfo = options.methods[key];
	}
});
