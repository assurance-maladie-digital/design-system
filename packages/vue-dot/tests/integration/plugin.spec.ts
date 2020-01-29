import Vue from 'vue';

import VueDot from '../../src';

import { getComponents, getDirectives } from './utils';

describe('plugin', () => {
	it('should register components & directives', () => {
		Vue.use(VueDot);

		const parts = {
			components: getComponents(Vue),
			directives: getDirectives(Vue)
		};

		expect(parts).toMatchSnapshot();
	});
});
