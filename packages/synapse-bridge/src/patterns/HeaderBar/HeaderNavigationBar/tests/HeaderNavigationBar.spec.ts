import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderNavigationBar from "../";
import { ThemeEnum } from "@/constants/enums/ThemeEnum.ts";
import HeaderMenuBtn from "../../HeaderMenuBtn/HeaderMenuBtn.vue";

describe("HeaderNavigationBar", () => {
	it("renders correctly", () => {
		const wrapper = mount(HeaderNavigationBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("emits 'update:drawer' event when HeaderMenuBtn is clicked on mobileVersion", async () => {
		const wrapper = mount(HeaderNavigationBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true, // Simulate mobileVersion
			},
		});

		await wrapper.findComponent(HeaderMenuBtn).trigger("click");
		expect(wrapper.emitted("update:drawer")).toBeTruthy();
	});

	it("computes spacingClass correctly based on mobileVersion prop", () => {
		const wrapper = mount(HeaderNavigationBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true, // Simulate mobileVersion
			},
		});

		expect(wrapper.vm.spacingClass).toBe("px-4");
	});

	it("computes backgroundColor correctly based on theme prop", () => {
		const wrapper = mount(HeaderNavigationBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper.vm.backgroundColor).toBe("#0a347b");
	});

	it("returns default color if options color is not present", () => {
		const wrapper = mount(HeaderNavigationBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		const result = wrapper.vm.backgroundColor;
		expect(result).toBe("#0a347b");
	});


	it("emits 'update:tab' event with the correct value", async () => {
		const wrapper = mount(HeaderNavigationBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		const tabValue = 42;
		wrapper.vm.emitTabUpdateEvent(tabValue);
		const emittedEvent = wrapper.emitted("update:tab");
		expect(emittedEvent).toBeTruthy();
		if (emittedEvent) {
			expect(emittedEvent[0]).toEqual([tabValue]);
		} else {
			expect(emittedEvent).toBeFalsy();
		}

	});
});
