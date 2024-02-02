
import { describe, it, expect, afterEach } from "vitest";
import { mount } from "@vue/test-utils";

import DatePicker from "../";
import { vuetify } from "@tests/unit/setup";

import { VDatePicker } from 'vuetify/components/VDatePicker';

describe("DatePicker", () => {

	afterEach(() => {
		// clean teleport
		document.body.outerHTML = ''
	})
	it("renders correctly", () => {
		const wrapper = mount(
			DatePicker,
			{
				global: {
					plugins: [
						vuetify,
					],
				},
				propsData: {
					modelValue: "2021-01-01",
				},
			},
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('render whith the button in the left', () => {
		const wrapper = mount(
			DatePicker,
			{
				global: {
					plugins: [
						vuetify,
					],
				},
				propsData: {
					modelValue: "2021-01-01",
					outlined: true,
				},
			},
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('display and hide the date picker', async () => {
		const wrapper = mount(
			DatePicker,
			{
				global: {
					plugins: [
						vuetify,
					],
				},
				propsData: {
					modelValue: "2021-01-01",
				},
			},
		);

		const button = wrapper.find('button');

		let datePicker = wrapper.findComponent(VDatePicker);
		expect(datePicker.exists()).toBe(false);

		await button.trigger('click');

		datePicker = wrapper.findComponent(VDatePicker);
		let element = datePicker.find('.v-picker__body');
		expect(element.exists() && element.isVisible()).toBe(true);

		await button.trigger('click');

		datePicker = wrapper.findComponent(VDatePicker);
		element = datePicker.find('.v-picker__body');
		expect(element.exists() && element.isVisible()).toBe(false);
	});

	it('open the text field if focused', async () => {
		const wrapper = mount(
			DatePicker,
			{
				global: {
					plugins: [
						vuetify,
					],
				},
				propsData: {
					modelValue: "2021-01-01",
					textFieldActivator: true,
				},
			},
		);

		const textField = wrapper.find('input');

		let datePicker = wrapper.findComponent(VDatePicker);
		expect(datePicker.exists()).toBe(false);

		await textField.trigger('click');

		datePicker = wrapper.findComponent(VDatePicker);
		let element = datePicker.find('.v-picker__body');
		expect(element.exists() && element.isVisible()).toBe(true);
	});

	it('do not open the text field if textFieldActivator is false', async () => {
		const wrapper = mount(
			DatePicker,
			{
				global: {
					plugins: [
						vuetify,
					],
				},
				propsData: {
					modelValue: "2021-01-01",
				},
			},
		);

		const textField = wrapper.find('input');
		await textField.trigger('click');

		const datePicker = wrapper.findComponent(VDatePicker);
		expect(datePicker.exists()).toBe(false);
	});
});



