import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import SearchListField from "../";

describe("SearchListField", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(SearchListField, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
