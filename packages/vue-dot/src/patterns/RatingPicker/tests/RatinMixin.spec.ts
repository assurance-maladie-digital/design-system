import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import  { RatingMixin }  from '../RatingMixin';

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

	it('verify props', () => {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent, {
			propsData: {
				label: 'titre de la question',
				length: undefined
			}
		}) as Wrapper<TestComponent>;
		expect(wrapper.props().label).toBe('titre de la question');
		expect(wrapper.props().length).toBe(5);
		expect(wrapper.props().readonly).toBeFalsy();
	});

	it('dipatch event', async() =>  {
		const testComponent = createTestComponent();
		const wrapper = mount(testComponent, {
			propsData: {
				label: 'titre de la question',
				length: 10
			}
		}) as Wrapper<TestComponent>;
		wrapper.vm.onDispatchValue(3);
		await wrapper.vm.$nextTick(); // Wait until $emits have been handled
		expect(wrapper.emitted('input')).toBeTruthy();
		expect(wrapper.emitted('input')?.pop()).toEqual([3]);
	});
});
