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
	const label = 'Pouvez-vous nous en dire plus ?';
	const itemLabels = [
		'non je dis rien',
		'faut voir',
		'je dirais tout ce que vous voulez'
	];

	it('verifies props', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label
			}
		}) as Wrapper<RatingMixinInterface>;

		expect(wrapper.props().label).toBe(label);
		expect(wrapper.props().readonly).toBeFalsy();
	});

	it('emits input event', async() => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label,
				length: 10
			}
		}) as Wrapper<RatingMixinInterface>;

		wrapper.vm.emitInputEvent(3);

		await wrapper.vm.$nextTick(); // Wait until $emits have been handled

		expect(wrapper.emitted('input')).toBeTruthy();
		expect(wrapper.emitted('input')?.pop()).toEqual([3]);
	});
});
