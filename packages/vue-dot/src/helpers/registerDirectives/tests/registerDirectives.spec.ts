import Vue, { DirectiveOptions } from 'vue';

import { registerDirectives, Directives } from '../';

import { getDirectives } from '@/tests/unit/integration/utils';

/** Create basic test component */
function createTestDirective() {
	const directive: DirectiveOptions = {};

	return directive;
}

const directives: Directives = {
	TestA: createTestDirective(),
	TestB: createTestDirective()
};

describe('registerDirectives', () => {
	it('should register the directives', () => {
		registerDirectives(Vue, directives);

		expect(getDirectives(Vue)).toMatchSnapshot();
	});
});
