import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FormBuilder from "../";
import { questionForm } from "./data/questionForm";

describe("FormBuilder", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FormBuilder, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				form: questionForm,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
