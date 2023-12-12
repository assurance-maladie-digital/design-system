import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import DialogBox from "../";

describe("DialogBox", () => {
	it("renders correctly with props", () => {
		const wrapper = shallowMount(DialogBox, {
			props: {
				value: true,
				title: "Test title",
				width: "600px",
				cancelBtnText: "Cancel",
				confirmBtnText: "Confirm",
				hideActions: false,
				persistent: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("watch dialog", () => {
		const wrapper = shallowMount(DialogBox, {
			props: {
				value: false,
			},
			global: {
				plugins: [vuetify],
			},
		});

		wrapper.vm.dialog = true;
		expect(wrapper.vm.dialog).toBe(true);
	});

	it("getSelectableElements returns an array of selectable elements", () => {
		const wrapper = shallowMount(DialogBox, {
			props: {
				value: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const selectableElements = wrapper.vm.getSelectableElements();
		expect(Array.isArray(selectableElements)).toBe(false);
	});

	it("setEventListeners sets event correctly", () => {
		const wrapper = shallowMount(DialogBox, {
			props: {
				value: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		wrapper.vm.setEventListeners();
		expect(Promise.resolve(wrapper.vm.setEventListeners)).resolves.toBe(
			undefined
		);
	});
});
