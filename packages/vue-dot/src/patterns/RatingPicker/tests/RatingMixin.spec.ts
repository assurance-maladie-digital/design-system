import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { RatingMixin } from '../RatingMixin';

interface TestComponent extends Vue {
	onDispatchValue(event: number): void;
}

/** Create the test component */
function createTestComponent() {
	return Vue.component('TestComponent', {
		mixins: [
			RatingMixin
		],
		template: '<div />'
	});
}

describe('RatingMixin', () => {
	const label = 'Pourriez-vous donner une note ?';

	it('sets initial values for props', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.props().label).toBe(label);
		expect(wrapper.props().length).toBe(5);
		expect(wrapper.props().readonly).toBeFalsy();
	});

	it('dispatch input event', async() => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label,
				length: 10
			}
		}) as Wrapper<TestComponent>;

		wrapper.vm.onDispatchValue(3);

		await wrapper.vm.$nextTick(); // Wait until $emits have been handled

		expect(wrapper.emitted('input')).toBeTruthy();
		expect(wrapper.emitted('input')?.pop()).toEqual([3]);
	});
});
