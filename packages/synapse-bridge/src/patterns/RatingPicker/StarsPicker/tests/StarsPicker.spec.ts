import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import StarsPicker from "../";

describe("StarsPicker", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(StarsPicker, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: "Pourriez-vous donner une note ?",
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
