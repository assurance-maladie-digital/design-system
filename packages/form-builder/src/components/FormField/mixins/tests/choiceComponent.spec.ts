import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { ChoiceComponent } from '../choiceComponent';
import { ChoiceValue, FieldOptions, FieldItem } from '../../types';

interface IChoiceComponent {
	value?: ChoiceValue;
	options?: FieldOptions;
	multiple?: boolean;
	items: FieldItem[];
}

const testField: IChoiceComponent = {
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
function createWrapper(field: IChoiceComponent) {
	const component = Vue.component('test', {
		mixins: [
			ChoiceComponent
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			...field
		}
	}) as Wrapper<ChoiceComponent>;
}

describe('choiceComponent', () => {
	it('selects a not null item value', async() => {
		const wrapper = createWrapper(testField);

		wrapper.vm.toggleItem(testField.items[0]);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		expect(event[0][0]).toEqual(testField.items[0].value);
	});

	it('selects a null item value', async() => {
		const wrapper = createWrapper(testField);

		wrapper.vm.toggleItem(testField.items[4]);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		expect(event[0][0]).toEqual(null);
	});

	it('unselects an item', async() => {
		const wrapper = createWrapper({
			...testField,
			value: 'value1'
		});

		wrapper.vm.toggleItem(testField.items[0]);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		expect(event[0][0]).toEqual(null);
	});

	it('transforms the initial value into an array in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: testField.items[0].value,
			multiple: true
		});

		expect(wrapper.vm.choiceValue).toEqual([testField.items[0].value]);
	});

	it('selects multiple items in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			multiple: true
		});

		wrapper.vm.toggleItem(testField.items[0]);
		wrapper.vm.toggleItem(testField.items[1]);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		// Both buttons should be selected
		expect(event[1][0]).toEqual([
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
			multiple: true
		});

		// Unselect the first button
		wrapper.vm.toggleItem(testField.items[0]);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		// Second button should stay selected
		expect(event[0][0]).toEqual([testField.items[1].value]);
	});

	it('changes selected "alone" item in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [
				testField.items[3].value
			],
			multiple: true
		});

		// Select the first button
		wrapper.vm.toggleItem(testField.items[0]);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		// The default alone selected shouldn't be selected
		expect(event[0][0]).toEqual([testField.items[0].value]);
	});

	it('selects an "alone" item from a multiple selection', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [
				testField.items[0].value,
				testField.items[1].value
			],
			multiple: true
		});

		wrapper.vm.toggleItem(testField.items[2]);

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted('change') || [];

		expect(event[0][0]).toEqual([testField.items[2].value]);
	});

	it('doesn\'t selects an item with null value in multiple mode', async() => {
		const wrapper = createWrapper({
			...testField,
			value: [
				testField.items[0].value
			],
			multiple: true
		});

		// Select a button with a null value
		wrapper.vm.toggleItem(testField.items[4]);

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('change')).toBeFalsy();
	});
});
