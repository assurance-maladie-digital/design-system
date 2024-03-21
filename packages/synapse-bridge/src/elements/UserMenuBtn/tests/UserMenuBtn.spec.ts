import { describe, it, expect } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import UserMenuBtn from '../';

describe('UserMenuBtn', () => {
	it("renders correctly with props", () => {
		const wrapper = shallowMount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				label: "Label",
				hideUserIcon: true,
				hideLogoutBtn: true,
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

	it("renders btnPadding correctly", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				mobileVersion: true,
				additionalInformation: "Additional information",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.btnPadding).toBe("pa-0");
	});

	it("renders btnPadding correctly", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				hideUserIcon: true,
				additionalInformation: "Additional information",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.btnPadding).toBe("pa-1 pa-sm-2");
	});

	it("renders hasListContent correctly", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				hideLogoutBtn: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.hasListContent).toBe(false);
	});

	it("renders isMobileVersion computed correctly", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				mobileVersion: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.isMobileVersion).toBe(true);
	});

	it("renders isMobileWithIcon computed correctly", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				mobileVersion: true,
				hideUserIcon: false,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.isMobileWithIcon).toBe(true);
	});

	it("renders the full name correctly", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				hideUserIcon: true,
				mobileVersion: false,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.find(".text-sm-caption").exists()).toBe(false);
	});

	it("renders the full name correctly in mobile mode", () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
				hideUserIcon: true,
				mobileVersion: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.find(".text-sm-caption").exists()).toBe(true);
	});

	it("Display the menu on click", async () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
			},
			global: {
				plugins: [vuetify],
			},
			slots: {
				default: "<p class='menu'>the menu</p>",
			},
		});

		await wrapper.find(".v-btn").trigger("click");
		expect(wrapper.find(".v-btn").attributes()["aria-expanded"]).toBe(
			"true"
		);
		expect(wrapper.find(".menu").exists());
	});

	it("Hide the menu on click", async () => {
		const wrapper = mount(UserMenuBtn, {
			props: {
				fullName: "Firstname Lastname",
			},
			global: {
				plugins: [vuetify],
			},
			slots: {
				default: "<p class='menu'>the menu</p>",
			},
		});

		await wrapper.find(".v-btn").trigger("click");
		await wrapper.find(".v-btn").trigger("click");
		expect(wrapper.find(".v-btn").attributes()["aria-expanded"]).toBe(
			"false"
		);
		expect(wrapper.find(".menu").exists()).toBe(false);
	});
});
