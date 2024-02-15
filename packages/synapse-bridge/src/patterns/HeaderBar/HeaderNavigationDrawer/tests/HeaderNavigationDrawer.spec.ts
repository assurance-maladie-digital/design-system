import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderNavigationDrawer from "../";
import { ThemeEnum } from "../../ThemeEnum";

describe("HeaderNavigationDrawer", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("emits change event when drawer is toggled", async () => {
		const wrapper = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		await wrapper.vm.emitChangeEvent();
		expect(wrapper.emitted("change")).toBeTruthy();
		expect(wrapper.emitted("change")).toHaveLength(1);
	});

	it("emits tab update event when tab is changed", async () => {
		const items = [
			{ label: "Home", href: "#home" },
			{ label: "About", href: "#about" },
		];

		const wrapper = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
				items: items,
			},
		});

		await wrapper.vm.emitTabUpdateEvent(1);
		expect(wrapper.emitted("update:tab")).toBeTruthy();
		expect(wrapper.emitted("update:tab")).toHaveLength(1);
		expect(wrapper.emitted("update:tab")[0]).toEqual([1]);
	});
});
