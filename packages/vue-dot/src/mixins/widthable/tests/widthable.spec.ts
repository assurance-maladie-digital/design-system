import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Widthable } from '../';

interface TestComponent extends Vue {
	widthStyles: Record<string, string>;
}

/** Create the test component */
function createTestComponent() {
	return Vue.component('Test', {
		mixins: [
			Widthable
		],
		template: '<div />'
	});
}

// Tests
describe('Widthable', () => {
	it('computes the default styles', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});

	it('computes the styles when width is null', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent, {
			propsData: {
				width: null
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});

	it('computes the styles when min-width is defined', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent, {
			propsData: {
				minWidth: '512px'
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});

	it('computes the styles when max-width is defined', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent, {
			propsData: {
				maxWidth: '512px'
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});
});
