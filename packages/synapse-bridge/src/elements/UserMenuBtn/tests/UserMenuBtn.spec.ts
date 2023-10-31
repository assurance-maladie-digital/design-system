import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import UserMenuBtn from "../";

describe("UserMenuBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(UserMenuBtn, {
			propsData: {
				fullName: "Firstname Lastname",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
