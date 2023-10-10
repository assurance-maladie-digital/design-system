import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import AlertWrapper from "../";

describe("BackToTopBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(AlertWrapper);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
