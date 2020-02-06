import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FormBuilderCore } from '../formBuilderCore';

import { Field } from '../../../FormField/types';

import {
	Form,
	Layout,
	ComputedLayout,
	ComputedField,
	ComputedLayoutItem
} from '../../types';

import { Layouts } from 'src/patterns/FormLayout/layoutsEnum';

const testField: Field = {
	type: 'text',
	value: null,
	metadata: {
		label: 'Test'
	}
};

const computedField: ComputedField = {
	...testField,
	name: 'field1'
};

const computedDynamicField: ComputedField = {
	...testField,
	name: 'field1',
	dynamic: true
};

const testForm: Form = {
	field1: testField
};

/** Create the wrapper */
function createWrapper(form: Form, layout?: Layout, defaultLayout?: string) {
	const component = Vue.component('test', {
		mixins: [
			FormBuilderCore
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			form,
			defaultLayout,
			layout
		}
	}) as Wrapper<FormBuilderCore>;
}

// Tests
describe('formBuilderCore', () => {
	it('computes the layout when prop not provided', () => {
		const wrapper = createWrapper(testForm);

		expect(wrapper.vm.computedLayout).not.toEqual({});
	});

	it('computes the fields', () => {
		const wrapper = createWrapper(testForm);

		const fields = ['field1'];

		const layoutItem = {
			type: Layouts.Medium,
			fields
		};

		const expectedFields: ComputedLayoutItem = {
			type: Layouts.Medium,
			fields: [computedField]
		};

		// Compute the first field
		const computedFields = wrapper.vm.computeFields(layoutItem, fields);

		expect(computedFields).toEqual(expectedFields);
	});

	it('doesn\'t fail to compute the fields if there are none', () => {
		const wrapper = createWrapper(testForm);

		const fields: string[] = [];

		const layoutItem = {
			type: Layouts.Medium,
			fields
		};

		// Try to compute the first field
		const computedFields = wrapper.vm.computeFields(layoutItem, fields);

		expect(computedFields).toEqual(null);
	});

	it('doesn\'t fail to compute the layout if there are no fields', () => {
		const layout: Layout = [
			{
				type: Layouts.Medium,
				fields: []
			}
		];

		const wrapper = createWrapper(testForm, layout);

		expect(wrapper.vm.computeLayout()).toEqual(null);
	});

	it('computes the layout', () => {
		const wrapper = createWrapper(testForm);

		const expectedLayout: ComputedLayout = [
			{
				type: Layouts.Medium,
				fields: [computedField]
			}
		];

		expect(wrapper.vm.computeLayout()).toEqual(expectedLayout);
	});

	it('computes the layout with a predefined layout', () => {
		const layout = [
			{
				type: Layouts.Question,
				fields: ['field1']
			}
		];

		const wrapper = createWrapper(testForm, layout);

		const expectedLayout: ComputedLayout = [
			{
				type: Layouts.Question,
				fields: [computedField]
			}
		];

		expect(wrapper.vm.computeLayout()).toEqual(expectedLayout);
	});

	it('computes the layout when it\'s updated', () => {
		const layout = [
			{
				type: Layouts.Question,
				fields: []
			}
		];

		const wrapper = createWrapper(testForm, layout);

		wrapper.setProps({
			layout: [
				{
					type: Layouts.Question,
					fields: ['field1']
				}
			]
		});

		const expectedLayout: ComputedLayout = [
			{
				type: Layouts.Question,
				fields: [computedField]
			}
		];

		expect(wrapper.vm.computeLayout()).toEqual(expectedLayout);
	});

	it('doesn\'t fail to execute computeLayout when the layout doesn\'t exists', () => {
		const wrapper = createWrapper(testForm, undefined, 'unknown');

		expect(wrapper.vm.computeLayout()).toBe(null);
	});

	it('generates a default layout', () => {
		const testFormMultiple: Form = {
			field1: testField,
			field2: testField
		};

		const wrapper = createWrapper(testFormMultiple, undefined, Layouts.Medium_Medium);

		const expectedLayout: Layout = [
			{
				type: Layouts.Medium_Medium,
				fields: [
					'field1',
					'field2'
				]
			}
		];

		expect(wrapper.vm.getDefaultLayout()).toEqual(expectedLayout);
	});

	it('doesn\'t fail to execute getDefaultLayout when the layout doesn\'t exists', () => {
		const testFormMultiple: Form = {
			field1: testField,
			field2: testField
		};

		const wrapper = createWrapper(testFormMultiple, undefined, 'unknown');

		expect(wrapper.vm.getDefaultLayout()).toBe(null);
	});

	it('emits change event', async() => {
		const wrapper = createWrapper(testForm);

		const updatedField = computedField;
		updatedField.value = 'test';

		wrapper.vm.formUpdated(updatedField);

		const updatedTestForm: Form = {
			field1: {
				...testField,
				value: 'test'
			}
		};

		await Vue.nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.emitted().change[0]).toEqual([updatedTestForm]);
	});

	it('doesn\'t emits refresh event', async() => {
		const wrapper = createWrapper(testForm);

		const updatedField = computedField;
		updatedField.value = 'test';

		wrapper.vm.formUpdated(updatedField);

		await Vue.nextTick();

		expect(wrapper.emitted('refresh')).toBeFalsy();

	});

	it('emits refresh event when a dynamic field is updated', async() => {
		const wrapper = createWrapper(testForm);

		const updatedField = computedDynamicField;
		updatedField.value = 'test';

		wrapper.vm.formUpdated(updatedField);

		await Vue.nextTick();

		expect(wrapper.emitted('refresh')).toBeTruthy();
	});
});
