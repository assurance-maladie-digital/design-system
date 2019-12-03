import Vue from 'vue';
import registerAllComponents from '../../src/registerAllComponents';

import { getComponents } from './utils';

describe('registerAllComponents', () => {
	it('should register all components', () => {
		registerAllComponents(Vue);

		expect(getComponents(Vue)).toMatchSnapshot();
	});
});
