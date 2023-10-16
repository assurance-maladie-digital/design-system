import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CookiesPage from "../";

describe("CookiesPage", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(CookiesPage);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
