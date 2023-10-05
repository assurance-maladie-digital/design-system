import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import SkipLink from "../";

describe("SkipLink", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(SkipLink);

		expect(wrapper).toMatchSnapshot();
	});
});
