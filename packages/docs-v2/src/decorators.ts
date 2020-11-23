import { createDecorator } from 'vue-class-component';

export const AsyncData = createDecorator((options, key) => {
	if (options.methods) {
		options.asyncData = options.methods[key];
	}
});

export const Middleware = createDecorator((options, key) => {
	if (options.methods) {
		options.middleware = options.methods[key];
	}
});
