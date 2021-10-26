import Vue from 'vue';

import VueDot from '@/index';

import { getComponents, getDirectives } from './utils';

describe('lib', () => {
	it('should register components & directives when passing a theme', () => {
		const THEME = {
			theme: {
				icons: {
					test: 'icon-src'
				}
			}
		};

		Vue.use(VueDot, THEME);

		const parts = {
			components: getComponents(Vue),
			directives: getDirectives(Vue)
		};

		expect(parts).toMatchSnapshot();
	});
});
