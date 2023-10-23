import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import RatingPicker from "../";

/** Create the test component */
function createTestComponent() {
	return shallowMount(RatingPicker, {
		propsData: {
			type: "stars",
			label: "Pouvez-vous nous en dire plus ?",
		},
	});
}

describe("RatingPicker", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(RatingPicker, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
