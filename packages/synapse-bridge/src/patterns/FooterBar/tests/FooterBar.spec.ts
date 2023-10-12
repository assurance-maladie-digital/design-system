import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FooterBar from "../";

describe("FooterBar", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FooterBar, {
			stubs: ["RouterLink"],
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
