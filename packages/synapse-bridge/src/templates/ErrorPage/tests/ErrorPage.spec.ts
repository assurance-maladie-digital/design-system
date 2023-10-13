import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ErrorPage from "../";

describe("ErrorPage", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(ErrorPage, {
			propsData: {
				pageTitle: "Error",
				message: "Error message",
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
