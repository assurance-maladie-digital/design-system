import Vue from 'vue';
import registerComponents from '../../src/registerComponents';

import { getComponents } from './utils';

describe('registerComponents', () => {
	it('should register all components', () => {
		registerComponents(Vue);

		expect(getComponents(Vue)).toMatchSnapshot();
	});
});
