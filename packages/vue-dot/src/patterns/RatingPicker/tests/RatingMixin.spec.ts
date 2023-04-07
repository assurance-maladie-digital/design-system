import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { RatingMixin, RatingMixinInterface } from '../RatingMixin';

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
				label: 'Pouvez-vous nous en dire plus ?'
			}
		}) as Wrapper<RatingMixinInterface>;

		expect(wrapper.props().label).toBe('Pouvez-vous nous en dire plus ?');
		expect(wrapper.props().length).toBe(5);
		expect(wrapper.props().readonly).toBeFalsy();

		expect(wrapper.vm.getItemLabel(0)).toBe('');
		expect(wrapper.vm.getItemLabel(-1)).toBe('');
	});

	it('verify itemLabels', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: 'Pouvez-vous nous en dire plus ?',
				length: 3,
				itemLabels: ['label1','label2','label3']
			}
		}) as Wrapper<RatingMixinInterface>;

		expect(wrapper.props().label).toBe('Pouvez-vous nous en dire plus ?');
		expect(wrapper.props().length).toBe(3);
		expect(wrapper.props().readonly).toBeFalsy();

		expect(wrapper.vm.getItemLabel(0)).toBe('label1');
		expect(wrapper.vm.getItemLabel(1)).toBe('label2');
		expect(wrapper.vm.getItemLabel(2)).toBe('label3');
		expect(wrapper.vm.getItemLabel(-1)).toBe('');
	});

	it('dispatch event', async() => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: 'Pouvez-vous nous en dire plus ?',
				length: 10
			}
		}) as Wrapper<RatingMixinInterface>;

		wrapper.vm.onDispatchValue(3);

		await wrapper.vm.$nextTick(); // Wait until $emits have been handled

		expect(wrapper.emitted('input')).toBeTruthy();
		expect(wrapper.emitted('input')?.pop()).toEqual([3]);
	});

	it('block on', async() => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: 'Pouvez-vous nous en dire plus ?',
				length: 10
			}
		}) as Wrapper<RatingMixinInterface>;

		expect(wrapper.vm.$data.readonlyInternal).toBeFalsy();

		wrapper.vm.lockField(3);

		expect(wrapper.vm.$data.readonlyInternal).toBeTruthy();
	});
});
