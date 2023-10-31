import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import Logo from "../";

describe("Logo", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(Logo, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
