import Vue from 'vue';

import FormBuilder from '../../src';

import { getComponents } from '@cnamts/vue-dot/tests/unit/integration/utils';

describe('plugin', () => {
	it('should register components', () => {
		Vue.use(FormBuilder);

		expect(getComponents(Vue)).toMatchSnapshot();
	});
});
