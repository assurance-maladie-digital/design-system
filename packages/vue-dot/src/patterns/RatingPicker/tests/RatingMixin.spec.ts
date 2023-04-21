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
	const labelQuestion = 'Pouvez-vous nous en dire plus ?';
	const itemLabels = [
		'non je dis rien',
		'faut voir',
		'je dirais tout ce que vous voulez'
	];

	it('verifies props', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: labelQuestion
			}
		}) as Wrapper<RatingMixinInterface>;

		expect(wrapper.props().label).toBe(labelQuestion);
		expect(wrapper.props().length).toBe(5);
		expect(wrapper.props().readonly).toBeFalsy();

		expect(wrapper.vm.getItemLabel(0)).toBe('');
		expect(wrapper.vm.getItemLabel(-1)).toBe('');
	});

	it('verifies item labels', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: labelQuestion,
				length: 3,
				itemLabels
			}
		}) as Wrapper<RatingMixinInterface>;

		expect(wrapper.props().label).toBe(labelQuestion);
		expect(wrapper.props().length).toBe(3);
		expect(wrapper.props().readonly).toBeFalsy();

		expect(wrapper.vm.getItemLabel(0)).toBe(itemLabels[0]);
		expect(wrapper.vm.getItemLabel(1)).toBe(itemLabels[1]);
		expect(wrapper.vm.getItemLabel(2)).toBe(itemLabels[2]);
		expect(wrapper.vm.getItemLabel(-1)).toBe('');
	});

	it('dispatch input event', async() => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: labelQuestion,
				length: 10
			}
		}) as Wrapper<RatingMixinInterface>;

		wrapper.vm.onDispatchValue(3);

		await wrapper.vm.$nextTick(); // Wait until $emits have been handled

		expect(wrapper.emitted('input')).toBeTruthy();
		expect(wrapper.emitted('input')?.pop()).toEqual([3]);
	});

	it('locks field', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label: labelQuestion,
				length: 10
			}
		}) as Wrapper<RatingMixinInterface>;

		expect(wrapper.vm.$data.readonlyInternal).toBeFalsy();

		wrapper.vm.lockField(3);

		expect(wrapper.vm.$data.readonlyInternal).toBeTruthy();
	});
});
