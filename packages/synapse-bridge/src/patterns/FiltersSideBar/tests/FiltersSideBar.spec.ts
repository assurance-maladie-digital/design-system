import { defineComponent } from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FilterSideBar from "../";
import ChipList from "../../../elements/ChipList";

defineComponent("ChipList", ChipList);

describe("FilterSideBar", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FilterSideBar, {
			propsData: {
				value: [
					{
						name: "name",
						label: "Nom",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with an active filter", () => {
		const wrapper = shallowMount(FilterSideBar, {
			propsData: {
				value: [
					{
						name: "name",
						label: "Nom",
						value: "John Doe",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with multiple active filters", () => {
		const wrapper = shallowMount(FilterSideBar, {
			propsData: {
				value: [
					{
						name: "name",
						label: "Nom",
						value: "John Doe",
					},
					{
						name: "age",
						label: "Âge",
						value: "18",
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
