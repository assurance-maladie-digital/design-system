import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import { DataOptions } from "../types";

import PaginatedTable from "../";

describe("PaginatedTable", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("watch options correctly", async () => {
		const wrapper = shallowMount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.setProps({
			options: {
				items: [],
				headers: [],
			} as DataOptions,
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("get optionsCalc computed correctly with localOptions", async () => {
		const wrapper = shallowMount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
			},
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.setData({
			localOptions: {
				itemsPerPage: 10,
				page: 1,
			},
		});

		expect(wrapper.vm.optionsCalc).toEqual({
			headers: [],
			items: [],
			itemsPerPage: 10,
			page: 1,
		});
	});

	it("get storageKey computed correctly with localOptions", async () => {
		const wrapper = shallowMount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
				suffix: "test",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.storageKey).toEqual("pagination-test");
	});
});
