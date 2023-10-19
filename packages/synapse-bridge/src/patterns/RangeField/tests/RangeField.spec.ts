import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import RangeField from "../";

describe("RangeField", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(RangeField, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
