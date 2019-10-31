import Vue from 'vue';
import registerDirectives from '../../src/directives';

import { getDirectives } from './utils';

describe('directives', () => {
	it('should register all directives', () => {
		registerDirectives(Vue);

		expect(getDirectives(Vue)).toMatchSnapshot();
	});
});
