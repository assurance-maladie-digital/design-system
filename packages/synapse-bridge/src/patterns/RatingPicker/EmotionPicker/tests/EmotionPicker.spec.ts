import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import EmotionPicker from "../";

describe("EmotionPicker", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(EmotionPicker, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: "Pourriez-vous donner une note ?",
				itemLabels: ["Pas du tout", "Peut-être", "Oui super"],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
