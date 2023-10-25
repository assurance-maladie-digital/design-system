import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FilterManager from "../";

const filters = [
	{
		type: "text",
		value: "Test",
		fieldOptions: {
			label: "Nom",
			filterTitle: "Nom",
			hideDetails: true,
			variant: "outlined",
		},
	},
	{
		type: "number",
		value: 16,
		fieldOptions: {
			label: "Nombre de fichiers",
			filterTitle: "Nombre de fichiers",
			hideDetails: true,
			variant: "outlined",
			mask: "###",
		},
	},
];

describe("FilterManager", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FilterManager, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				appliedFilters: filters,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a single filter", () => {
		const wrapper = shallowMount(FilterManager, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				appliedFilters: [filters[0]],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
