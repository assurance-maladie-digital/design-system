import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import LogoBrandSection from "../";
import { ThemeEnum } from "@/constants/enums/ThemeEnum";
import { vuetify } from '@tests/unit/setup';
const mountLogoBrandSection = (propsData = {}) => {
	return shallowMount(LogoBrandSection, {
		stubs: ["RouterLink", "Logo"],
		global: {
			plugins: [vuetify]
		},
		propsData: {
			theme: ThemeEnum.DEFAULT,
			...propsData,
		},
	});
};

describe('LogoBrandSection', () => {
	it("renders correctly", () => {
		const wrapper = mountLogoBrandSection({
			serviceTitle: "Service Title",
			serviceSubTitle: "Service Sub Title",
			mobileVersion: false,
			reduceLogo: false,
			homeLink: "/",
			homeHref: "#",
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	it("renders correctly with service computed", () => {
		const wrapper = mountLogoBrandSection({
			serviceTitle: "Service Title",
			serviceSubTitle: "Service Sub Title",
		});
		expect(wrapper.vm.service.title).toBe("Service Title");
		expect(wrapper.vm.service.subTitle).toBe("Service Sub Title");
	});

	it("renders correctly with service computed", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.COMPTE_ENTREPRISE,
		});
		expect(wrapper.vm.service.title).toStrictEqual({ text: "Compte", highlight: "entreprise" });
	});

	it("renders correctly with height", () => {
		const wrapper = mountLogoBrandSection({
			serviceTitle: "Service Title",
			serviceSubTitle: "Service Sub Title",
			mobileVersion: false,
			reduceLogo: false,
			homeLink: "/",
			homeHref: "#",
		});
		expect(wrapper.vm.height).toBe("64px");
	});

	it("renders correct height for mobile version with secondary logo", () => {
		const wrapper = mountLogoBrandSection({
			mobileVersion: true,
			theme: ThemeEnum.AMELI_PRO,
		});
		const sheetElement = wrapper.find(".vd-logo-brand-section");
		expect(sheetElement.attributes("height")).toBe("32px");
	});

	it("renders correct height for mobile version without secondary logo", () => {
		const wrapper = mountLogoBrandSection({
			mobileVersion: true,
		});
		const sheetElement = wrapper.find(".vd-logo-brand-section");
		expect(sheetElement.attributes("height")).toBe("40px");
	});

	it("renders correctly with showServiceSubTitle", () => {
		const wrapper = mountLogoBrandSection({
			serviceTitle: "Service Title",
			serviceSubTitle: "Service Sub Title",
		});
		expect(wrapper.vm.showServiceSubTitle).toBe(true);
	});

	it("renders correctly with no showServiceSubTitle", () => {
		const wrapper = mountLogoBrandSection({
			serviceTitle: "Service Title",
			serviceSubTitle: "",
		});
		expect(wrapper.vm.showServiceSubTitle).toBe(false);
	});

	it("renders correctly with default theme", () => {
		const wrapper = mountLogoBrandSection({
			serviceTitle: "Service Title",
			serviceSubTitle: "Service Sub Title",
		});
		expect(wrapper.vm.dividerColor).toBe("#0c419a");
	});

	it("renders correctly with cnam theme", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.CNAM,
			serviceTitle: "Service Title",
			serviceSubTitle: "Service Sub Title",
		});
		expect(wrapper.vm.dividerColor).toBe("#006386");
	});

	it("renders correctly with compte entreprise theme", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.COMPTE_ENTREPRISE,
			serviceTitle: "Service Title",
			serviceSubTitle: "Service Sub Title",
		});
		expect(wrapper.vm.dividerColor).toBe("#cd545b");
	});

	it("renders correctly with risquePro", () => {
		const wrapper = mountLogoBrandSection({
			reduceLogo: true,
		});
		expect(wrapper.vm.isRisquePro).toBe(false);
	});

	it("renders correctly with risquePro if no reduceLogo", () => {
		const wrapper = mountLogoBrandSection({
			reduceLogo: false,
			theme: ThemeEnum.RISQUE_PRO,
		});
		expect(wrapper.vm.isRisquePro).toBe(true);
	});

	it("renders correctly with isCompteEntreprise", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.COMPTE_ENTREPRISE,
		});
		expect(wrapper.vm.theme).toBe(ThemeEnum.COMPTE_ENTREPRISE);
	});

	it("renders correctly with isCompteAmeliMobile", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.COMPTE_AMELI,
			mobileVersion: true,
		});
		expect(wrapper.vm.isCompteAmeliMobile).toBe(true);
		expect(wrapper.vm.theme).toBe(ThemeEnum.COMPTE_AMELI);
		expect(wrapper.vm.mobileVersion).toBe(true);
	});

	it("renders correctly with hideSignature", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			reduceLogo: true,
		});
		expect(wrapper.vm.hideSignature).toBe(true);
	});

	it("renders correctly without hideSignature", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			reduceLogo: false,
		});
		expect(wrapper.vm.hideSignature).toBe(false);
	});

	it("renders correctly with secondaryLogo", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.COMPTE_AMELI,
		});
		expect(wrapper.vm.hasSecondaryLogo).toBe(true);
	});

	it("renders correctly with logoContainerComponent", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			homeHref: "#",
		});
		expect(wrapper.vm.logoContainerComponent).toBe("a");
	});

	it("renders correctly RouterLink with logoContainerComponent", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			homeLink: "/",
		});
		wrapper.vm.isNuxt = false;
		expect(wrapper.vm.logoContainerComponent).toBe("router-link");
	});

	it("renders correctly RouterLink with logoContainerComponent", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			homeLink: "/",
		});
		wrapper.vm.isNuxt = true;
		expect(wrapper.vm.logoContainerComponent).toBe("nuxt-link");
	});

	it("renders correctly with logoContainerComponent", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			homeLink: false,
		});
		expect(wrapper.vm.logoContainerComponent).toBe("div");
	});

	it("renders correctly with secondaryLogoCtnComponent", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
		});
		expect(wrapper.vm.secondaryLogoCtnComponent).toBe("div");
	});

	it("renders correctly with secondaryLogoCtnComponent", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.AMELI_PRO,
		});
		wrapper.vm.hasSecondaryLogoLink = true;
		expect(wrapper.vm.secondaryLogoCtnComponent).toBe("router-link");
	});

	it("renders correctly with secondaryLogoLabel", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.AMELI_PRO,
		});
		expect(wrapper.vm.secondaryLogoLabel).toBe("Accueil, AmeliPro");
	});

	it("renders correctly with no secondaryLogoLabel", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
		});
		expect(wrapper.vm.secondaryLogoLabel).toBe(null);
	});

	it("renders correctly with no avatar", () => {
		const wrapper = mountLogoBrandSection({
			reduceLogo: false,
		});
		expect(wrapper.vm.avatar).toBe(false);
	});

	it("renders correctly with avatar", () => {
		const wrapper = mountLogoBrandSection({
			reduceLogo: true,
		});
		wrapper.vm.hasSecondaryLogo = true;
		expect(wrapper.vm.avatar).toBe(true);
	});

	it("renders correctly with dividerColor", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.AMELI_PRO,
			mobileVersion: true,
		});
		expect(wrapper.vm.dividerColor).toBe("#006386");
	});

	it("renders correctly with dividerDimensions", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.AMELI_PRO,
			mobileVersion: true,
		});
		wrapper.vm.hasSecondaryLogo = true;
		expect(wrapper.vm.dividerDimensions.width).toBe("11");
	});

	it("renders correctly with normal dividerDimensions", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
		});
		expect(wrapper.vm.dividerDimensions.width).toBe("22");
	});

	it("renders correctly with small dividerDimensions", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			mobileVersion: true,
		});
		expect(wrapper.vm.dividerDimensions.width).toBe("14");
	});

	it("renders correctly with x-small dividerDimensions", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			mobileVersion: true,
		});
		wrapper.vm.hasSecondaryLogo = true;
		expect(wrapper.vm.dividerDimensions.width).toBe("11");
	});

	it("renders correctly with normal logoSize", () => {
		const wrapper = mountLogoBrandSection();
		expect(wrapper.vm.logoSize).toBe("normal");
	});

	it("renders correctly with small logoSize", () => {
		const wrapper = mountLogoBrandSection({
			mobileVersion: true,
		});
		expect(wrapper.vm.logoSize).toBe("small");
	});

	it("renders correctly with x-small logoSize", () => {
		const wrapper = mountLogoBrandSection({
			mobileVersion: true,
		});
		wrapper.vm.hasSecondaryLogo = true;
		expect(wrapper.vm.logoSize).toBe("x-small");
	});

	it("renders correctly with showDivider and no reduce logo", () => {
		const wrapper = mountLogoBrandSection({
			reduceLogo: false,
		});
		wrapper.vm.hasSecondaryLogo = true;
		expect(wrapper.vm.showDivider).toBe(true);
	});

	it("renders correctly with showDivider and reduce logo", () => {
		const wrapper = mountLogoBrandSection({
			reduceLogo: true,
		});
		expect(wrapper.vm.showDivider).toBe(false);
	});

	it("renders service sub title when showServiceSubTitle is true", () => {
		const wrapper = mount(LogoBrandSection, {
			global: {
				plugins: [vuetify],
			},
			props: {
				theme: ThemeEnum.DEFAULT,
				serviceTitle: "Service Title",
				serviceSubTitle: "Service Sub Title",
				mobileVersion: false,
				reduceLogo: false,
				homeLink: "/",
				homeHref: "#",
			},
		});
		const subTitleElement = wrapper.find(".subtitle");
		expect(subTitleElement.text()).toBe("Service Sub Title");
	});

	it("does not render service sub title when showServiceSubTitle is false", () => {
		const wrapper = mountLogoBrandSection({
			theme: ThemeEnum.DEFAULT,
			serviceTitle: "Service Title",
			serviceSubTitle: "",
			mobileVersion: false,
			reduceLogo: false,
			homeLink: "/",
			homeHref: "#",
		});
		const subTitleElement = wrapper.find(".vd-title.text-caption");
		expect(subTitleElement.exists()).toBe(false);
	});

	it("does not render secondary logo when secondaryLogo is not present", () => {
		const wrapper = mountLogoBrandSection();
		const secondaryLogoElement = wrapper.find(".vd-home-link img");
		expect(secondaryLogoElement.exists()).toBe(false);
	});

});
