import { createDecorator } from 'vue-class-component';

type Property = 'asyncData' | 'middleware' | 'head' | 'fetch';

function newPropertyDecorator(property: Property) {
	return createDecorator((options, key) => {
		if (options.methods) {
			options[property] = options.methods[key];
		}
	});
}

export const AsyncData = newPropertyDecorator('asyncData');
export const Middleware = newPropertyDecorator('middleware');
export const Head = newPropertyDecorator('head');
export const Fetch = newPropertyDecorator('fetch');
