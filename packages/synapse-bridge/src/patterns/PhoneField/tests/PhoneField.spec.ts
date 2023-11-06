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

	it("formats phone number correctly", () => {
		const wrapper = shallowMount(PhoneField);

		expect(wrapper.vm.formatPhone("")).toBe("");
		expect(wrapper.vm.formatPhone("1234567890")).toBe("12 34 56 78 90");
	});

	it("counts spaces correctly", () => {
		const wrapper = shallowMount(PhoneField);

		expect(wrapper.vm.noSpacesCounter("")).toBe(0);
		expect(wrapper.vm.noSpacesCounter("1234567890")).toBe(10);
		expect(wrapper.vm.noSpacesCounter("12 34 56 78 90")).toBe(10);
	});

	// it("sets internal value correctly", () => {
	// 	const wrapper = shallowMount(PhoneField);

	// 	expect(wrapper.vm.setInternalValue("12 34 56 78 90")).toBe(
	// 		"1234567890"
	// 	);
	// });

	// it("emits change event correctly", () => {
	// 	const wrapper = shallowMount(PhoneField);

	// 	expect(wrapper.vm.emitChangeEvent).toBe("1234567890");
	// });
});
