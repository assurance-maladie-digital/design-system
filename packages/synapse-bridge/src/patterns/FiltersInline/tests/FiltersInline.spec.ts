import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FiltersInline from "../";

describe("FiltersInline", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				value: [
					{
						name: "name",
						label: "Nom",
					},
				],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with an active filter", () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				value: [
					{
						name: "name",
						label: "Nom",
						value: "John Doe",
					},
				],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with multiple active filters", () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				value: [
					{
						name: "name",
						label: "Nom",
						value: "John Doe",
					},
					{
						name: "profession",
						label: "Profession",
						value: ["Infirmer", "Pharmacien"],
					},
				],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
