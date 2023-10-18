import { describe, it, expect } from "vitest";
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
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 2",
						value: 2,
					},
				],
				modelValue: [1],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with empty item prop", () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
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

	it("initial state with empty value prop", () => {
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
				modelValue: [],
			},
		});

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
		await listItem.trigger("click");
		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("update:modelValue")).toEqual([[[1]]]);
		expect(listItem.classes()).toContain("v-list-item--active");
	});

	it("filters items based on search input", async () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{
						label: "Apple",
						value: "apple",
					},
					{
						label: "Banana",
						value: "banana",
					},
					{
						label: "Orange",
						value: "orange",
					},
				],
			},
		});

		wrapper.vm.search = "Banana";
		await wrapper.vm.$nextTick();

		const filteredItems = wrapper.vm.filteredItems;
		expect(filteredItems).toHaveLength(1);
		expect(filteredItems[0].label).toBe("Banana");
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

	it("filteredItems computed property with multiple matching items", async () => {
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
					{
						label: "Another Item 1",
						value: 3,
					},
				],
			},
		});

		wrapper.vm.search = "Item 1";
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

		wrapper.vm.emitChangeEvent(['']);
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
	});

	it("emits the update:modelValue event when an item is selected", async () => {
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
		expect(wrapper.emitted("update:modelValue")).toEqual([[[1]]]);
	});

	it("Update the value when the modelValue prop changes", async () => {
		const wrapper = mount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				items: [
					{
						label: "Item 1",
						value: 1,
					},
					{
						label: "Item 1",
						value: 2,
					},
				],
				modelValue: [1],
			},
		});

		const secondItem = wrapper.find(".vd-search-list .v-list-item:nth-child(2)");

		expect(secondItem.classes()).not.toContain("v-list-item--active");

		await wrapper.setProps({
			modelValue: [2],
		});

		expect(secondItem.classes()).toContain("v-list-item--active");
	});
});
