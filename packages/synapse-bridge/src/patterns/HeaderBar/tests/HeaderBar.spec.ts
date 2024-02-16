import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import { ThemeEnum } from "../ThemeEnum.ts"
import { vuetify } from "@tests/unit/setup";

import HeaderBar from "../";

describe("HeaderBar", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with mobile-version", () => {
		const wrapper = mount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				mobileVersion: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});


	it("renders correctly with mini version", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				miniVersion: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with target", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				target: "exampleTarget",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("returns 120 when isMiniVersion and isMobileVersion are false", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				miniVersion: false,
				mobileVersion: false,
			},
		});

		expect(wrapper.vm.contentSheetHeight).toBe(120);
	});


	it("renders correctly with theme", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("fullHeight returns 72 isMobileVersion is true", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				mobileVersion: true,
				showNavigationBar(): boolean {
					return false;
				}
			},
		});

		expect(wrapper.vm.fullHeight).toBe(72);
	});

	it("fullHeight returns 120 isMobileVersion is true", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				mobileVersion: false,
				showNavigationBar(): boolean {
					return false;
				}
			},
		});

		expect(wrapper.vm.fullHeight).toBe(120);
	});

	it("showNavigationBar is true and isMobileVersion is true", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				showNavigationBar: true,
				isMobileVersion: true,
			},
		});

		expect(wrapper.vm.fullHeight).toBe(120);
	});

it("showNavigationBar is true and isMobileVersion is false", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				showNavigationBar: true,
				isMobileVersion: false,
			},
		});

		expect(wrapper.vm.fullHeight).toBe(120);
	});

	it("returns contentSheetHeight + 48 when showNavigationBar is true", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			data() {
				return {
					miniVersion: false,
					mobileVersion: true,
					contentSheetHeight: 72,
					showNavigationBar: true,
				};
			},
		});

		expect(wrapper.vm.height).toBe(120);
	});

	it("renders correctly with title and subtitle", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				serviceTitle: "Title",
				serviceSubTitle: "Subtitle",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with navigation-items", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				navigationItems: [
					{
						label: "Item 1",
						href: "#",
					},
					{
						label: "Item 2",
						href: "#",
					},
				],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with inner-width", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				innerWidth: "1000",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with home-link", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				homeLink: {
					href: "#",
					label: "Home",
				},
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with home-href", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				homeHref: "#",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with show-nav-bar-menu-btn", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				showNavBarMenuBtn: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});


	it("renders correctly with sticky mode and scrolled", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				sticky: true,
			},
		});

		wrapper.vm.scrolled = true;

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with showNavBarMenuBtn on mobile version", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				showNavBarMenuBtn: true,
				mobileVersion: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with custom target", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				target: "customTarget",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("updates drawer correctly", async () => {
		const wrapper = mount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
		});

		 wrapper.vm.updateDrawer(true);

		expect(wrapper.vm.drawer).toBe(true);
	});

	it("computes showStickyNavBar correctly before scroll", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.showStickyNavBar).toBe(false);
	});

	it("computes showHeaderMenuBtn correctly", () => {
		const wrapper = shallowMount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				mobileVersion: true,
			},
		});

		expect(wrapper.vm.showHeaderMenuBtn).toBe(false);
	});



});
