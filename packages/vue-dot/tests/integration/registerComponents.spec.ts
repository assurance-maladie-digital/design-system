import Vue from 'vue';
import registerComponents from '../../src/registerComponents';

describe('registerComponents', () => {
	it('should register all components', () => {
		registerComponents(Vue);

		const registeredComponents = Object.keys((Vue as any).options.components).sort();

		expect(registeredComponents).toMatchSnapshot();
	});
});
