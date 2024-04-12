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

	it("get storageKey computed correctly without localOptions", async () => {
		const wrapper = shallowMount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
				suffix: 'test',
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.storageKey).toEqual('pagination-test');
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

	it("get localOptions correctly with new options", async () => {
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

		const options = {
			page: 1,
			itemsPerPage: 5,
			sortBy: ['name'],
			sortDesc: [true],
			groupBy: ['name'],
			groupDesc: [true],
			multiSort: true,
			mustSort: true,
		};

		wrapper.vm.localOptions = options;

		expect(wrapper.vm.localOptions).toEqual(options);
	});
});
