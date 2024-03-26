import { describe, it, expect } from "vitest";
import {mount, shallowMount} from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import TableToolbar from "../";

describe("TableToolbar", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 1,
				nbTotal: 2,
				showAddBtn: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly when loading", () => {
		const wrapper = shallowMount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				loading: true,
				nbFiltered: 0,
				nbTotal: 1,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with content slot", () => {
		const wrapper = shallowMount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 0,
				nbTotal: 1,
			},
			slots: {
				searchLeft: "<p>search-left</p>",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with no items", () => {
		const wrapper = shallowMount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 0,
				nbTotal: 0,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with no nbFilters", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: undefined,
				nbTotal: 0,
			},
		});
		expect(wrapper.vm.computedNbRows[0]).toBe("0");
	});

	it("use showRowsNumber computed", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 5,
				nbTotal: 10,
			},
		});

		expect(wrapper.vm.showRowsNumber).toBe(true);
		expect(wrapper.vm.computedNbRows).toBe("5/10");
		expect(wrapper.vm.computedRowsText).toBe("lignes");
	});

	it("use showRowsNumber computed with false value", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 0,
				nbTotal: 0,
			},
		});

		expect(wrapper.vm.showRowsNumber).toBe(false);
		expect(wrapper.vm.computedNbRows).toBe("0/0");
		expect(wrapper.vm.computedRowsText).toBe("ligne");
	});

	it("use computedNbRows computed with no nbFilters", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 5,
				nbTotal: 10,
			},
		});

		expect(wrapper.find("p").text()).toContain("5/10 lignes");
	});

	it("use computedNbRows computed", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 5,
				nbTotal: 10,
			},
		});

		expect(wrapper.vm.computedNbRows).toBe("5/10");
	});

	it("use computedRowsText computed with plurals", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 1,
				nbTotal: 2,
			},
		});

		expect(wrapper.vm.computedRowsText).toBe("lignes");
	});

	it("use computedRowsText computed without plurals", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbFiltered: 0,
				nbTotal: 0,
			},
		});

		expect(wrapper.vm.computedRowsText).toBe("ligne");
	});

	it("use textFieldClasses computed on mobile", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				showAddBtn: true,
				nbTotal: 1,
			},
		});

		wrapper.vm.$vuetify.display.name = "xs";

		expect(wrapper.vm.textFieldClasses).toContain(
			"vd-form-input-s mr-6 flex-grow-1"
		);
	});

	it("use textFieldClasses computed on desktop", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				showAddBtn: false,
				nbTotal: 1,
			},
		});

		wrapper.vm.$vuetify.display.name = "lg";

		expect(wrapper.vm.textFieldClasses).toContain(
			"vd-form-input flex-grow-0"
		);
	});

	it("use isXs computed", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbTotal: 1,
			},
		});

		wrapper.vm.$vuetify.display.name = "xs";

		expect(wrapper.vm.isXs).toBeTruthy();
	});

	it("emits add event when add button is clicked", async () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				showAddBtn: true,
				nbTotal: 1,
			},
		});

		await wrapper.find(".v-btn").trigger("click");

		expect(wrapper.emitted("click")).toBeTruthy();
	});

	it("does not render rows number when showRowsNumber is true", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbTotal: 2,
			},
		});

		expect(wrapper.find("p").exists()).toBe(true);
	});

	it("does not render rows number when showRowsNumber is false", () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbTotal: 0,
			},
		});

		expect(wrapper.find("p").exists()).toBe(false);
	});

	it("emits search event when text field value changes", async () => {
		const wrapper = mount(TableToolbar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nbTotal: 10,
			},
		});

		await wrapper.find("input").setValue("example search");

		expect(wrapper.emitted("update:search")).toHaveLength(1);
	});
});
