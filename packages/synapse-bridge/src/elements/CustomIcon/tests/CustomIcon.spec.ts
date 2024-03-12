import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CustomIcon from "../";

describe("CustomIcon", () => {
	it("renders correctly without icon", () => {
		const wrapper = shallowMount(CustomIcon, {
			propsData: {
				icon: undefined,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with icon", () => {
		const wrapper = shallowMount(CustomIcon, {
			propsData: {
				icon: "test",
				size: "64px",
				color: "red",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
