import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderMenuBtn from "../";

const globalConfig = {
	global: {
		plugins: [vuetify],
	},
};

describe("HeaderMenuBtn", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderMenuBtn, globalConfig);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with props", () => {
		const wrapper = shallowMount(HeaderMenuBtn, {
			props: {
				color: "primary",
				icon: "mdi-menu",
			},
			...globalConfig,
		});
		expect(wrapper).toMatchSnapshot();
	});

	const dataWithDrawer = (drawer: any) => ({
		props: { drawer },
		data() {
			return {
				locales: {
					close: "Fermer",
					open: "Ouvrir",
					menuBtnLabel: (action : any) => `${action} le menu`,
					menu: "Menu",
				},
			};
		},
		...globalConfig,
	});

	it("renders correctly menuBtnActionLabel", () => {
		const wrapper = shallowMount(HeaderMenuBtn, dataWithDrawer(false));
		expect(wrapper.vm.menuBtnActionLabel).toBe("Ouvrir le menu");
	});

	it("computes menuBtnActionLabel correctly when drawer is true", () => {
		const wrapper = shallowMount(HeaderMenuBtn, dataWithDrawer(true));
		expect(wrapper.vm.menuBtnActionLabel).toBe("Fermer le menu");
	});
});
