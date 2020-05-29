import Vue from 'vue';

import FormBuilder from '../../src';

import { getComponents } from '@cnamts/vue-dot/tests/integration/utils';

describe('plugin', () => {
	it('should register components', () => {
		Vue.use(FormBuilder);

		expect(getComponents(Vue)).toMatchSnapshot();
	});
});
