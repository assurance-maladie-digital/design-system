import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import PasswordField from "../";

describe("PasswordField", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(PasswordField);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
