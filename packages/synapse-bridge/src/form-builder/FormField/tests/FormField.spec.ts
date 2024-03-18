import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FormField from "../FormField.vue";

const testField = {
	type: "text",
	value: null,
	fieldOptions: {
		label: "Classic field",
		outlined: true,
	},
};

describe("FormBuilder", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FormField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				field: testField,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
