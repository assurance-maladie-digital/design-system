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
			items: [],
			headers: [],
			options: {} as DataOptions,
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("get storageKey computed correctly with localOptions", async () => {
		const wrapper = shallowMount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
				suffix: 'test',
				shouldPersistOptions: true
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.storageKey).toEqual('pagination-test');
	});
});
