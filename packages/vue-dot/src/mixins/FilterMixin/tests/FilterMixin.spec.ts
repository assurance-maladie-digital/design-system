import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FilterMixin } from '..';

interface TestComponent extends Vue {
	FilterMixin: Record<string, string>;
}

/** Create the test component */
function createTestComponent() {
	return Vue.component('TestComponent', {
		mixins: [
			FilterMixin
		],
		template: '<div />'
	});
}

describe('FilterMixin', () => {
	it('test filter mixin', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.FilterMixin).toMatchSnapshot();
	});
});
