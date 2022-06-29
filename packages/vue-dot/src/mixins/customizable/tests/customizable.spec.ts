import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { customizable, Options } from '../';
import deepMerge from 'deepmerge';

interface TestComponent extends Vue {
	vuetifyOptions: Options;
	options: Options;
}

const DEFAULT_OPTIONS = {
	test: {
		a: 'a'
	}
};

const CUSTOM_OPTIONS = {
	test: {
		b: 'b'
	}
};

/** Create the test component */
function createTestComponent() {
	return Vue.component('TestComponent', {
		mixins: [
			customizable(DEFAULT_OPTIONS)
		],
		template: '<div v-bind="options.test" />'
	});
}

describe('customizable', () => {
	it('merges correctly default and custom options into a computed property', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				vuetifyOptions: CUSTOM_OPTIONS
			}
		}) as Wrapper<TestComponent>;

		const merged = deepMerge<Options>(DEFAULT_OPTIONS, CUSTOM_OPTIONS);

		expect(wrapper.vm.options).toStrictEqual(merged);
	});
});
