import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import HeaderLoading from "../";

describe("HeaderLoading", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderLoading, {
			propsData: {
				label: "test",
				textToCopy: "test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
