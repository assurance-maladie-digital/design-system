import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import SocialMediaLinks from "../";

describe("SocialMediaLinks", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(SocialMediaLinks);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
