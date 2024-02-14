import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import { ThemeEnum } from "../ThemeEnum.ts"

import HeaderBar from "../";

describe("HeaderBar", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderBar);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with mini version", () => {
		const wrapper = shallowMount(HeaderBar, {
			propsData: {
				miniVersion: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with theme", () => {
		const wrapper = shallowMount(HeaderBar, {
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with title and subtitle", () => {
		const wrapper = shallowMount(HeaderBar, {
			propsData: {
				serviceTitle: "Title",
				serviceSubTitle: "Subtitle",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with navigation-items", () => {
		const wrapper = shallowMount(HeaderBar, {
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
			propsData: {
				innerWidth: "1000",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with home-link", () => {
		const wrapper = shallowMount(HeaderBar, {
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
			propsData: {
				homeHref: "#",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with show-nav-bar-menu-btn", () => {
		const wrapper = shallowMount(HeaderBar, {
			propsData: {
				showNavBarMenuBtn: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with mobile-version", () => {
		const wrapper = mount(HeaderBar, {
			propsData: {
				mobileVersion: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with sticky mode", () => {
		const wrapper = shallowMount(HeaderBar, {
			propsData: {
				sticky: true,
			},
		});

		const container = wrapper.find(".vd-header-bar-container");

		expect(container.attributes("style")).toContain("margin-top");

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with sticky mode and show-sticky-nav-bar", () => {
		const wrapper = shallowMount(HeaderBar, {
			propsData: {
				sticky: true,
				showStickyNavBar: true,
			},
		});

		const container = wrapper.find(".vd-header-bar-container");

		expect(container.attributes("style")).toContain("margin-top");

		expect(wrapper).toMatchSnapshot();
	});
});
