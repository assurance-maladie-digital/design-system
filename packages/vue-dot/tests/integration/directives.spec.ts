import Vue from 'vue';

import { directives } from '../../src/directives';
import { registerDirectives } from '../../src/helpers/registerDirectives';

import { getDirectives } from './utils';

describe('directives', () => {
	it('should register all directives', () => {
		registerDirectives(Vue, directives);

		expect(getDirectives(Vue)).toMatchSnapshot();
	});
});
