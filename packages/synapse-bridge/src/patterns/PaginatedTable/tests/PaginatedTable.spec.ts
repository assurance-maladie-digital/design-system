import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";
import { LocalStorageUtility } from "@/helpers/localStorageUtility";
import { type DataOptions } from "../types";

import PaginatedTable from "../";

vi.mock('./LocalStorageUtility');

const fakeItems = [
	{
		id: 1,
		name: "John Doe",
		age: 25,
	},
	{
		id: 2,
		name: "Jane Doe",
		age: 30,
	},
	{
		id: 3,
		name: "John Smith",
		age: 35,
	},
];

const headers = [
	{
		title: 'ID',
		key: 'id'
	},
	{
		title: 'Name',
		key: 'name'
	},
	{
		title: 'Age',
		key: 'age'
	}
];

describe("PaginatedTable", () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it("renders correctly in local mode", () => {
		const wrapper = mount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
				items: fakeItems,
				headers: headers
			} as any,
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
		expect(wrapper.text()).toContain("John Doe");
	});

	it('Sort items correctly in local mode', async () => {
		const wrapper = mount(PaginatedTable, {
			propsData: {
				suffix: 'test 1',
				options: {
					sortBy: ['name'],
					sortDesc: [false]
				},
				items: fakeItems,
				headers: headers
			} as any,
			global: {
				plugins: [vuetify],
			},
		});
		let first = wrapper.find('tbody tr td').text();
		expect(first).toBe('2');

		await wrapper.setProps({
			suffix: 'test 2',
			options: {
				sortBy: ['name'],
				sortDesc: [true]
			}
		})

		first = wrapper.find('tbody tr td').text();
		expect(first).toBe('3');
	});

	it('store the options in local storage in local mode', async () => {
		const wrapper = mount(PaginatedTable, {
			propsData: {
				suffix: 'test 3',
				options: {
					sortBy: ['name'],
					sortDesc: [false]
				},
				items: fakeItems,
				headers: headers
			} as any,
			global: {
				plugins: [vuetify],
			},
		});
		const setItemMock = vi.spyOn(LocalStorageUtility.prototype, 'setItem');
		await wrapper.setProps({
			options: {
				sortBy: ['name'],
				sortDesc: [true]
			}
		});
		expect(setItemMock).toHaveBeenCalledWith(
			'pagination-test 3',
			expect.objectContaining(
				{
					sortBy: [{
						key: 'name',
						order: 'desc'
					}]
				}
			)
		);
		await wrapper.setProps({
			options: {
				sortBy: 'age',
				sortDesc: true
			}
		});
		expect(setItemMock).toHaveBeenCalledWith(
			'pagination-test 3',
			expect.objectContaining(
				{
					sortBy: [{
						key: 'age',
						order: 'desc'
					}]
				}
			)
		);
	});

	it('store the options in local storage in local mode (page and groupBy)', async () => {
		const wrapper = mount(PaginatedTable, {
			propsData: {
				suffix: 'test 3',
				options: {
					page: 2,
					groupBy: ['name'],
					groupDesc: [true],
				},
				items: fakeItems,
				headers: headers
			} as any,
			global: {
				plugins: [vuetify],
			},
		});
		const setItemMock = vi.spyOn(LocalStorageUtility.prototype, 'setItem');
		await wrapper.setProps({
			options: {
				page: 3,
				groupBy: 'age',
				groupDesc: true,
				itemsPerPage: 1
			}
		});
		expect(setItemMock).toHaveBeenCalledWith(
			'pagination-test 3',
			expect.objectContaining(
				{
					page: 3,
					groupBy: [{
						key: 'age',
						order: 'desc'
					}]
				}
			)
		);

		expect(wrapper.find('.v-data-table-footer__info').text())
			.toBe('3-3 of 3');
	});

 	it('use the options from local storage in local mode', async () => {
		const getItemMock = vi.spyOn(LocalStorageUtility.prototype, 'getItem').mockReturnValue({
			sortBy: [{
				key: 'name',
				order: 'desc'
			}]
		});
		const wrapper = mount(PaginatedTable, {
			propsData: {
				suffix: 'test 4',
				options: {
					sortBy: ['name'],
					sortDesc: [false]
				},
				items: fakeItems,
				headers: headers
			} as any,
			global: {
				plugins: [vuetify],
			},
		});
		const first = wrapper.find('tbody tr td').text();
		expect(first).toBe('3');
		expect(getItemMock).toHaveBeenCalledWith('pagination-test 4');
	});

	it('render correctly in server mode', async () => {
		const wrapper = mount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
				items: [],
				serverItemsLength: 0,
				suffix: 'test 5',
				headers: headers
			} as any,
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
		expect(wrapper.emitted('update:options')).toBeTruthy();

		await wrapper.setProps({
			items: fakeItems,
			serverItemsLength: 20,
		});

		expect(wrapper.find('.v-data-table-footer__info').text()).toBe('1-10 of 20');
	});

	it('emit update:options event when the user change the sort in server mode', async () => {
		const wrapper = mount(PaginatedTable, {
			propsData: {
				options: {} as DataOptions,
				items: [],
				serverItemsLength: 0,
				suffix: 'test 6',
				headers: headers
			} as any,
			global: {
				plugins: [vuetify],
			},
		});

		await wrapper.find('.v-data-table-header__content').trigger('click');

		expect(wrapper.emitted('update:options')?.at(-1))
			.toEqual([
				expect.objectContaining({
					sortBy: ['id'],
					sortDesc: [false]
				})
			]
		);

		await wrapper.findAll('.v-data-table-header__content')[1].trigger('click');

		expect(wrapper.emitted('update:options')?.at(-1))
			.toEqual([
				expect.objectContaining({
					sortBy: ['name'],
					sortDesc: [false]
				})
			]
		);

		await wrapper.findAll('.v-data-table-header__content')[1]
			.trigger('click');

		expect(wrapper.emitted('update:options')?.at(-1))
			.toEqual([
				expect.objectContaining({
					sortBy: ['name'],
					sortDesc: [true]
				})
			]
		);
	});
});
