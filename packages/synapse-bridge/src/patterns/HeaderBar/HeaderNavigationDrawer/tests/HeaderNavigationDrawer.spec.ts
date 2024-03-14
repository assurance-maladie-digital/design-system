import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderNavigationDrawer from "../";
import { ThemeEnum } from "@/constants/enums/ThemeEnum";

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

		wrapper.vm.emitChangeEvent();
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

		wrapper.vm.emitTabUpdateEvent(1);
		expect(wrapper.emitted("update:tab")).toBeTruthy();
		expect(wrapper.emitted("update:tab")).toHaveLength(1);
	});

	it("returns correct spacing class based on mobileVersion prop", () => {
		const wrapperMobile = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		expect(wrapperMobile.vm.spacingClass).toBe("px-4");

		const wrapperDesktop = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: false,
			},
		});
		expect(wrapperDesktop.vm.spacingClass).toBe("px-14");
	});

	it("emits change event with false when drawerUpdated is called with value false", async () => {
		const wrapper = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		wrapper.vm.drawerUpdated(false);

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("change")).toBeTruthy();
		expect(wrapper.emitted("change")).toHaveLength(1);
	});

	it("doesn't emit change event when drawerUpdated is called with value true", async () => {
		const wrapper = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		wrapper.vm.drawerUpdated(true);

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("change")).toBeFalsy();
	});
});
