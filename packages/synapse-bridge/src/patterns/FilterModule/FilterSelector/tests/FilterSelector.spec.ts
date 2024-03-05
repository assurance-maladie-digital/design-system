import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FilterSelector from "../";

describe("FilterSelector", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FilterSelector, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				filters: [],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
