import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { RatingMixin } from '../RatingMixin';

interface TestComponent extends Vue {
	onDispatchValue(event: number): void;
	blockon(event: number): void;
	getitemLabel(value: number): string;
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
		expect(wrapper.vm.getitemLabel(0)).toBe('');
		expect(wrapper.vm.getitemLabel(-1)).toBe('');

	});

	it('verify itemLabels', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: 'titre de la question',
				length: 3,
				itemLabels: ['label1','label2','label3']
			}
		}) as Wrapper<TestComponent>;
		expect(wrapper.props().label).toBe('titre de la question');
		expect(wrapper.props().length).toBe(3);
		expect(wrapper.props().readonly).toBeFalsy();
		expect(wrapper.vm.getitemLabel(0)).toBe('label1');
		expect(wrapper.vm.getitemLabel(1)).toBe('label2');
		expect(wrapper.vm.getitemLabel(2)).toBe('label3');
		expect(wrapper.vm.getitemLabel(-1)).toBe('');
	});

	it('dipatch event', async() => {
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

	it('block on', async() => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: 'titre de la question',
				length: 10
			}
		}) as Wrapper<TestComponent>;
		expect(wrapper.vm.$data.readonlyInternal).toBeFalsy();
		wrapper.vm.blockon(3);
		expect(wrapper.vm.$data.readonlyInternal).toBeTruthy();
	});
});
