import Vue from 'vue';

import registerComponents, { Components } from '../';

import { getComponents } from '@/tests/integration/utils';

/** Create basic test component */
function createTestComponent(name: string) {
	return Vue.component(name, {
		template: '<div />'
	});
}

const components: Components = {
	TestA: createTestComponent('TestA'),
	TestB: createTestComponent('TestB')
};

describe('registerComponents', () => {
	it('should register the components', () => {
		registerComponents(Vue, components);

		expect(getComponents(Vue)).toMatchSnapshot();
	});
});
