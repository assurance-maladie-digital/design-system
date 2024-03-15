import { describe, it, expect } from "vitest";
import {mount} from "@vue/test-utils";

import LogoBrandSection from "../";
import { ThemeEnum } from "@/constants/enums/ThemeEnum";
import { vuetify } from '@tests/unit/setup'

describe("LogoBrandSection", () => {
	it("renders correctly", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
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
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
			},
		});

		expect(wrapper.vm.service.title).toBe("Service Title");
	});

	it("renders correctly with service computed", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.COMPTE_ENTREPRISE,
			},
		});

		expect(wrapper.vm.service.title).toStrictEqual({ text: "Compte", highlight: "entreprise" });
	});

	it("renders correctly with height", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
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

	it("renders correctly with showServiceSubTitle", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
			},
		});

		expect(wrapper.vm.showServiceSubTitle).toBe(true);
	});

	it("renders correctly with no showServiceSubTitle", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				serviceTitle: "Service Title",
				serviceSubTitle: "",
			},
		});

		expect(wrapper.vm.showServiceSubTitle).toBe(false);
	});

	it("renders correctly with default theme", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
			},
		});

		expect(wrapper.vm.dividerColor).toBe("#0c419a");
	});

	it("renders correctly with cnam theme", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.CNAM,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
			},
		});

		expect(wrapper.vm.dividerColor).toBe("#006386");
	});

	it("renders correctly with compte entreprise theme", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.COMPTE_ENTREPRISE,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
			},
		});

		expect(wrapper.vm.dividerColor).toBe("#cd545b");
	});

	it("renders correctly with risquePro", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				reduceLogo: true,
			},
		});

		expect(wrapper.vm.isRisquePro).toBe(false);
	});

	it("renders correctly with risquePro if no reduceLogo", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				reduceLogo: false,
				theme: ThemeEnum.RISQUE_PRO,
			}
		});

		expect(wrapper.vm.isRisquePro).toBe(true);
	});

	it("renders correctly with isCompteEntreprise", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.COMPTE_ENTREPRISE,
			},
		});

		expect(wrapper.vm.theme).toBe(ThemeEnum.COMPTE_ENTREPRISE);
	});

	it("renders correctly with isCompteAmeliMobile", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.COMPTE_AMELI,
				mobileVersion: true,
			},
		});

		expect(wrapper.vm.isCompteAmeliMobile).toBe(true);
		expect(wrapper.vm.theme).toBe(ThemeEnum.COMPTE_AMELI);
		expect(wrapper.vm.mobileVersion).toBe(true);
	});

	it("renders correctly with hideSignature", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				reduceLogo: true,
			},
		});

		expect(wrapper.vm.hideSignature).toBe(true);
	});

	it("renders correctly without hideSignature", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				reduceLogo: false,
			},
		});

		expect(wrapper.vm.hideSignature).toBe(false);
	});

	it("renders correctly with secondaryLogo", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.COMPTE_AMELI,
			},
		});

		expect(wrapper.vm.hasSecondaryLogo).toBe(true);
	});

	it("renders correctly with logoContainerComponent", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				homeHref: "#",
			},
		});

		expect(wrapper.vm.logoContainerComponent).toBe("a");
	});

	it("renders correctly RouterLink with logoContainerComponent", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				homeLink: "/",
			}
		});

		expect(wrapper.vm.logoContainerComponent).toBe("router-link");
	});

	it("renders correctly with logoContainerComponent", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				homeLink: false,
			},
		});

		expect(wrapper.vm.logoContainerComponent).toBe("div");
	});

	it("renders correctly with secondaryLogoCtnComponent", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper.vm.secondaryLogoCtnComponent).toBe("div");
	});

	it("renders correctly with secondaryLogoCtnComponent", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
			},
		});

		wrapper.setData({ hasSecondaryLogoLink: true });
		expect(wrapper.vm.secondaryLogoCtnComponent).toBe("router-link");
	});

	it("renders correctly with secondaryLogoCtnComponent when hasSecondaryLogoLink is false", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		wrapper.setData({ hasSecondaryLogoLink: false });
		expect(wrapper.vm.secondaryLogoCtnComponent).toBe("div");
	});

	it("renders correctly with secondaryLogoLabel", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
			},
		});

		expect(wrapper.vm.secondaryLogoLabel).toBe("Accueil, AmeliPro");
	});

	it("renders correctly with no secondaryLogoLabel", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper.vm.secondaryLogoLabel).toBe(null);
	});

	it("renders correctly with no avatar", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo", "Avatar"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				reduceLogo: false,
			},
		});

		expect(wrapper.vm.avatar).toBe(false);
	});

	it("renders correctly with avatar", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo", "Avatar"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.AMELI,
				reduceLogo: true,
			},
		});

		expect(wrapper.vm.avatar).toBe(true);
	});

	it("renders correctly with dividerColor", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo", "Avatar"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
				mobileVersion: true,
			},
		});

		expect(wrapper.vm.dividerColor).toBe("#006386");
	});

	it("renders correctly with dividerDimensions", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.AMELI_PRO,
				mobileVersion: true,
			},
		});

		expect(wrapper.vm.dividerDimensions.width).toBe("11");
	});

	it("renders correctly with normal dividerDimensions", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper.vm.dividerDimensions.width).toBe("22");
	});

	it("renders correctly with small dividerDimensions", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		expect(wrapper.vm.dividerDimensions.width).toBe("14");
	});

	it("renders correctly with x-small dividerDimensions", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.AMELI,
				mobileVersion: true,
			}
		});

		expect(wrapper.vm.dividerDimensions.width).toBe("11");
	});

	it("renders correctly with normal logoSize", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
		});

		expect(wrapper.vm.logoSize).toBe("normal");
	});

	it("renders correctly with small logoSize", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				mobileVersion: true,
			}
		});

		expect(wrapper.vm.logoSize).toBe("small");
	});

	it("renders correctly with x-small logoSize", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify]
			},
			propsData: {
				theme: ThemeEnum.AMELI,
				mobileVersion: true,
			},
		});

		expect(wrapper.vm.logoSize).toBe("x-small");
	});

	it("renders correctly with showDivider and no reduce logo", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.AMELI,
				reduceLogo: false,
			},
		});

		expect(wrapper.vm.showDivider).toBe(true);
	});

	it("renders correctly with showDivider and reduce logo", () => {
		const wrapper = mount(LogoBrandSection, {
			stubs: ["RouterLink", "Logo"],
			global: {
				plugins: [vuetify],
			},
			propsData: {
				reduceLogo: true,
			},
		});

		expect(wrapper.vm.showDivider).toBe(false);
	});
});
