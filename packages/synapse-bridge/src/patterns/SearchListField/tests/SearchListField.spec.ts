import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import SearchListField from "../";

describe("SearchListField", () => {
	it("renders correctly", () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						id: 1,
						name: "Item 1",
					},
					{
						id: 2,
						name: "Item 2",
					},
				],
				value: 1,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("initial state", () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 2",
						value: 2,
					},
				],
			},
		});

		expect(wrapper.vm.filteredItems).toEqual(wrapper.props().items);
		expect(
			wrapper.find(".vd-search-list .v-list-item--active").exists()
		).toBe(false);
	});

	it("selects an item", async () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 2",
						value: 2,
					},
				],
			},
		});

		const listItem = wrapper.find(".vd-search-list .v-list-item");
		listItem.trigger("click");
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
		expect(wrapper.emitted("update:modelValue")[0][0]).toBe(1);
		expect(
			wrapper.find(".vd-search-list .v-list-item--active").exists()
		).toBe(true);
	});

	it("clears the search field", async () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 2",
						value: 2,
					},
				],
			},
		});

		wrapper.vm.search = "Item 1";
		await wrapper.vm.$nextTick();

		await wrapper.find(".v-icon--clickable").trigger("click");

		expect(wrapper.vm.search).toBeNull();
	});

	it("filteredItems computed property", async () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 2",
						value: 2,
					},
				],
			},
		});

		expect(wrapper.vm.filteredItems).toHaveLength(2);

		wrapper.vm.search = "Item 1";
		await wrapper.vm.$nextTick();
		expect(wrapper.vm.filteredItems).toHaveLength(1);
	});

	it("filteredItems computed property with null search", async () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 2",
						value: 2,
					},
				],
			},
		});

		expect(wrapper.vm.filteredItems).toHaveLength(2);

		wrapper.vm.search = null;
		await wrapper.vm.$nextTick();
		expect(wrapper.vm.filteredItems).toHaveLength(2);
	});

	it("emitChangeEvent method", async () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 2",
						value: 2,
					},
				],
			},
		});

		wrapper.vm.emitChangeEvent();
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
	});
});
