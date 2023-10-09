import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import UserMenuBtn from "../";

describe("UserMenuBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(UserMenuBtn, {
			propsData: {
				fullName: "Firstname Lastname",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
