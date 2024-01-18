import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import HeaderLoading from "../";
import { vuetify } from "@tests/unit/setup";

describe("HeaderLoading", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderLoading, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
