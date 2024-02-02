import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import PeriodField from "../";

describe("PeriodField", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
