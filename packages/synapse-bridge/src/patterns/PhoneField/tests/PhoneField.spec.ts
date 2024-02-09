import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import PhoneField from "../";
import { vuetify } from "@tests/unit/setup";

describe("PhoneField", () => {
	it("renders correctly", () => {
		const wrapper = mount(PhoneField,{
			global: {
				plugins: [vuetify],
			}
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with required prop", () => {
		const wrapper = mount(PhoneField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				required: true,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with outlined prop", () => {
		const wrapper = mount(PhoneField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				outlined: true,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with value prop", () => {
		const wrapper = mount(PhoneField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				modelValue: "1234 567890",
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	})

	it("formats phone number correctly", () => {
		const wrapper = mount(PhoneField,{global: {
			plugins: [vuetify],
		}});

		expect(wrapper.vm.formatPhone("")).toBe("");
		expect(wrapper.vm.formatPhone("1234567890")).toBe("12 34 56 78 90");
	});

	it("counts spaces correctly", () => {
		const wrapper = mount(PhoneField,{
			global: {
				plugins: [vuetify],
			}
		});

		expect(wrapper.vm.noSpacesCounter("")).toBe(0);
		expect(wrapper.vm.noSpacesCounter("1234567890")).toBe(10);
		expect(wrapper.vm.noSpacesCounter("12 34 56 78 90")).toBe(10);
	});

	it("sets internal value correctly", () => {
		const wrapper = mount(PhoneField,{
			global: {
				plugins: [vuetify],
			}
		});

		wrapper.vm.setInternalValue({
			target: {
				value: "1234567890",
			},
		});

		expect(wrapper.vm.internalValue).toBe("1234567890");
	});

	it("emits change event correctly", () => {
		const wrapper = mount(PhoneField,{
			global: {
				plugins: [vuetify],
			}
		});

		wrapper.find("input").setValue("1234567890");

		expect(wrapper.emitted("update:modelValue")).toEqual([["1234567890"]]);
	});
});
