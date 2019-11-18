import { createDecorator } from 'vue-class-component';

/** Vue Meta decorator */
export const Meta = createDecorator((options, key) => {
	if (options.methods) {
		options.metaInfo = options.methods[key];
	}
});
