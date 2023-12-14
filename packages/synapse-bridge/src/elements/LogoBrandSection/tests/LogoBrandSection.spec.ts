import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import LogoBrandSection from "../";
import { ThemeEnum } from "../../../constants/enums/ThemeEnum";

describe("LogoBrandSection", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
				mobileVersion: false,
				reduceLogo: false,
				homeLink: "/",
				homeHref: "#",
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with service computed", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
				mobileVersion: false,
				reduceLogo: false,
				homeLink: "/",
				homeHref: "#",
			},
		});

		expect(wrapper.vm.service.title).toBe("Service Title");
	});

	it("renders correctly with height", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
				mobileVersion: false,
				reduceLogo: false,
				homeLink: "/",
				homeHref: "#",
			},
		});

		expect(wrapper.vm.height).toBe("64px");
	});

	it("renders correctly with isRisquePro", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				reduceLogo: true,
			},
		});

		expect(wrapper.vm.isRisquePro).toBe(false);
	});

	it("renders correctly with isCompteEntreprise", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.COMPTE_ENTREPRISE,
			},
		});

		expect(wrapper.vm.theme).toBe(ThemeEnum.COMPTE_ENTREPRISE);
	});

	it("renders correctly with isCompteAmeliMobile", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.COMPTE_AMELI,
				mobileVersion: true,
			},
		});

		expect(wrapper.vm.theme).toBe(ThemeEnum.COMPTE_AMELI);
	});

	it("renders correctly with hideSignature", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				reduceLogo: true,
			},
		});

		expect(wrapper.vm.hideSignature).toBe(true);
	});

	it("renders correctly with secondaryLogo", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.COMPTE_AMELI,
			},
		});

		expect(wrapper.vm.hasSecondaryLogo).toBe(true);
		expect(wrapper.vm.secondaryLogo.src).toBe(
			"../../assets/images/compte-ameli.svg"
		);
	});

	it("renders correctly with logoContainerComponent", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				homeHref: "#",
			},
		});

		expect(wrapper.vm.logoContainerComponent).toBe("a");
	});

	it("renders correctly with logoContainerComponent", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				homeLink: "/",
			},
		});

		wrapper.vm.isNuxt = false;

		expect(wrapper.vm.logoContainerComponent).toBe("router-link");
	});

	it("renders correctly with logoContainerComponent", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				homeLink: false,
			},
		});

		expect(wrapper.vm.logoContainerComponent).toBe("div");
	});

	it("renders correctly with secondaryLogoCtnComponent", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper.vm.secondaryLogoCtnComponent).toBe("div");
	});

	it("renders correctly with secondaryLogoCtnComponent", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
			},
		});

		wrapper.vm.hasSecondaryLogoLink = true;

		expect(wrapper.vm.secondaryLogoCtnComponent).toBe("router-link");
	});

	it("renders correctly with secondaryLogoLabel", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
			},
		});

		expect(wrapper.vm.secondaryLogoLabel).toBe("Accueil, AmeliPro");
	});

	it("renders correctly with dividerDimensions", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
				mobileVersion: true,
			},
		});

		wrapper.vm.hasSecondaryLogo = true;

		expect(wrapper.vm.dividerDimensions.width).toBe("11");
	});

	it("renders correctly with dividerDimensions", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		wrapper.vm.hasSecondaryLogo = false;

		expect(wrapper.vm.dividerDimensions.width).toBe("14");
	});
});
