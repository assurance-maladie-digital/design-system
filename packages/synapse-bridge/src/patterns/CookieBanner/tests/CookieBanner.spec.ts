import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import CookieBanner from "../";

describe("CookieBanner", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(CookieBanner, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
