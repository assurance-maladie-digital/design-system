import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import Logo from "../";

describe("Logo", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(Logo, {
			propsData: {
				hideSignature: false,
				hideOrganism: false,
				risquePro: false,
				avatar: false,
				dark: false,
				size: "normal",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with fillColor", () => {
		const wrapper = shallowMount(Logo, {
			propsData: {
				dark: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.fillColor).toBe("#fff");
	});

	it("renders correctly with small size", () => {
		const wrapper = shallowMount(Logo, {
			propsData: {
				size: "small",
				avatar: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.dimensions.width).toBe("40");
	});

	it("renders correctly with small viewBox", () => {
		const wrapper = shallowMount(Logo, {
			propsData: {
				size: "small",
				avatar: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.viewBox).toBe("0 0 64 64");
	});

	it("renders correctly with no signature viewBox", () => {
		const wrapper = shallowMount(Logo, {
			propsData: {
				hideSignature: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.viewBox).toBe("0 0 206 64");
	});

	it("renders correctly with label", () => {
		const wrapper = shallowMount(Logo, {
			propsData: {
				risquePro: true,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.label).toBe(
			"Sécurité sociale, l’Assurance Maladie : Agir ensemble, protéger chacun : Risques Professionnels"
		);
	});

	it("renders correctly with ariaLabel", () => {
		const wrapper = shallowMount(Logo, {
			propsData: {
				risquePro: true,
				ariaLabel: "test",
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.vm.label).toBe("test");
	});
});
