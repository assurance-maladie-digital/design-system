import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderMenuBtn from "../";

describe("HeaderMenuBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderMenuBtn, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with props", () => {
		const wrapper = shallowMount(HeaderMenuBtn, {
			props: {
				color: "primary",
				icon: "mdi-menu",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly menuBtnActionLabel", () => {
		const wrapper = shallowMount(HeaderMenuBtn, {
			props: {
				drawer: false,
			},
			global: {
				plugins: [vuetify],
			},
			data() {
				return {
					locales: {
						close: "Fermer",
						open: "Ouvrir",
						menuBtnLabel: (action: string): string => `${action} le menu`,
						menu: "Menu",
					},
				};
			}
		});

		expect(wrapper.vm.menuBtnActionLabel).toBe("Ouvrir le menu");	});

	it("computes menuBtnActionLabel correctly when drawer is true", () => {
		const wrapper = shallowMount(HeaderMenuBtn, {
			props: {
				drawer: true,
			},
			data() {
				return {
					locales: {
						close: "Fermer",
						open: "Ouvrir",
						menuBtnLabel: (action: string): string => `${action} le menu`,
						menu: "Menu",
					},
				};
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.menuBtnActionLabel).toBe("Fermer le menu");
	});
});
