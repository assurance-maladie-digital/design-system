import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Logo from "../";

describe("Logo", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(Logo);

		expect(wrapper).toMatchSnapshot();
	});
});
