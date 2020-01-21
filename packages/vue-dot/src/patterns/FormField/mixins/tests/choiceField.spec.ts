import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Field } from '../../types';

import choiceField from '../choiceField';

const testField = {
	type: 'choice',
	items: [
		{
			text: 'text value1',
			value: 'value1'
		},
		{
			text: 'number 44',
			value: 44
		},
		{
			text: 'text alone1',
			value: 'alone1',
			alone: true
		},
		{
			text: 'text alone2',
			value: 'alone2',
			alone: true
		},
		{
			text: 'null',
			value: null
		}
	]
};

/** Create the wrapper */
function createWrapper(field: Field) {
	const component = Vue.component('test', {
		mixins: [
			choiceField
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			field
		}
	}) as Wrapper<choiceField>;
}

// Tests
describe('choiceField', () => {
	it('test items null', () => {
		const wrapper = createWrapper({
			...testField,
			items: undefined
		});

		wrapper.vm.toggleItem({ text: 'items null', value: null }, false);

	});

	it('test select item with value null', () => {
		const wrapper = createWrapper({
			...testField,
			value: 'value1'
		});

		wrapper.vm.toggleItem(testField.items[4], false);

		// test select button value null
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('change')).toEqual(null);
		});

		wrapper.vm.toggleItem(testField.items[4], true);
	});

	it('test select item with value null in multiple', () => {
		const wrapper = createWrapper({
			...testField,
			value: 'value1',
			metadata: {
				multiple: true
			}
		});

		wrapper.vm.toggleItem(testField.items[4], false);

		// test select button value null
		//TODO: test not called (test timeout)
		// wrapper.vm.$nextTick(() => {
		// 	expect(wrapper.emitted('change')).toBeFalsy();
		// });
	});

	it('emits change event', () => {
		const wrapper = createWrapper(testField);

		wrapper.vm.toggleItem(testField.items[0], false);

		// test select button and string value
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('change')).toEqual('value1');
		});

		wrapper.vm.toggleItem(testField.items[1], false);

		// test change select not multiple and test number value
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('change')).toEqual(44);
		});

	});

	it('emits change multiple', () => {
		// first button multiple is selected by default
		const wrapper = createWrapper({
			...testField,
			value: ['value1'],
			metadata: {
				multiple: true
			}
		});

		// select the second button multiple
		wrapper.vm.toggleItem(testField.items[1], false);

		// test multiple selection emitted
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('change')).toEqual(['value1', 44]);
		});

		// unselect the first selected button in multiple
		wrapper.vm.toggleItem(testField.items[0], true);
	});

	it('emits change multiple alone', () => {
		const wrapper = createWrapper({
			...testField,
			metadata: {
				multiple: true
			}
		});

		// start select multiple button
		wrapper.vm.toggleItem(testField.items[0], false);
		wrapper.vm.toggleItem(testField.items[1], false);

		// select first alone button to unselect the multiple buttons
		wrapper.vm.toggleItem(testField.items[2], false);
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('change')).toEqual('alone1');
		});

		// select another alone button
		wrapper.vm.toggleItem(testField.items[3], false);
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('change')).toEqual('alone2');
		});

		// select the first button multiple to unselect the alone2 button
		wrapper.vm.toggleItem(testField.items[0], false);
		wrapper.vm.$nextTick(() => {
			expect(wrapper.emitted('change')).toEqual('value1');
		});

	});
});
