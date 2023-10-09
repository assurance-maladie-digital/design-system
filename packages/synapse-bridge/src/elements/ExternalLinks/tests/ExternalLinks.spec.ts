import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ExternalLinks from "../";

describe("ExternalLinks", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(ExternalLinks, {
			propsData: {
				position: "top left",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
