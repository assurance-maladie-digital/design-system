import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import NotFoundPage from "../";

describe("NotFoundPage", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(NotFoundPage);

		expect(wrapper.html()).toMatchSnapshot();
	});
});
