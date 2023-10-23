import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import NumberPicker from "../";

describe("NumberPicker", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(NumberPicker, {
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
