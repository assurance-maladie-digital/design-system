import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderMenuBtn from "../";

describe("HeaderMenuBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderMenuBtn, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
