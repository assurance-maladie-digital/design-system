import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import PhoneField from "../";

describe("PhoneField", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(PhoneField);

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with required prop", () => {
		const wrapper = shallowMount(PhoneField, {
			props: {
				required: true,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with outlined prop", () => {
		const wrapper = shallowMount(PhoneField, {
			props: {
				outlined: true,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
