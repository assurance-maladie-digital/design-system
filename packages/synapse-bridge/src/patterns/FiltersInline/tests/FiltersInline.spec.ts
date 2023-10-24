import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";
import FiltersInline from "../";
import { locales } from "../locales";

describe("FiltersInline", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [
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
				modelValue: [
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
				modelValue: [
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

describe("FiltersInline locales", () => {
	it("should return the correct locale", () => {
		expect(locales.badgeLabel(0)).toMatchSnapshot();
		expect(locales.badgeLabel(1)).toMatchSnapshot();
		expect(locales.badgeLabel(2)).toMatchSnapshot();
	});
});
