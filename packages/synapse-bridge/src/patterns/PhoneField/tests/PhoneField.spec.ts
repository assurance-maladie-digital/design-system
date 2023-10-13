import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import PhoneField from "../";

describe("PhoneField", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(PhoneField);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
