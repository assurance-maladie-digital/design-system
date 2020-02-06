import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Field } from '../../types';

import { ChoiceField } from '../choiceField';

const testField = {
	type: 'choice',
	items: [
		{
			text: 'Test 1',
			value: 'value1'
		},
		{
			text: 'Test 2',
			value: 42
		},
		{
			text: 'Test alone 1',
			value: 'alone1',
			alone: true
		},
		{
			text: 'Test alone 2',
			value: 'alone2',
			alone: true
		},
		{
			text: 'Test null value',
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
	it('selects a not null item value', async() => {
		const wrapper = createWrapper(testField);

		wrapper.vm.toggleItem(testField.items[0], false);

		await Vue.nextTick();

		const changeEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changeEvent.value).toEqual(testField.items[0].value);
	});

	it('selects a null item value', async() => {
		const wrapper = createWrapper(testField);

		wrapper.vm.toggleItem(testField.items[4], false);

		await Vue.nextTick();

		const changeEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changeEvent.value).toEqual(null);
	});

	it('unselects an item', async() => {
		const wrapper = createWrapper({
			...testField,
			value: 'value1'
		});

		wrapper.vm.toggleItem(testField.items[0], true);

		await Vue.nextTick();

		const changeEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changeEvent.value).toEqual(null);
	});

	it('selects multiple items in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			metadata: {
				multiple: true
			}
		});

		wrapper.vm.toggleItem(testField.items[0], false);
		wrapper.vm.toggleItem(testField.items[1], false);

		await Vue.nextTick();

		const changeEvent = wrapper.emitted('change')[1][0] as Field;

		// Both buttons should be selected
		expect(changeEvent.value).toEqual([
			testField.items[0].value,
			testField.items[1].value
		]);
	});

	it('unselects one "multiple" item in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [
				testField.items[0].value,
				testField.items[1].value
			],
			metadata: {
				multiple: true
			}
		});

		// Unselect the first button
		wrapper.vm.toggleItem(testField.items[0], true);

		await Vue.nextTick();

		const changeEvent = wrapper.emitted('change')[0][0] as Field;

		// Second button should stay selected
		expect(changeEvent.value).toEqual([testField.items[1].value]);
	});

	it('changes selected "alone" item in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [
				testField.items[3].value
			],
			metadata: {
				multiple: true
			}
		});

		// Select the first button
		wrapper.vm.toggleItem(testField.items[0], false);

		await Vue.nextTick();

		const changeEvent = wrapper.emitted('change')[0][0] as Field;

		// The default alone selected shouldn't be selected
		expect(changeEvent.value).toEqual([testField.items[0].value]);
	});

	it('selects an "alone" item from a multiple selection', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [
				testField.items[0].value,
				testField.items[1].value
			],
			metadata: {
				multiple: true
			}
		});

		wrapper.vm.toggleItem(testField.items[2], false);

		await Vue.nextTick();

		const changeEvent = wrapper.emitted('change')[0][0] as Field;

		expect(changeEvent.value).toEqual([testField.items[2].value]);
	});

	it('doesn\'t selects a field with undefined items', async() => {
		const wrapper = createWrapper({
			...testField,
			items: undefined
		});

		wrapper.vm.toggleItem({
			text: 'No items',
			value: null
		}, false);

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('doesn\'t selects an item with null value in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [
				testField.items[0].value
			],
			metadata: {
				multiple: true
			}
		});

		// Select a button with a null value
		wrapper.vm.toggleItem(testField.items[4], false);

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeFalsy();
	});
});
