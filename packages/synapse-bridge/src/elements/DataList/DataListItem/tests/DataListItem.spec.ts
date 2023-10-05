import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "../../../../../tests/unit/setup";

import DataListItem from "../";

describe("DataListItem", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a value", () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				value: "value",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly a value with HTML as text", () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Name",
				value: "Paul<br> Dupont",
			},
			global: {
				plugins: [vuetify],
			},
		});

		const elValue = wrapper.find(".vd-data-list-item-value span");
		expect(elValue.text()).toBe("Paul<br> Dupont");
	});

	it("renders correctly a value as plain HTML", () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Name",
				value: "Paul<br> Dupont",
				renderHtmlValue: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const elValue = wrapper.find(".vd-data-list-item-value span");
		expect(elValue.text()).toBe("Paul Dupont");
	});

	it("renders correctly value in a chip", () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				value: "value",
				chip: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with an action", () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				action: "action",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("emits click:action event when the action button is pressed", async () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				value: "value",
				action: "Action",
			},
			global: {
				plugins: [vuetify],
			},
		});

		const actionBtn = wrapper.find(".vd-data-list-item-action-btn");
		expect(actionBtn.exists()).toBe(true);

		actionBtn.trigger("click");

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("click:action")).toBeTruthy();
	});

	it("renders correctly in row mode", () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: "Test",
				value: "value",
				action: "Action",
				row: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		const elExists = wrapper.find(".vd-row").exists();
		expect(elExists).toBe(true);

		expect(wrapper).toMatchSnapshot();
	});
});
