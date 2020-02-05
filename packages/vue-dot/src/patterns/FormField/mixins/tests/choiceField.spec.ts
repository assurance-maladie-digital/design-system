import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Field } from '../../types';

import { ChoiceField } from '../choiceField';

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
			ChoiceField
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			field
		}
	}) as Wrapper<ChoiceField>;
}

describe('choiceField', () => {
	it('select item value not null', async() => {
		const wrapper = createWrapper(testField);

		// Test select button 0
		wrapper.vm.toggleItem(testField.items[0], false);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changedEvent.value).toEqual(testField.items[0].value);
	});

	it('select item value null', async() => {
		const wrapper = createWrapper(testField);

		// Test select value null
		wrapper.vm.toggleItem(testField.items[4], false);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changedEvent.value).toEqual(null);
	});

	it('unselect an item', async() => {
		const wrapper = createWrapper({
			...testField,
			value: 'value1'
		});
		// Test unselect button 0
		wrapper.vm.toggleItem(testField.items[0], true);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changedEvent.value).toEqual(null);
	});

	it('select multiple items in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			metadata: {
				multiple: true
			}
		});

		wrapper.vm.toggleItem(testField.items[0], false);
		wrapper.vm.toggleItem(testField.items[1], false);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		// Both buttons will be selected
		expect(changedEvent.value).toEqual(['value1', 44]);
	});

	it('unselect one multiple items in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [testField.items[0].value, testField.items[1].value],
			metadata: {
				multiple: true
			}
		});

		// Unselect the first button multiple
		wrapper.vm.toggleItem(testField.items[0], true);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		// Second button will stay selected
		expect(changedEvent.value).toEqual([testField.items[1].value]);
	});

	it('select item not alone when one item alone is selected in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [testField.items[3].value],
			metadata: {
				multiple: true
			}
		});

		// Select the first button multiple
		wrapper.vm.toggleItem(testField.items[0], false);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		// The default alone selected will be not selected
		expect(changedEvent.value).toEqual([testField.items[0].value]);
	});

	it('select an alone item from a multiple selection', async() => {
		const wrapper = createWrapper({
			...testField,
			value: ['value1', 44],
			metadata: {
				multiple: true
			}
		});

		wrapper.vm.toggleItem(testField.items[2], false);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changedEvent.value).toEqual([testField.items[2].value]);
	});

	it('select an other alone item from another alone selected', async() => {
		// First button multiple is selected by default
		const wrapper = createWrapper({
			...testField,
			value: ['alone1'],
			metadata: {
				multiple: true
			}
		});

		// Select the second alone button multiple
		wrapper.vm.toggleItem(testField.items[3], false);

		await Vue.nextTick();

		const changedEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changedEvent.value).toEqual([testField.items[3].value]);
	});

	it('test field items undefined', async() => {
		const wrapper = createWrapper({
			...testField,
			items: undefined
		});

		wrapper.vm.toggleItem({ text: 'items null', value: null }, false);

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('select item with value null in multiple mode not possible', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [testField.items[0].value],
			metadata: {
				multiple: true
			}
		});

		// Select a button with a value null
		wrapper.vm.toggleItem(testField.items[4], false);

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeFalsy();
	});
});
