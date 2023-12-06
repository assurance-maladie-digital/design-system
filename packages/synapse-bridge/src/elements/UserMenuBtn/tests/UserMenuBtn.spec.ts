import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import UserMenuBtn from "../";

describe("UserMenuBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly without user icon", () => {
		const wrapper = shallowMount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				hideUserIcon: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly in mobile mode", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				mobileVersion: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly in mobile mode with additional information", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				mobileVersion: true,
				additionalInformation: "Additional information",
			},
			global: {
				plugins: [vuetify],
			},
			slots: {
				default: "<p>the menu</p>",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly in mobile mode without user icon", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				mobileVersion: true,
				hideUserIcon: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly without the logout button", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				hideLogoutBtn: true,
				additionalInformation: "Additional information",
				label: "Label",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly when the breakpoint is xs", () => {

	it("Display the menu on click", async () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
			},
			global: {
				plugins: [vuetify],
			},
			slots: {
				default: "<p>the menu</p>",
			},
		});

		await wrapper.find(".v-btn").trigger("click");
		expect(wrapper.find(".v-btn").attributes()["aria-expanded"]).toBe("true");
		expect(wrapper.html()).toContain("the menu");
	});
});

