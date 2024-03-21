import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import FooterBar from "../";
import { vuetify } from "@tests/unit/setup";

import { locales } from "../locales";
import { A11yComplianceEnum } from '../A11yComplianceEnum';


describe("FooterBar", () => {
	it("renders correctly", () => {
		const wrapper = mount(
			{
				components: { FooterBar },
				template: `<VApp><FooterBar /></VApp>`,
			}, {
			global: {
				plugins: [vuetify],
			},
			stubs: ["RouterLink"],
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it("hide the links when the pros are sets", () => {
		const wrapper = mount({
			components: { FooterBar },
			template: `
				<VApp>
					<FooterBar
						:hideSitemapLink="true"
						:hideCguLink="true"
						:hideCookiesLink="true"
						:hideLegalNoticeLink="true"
						:hideA11yLink="true"
						:hideLogo="true"
						:hideSocialMediaLinks="true"
					>
						content
					</FooterBar>
				</VApp>`,
		}, {
			global: {
				plugins: [vuetify],
				stubs: ["Logo", "SocialMediaLinks"],
			},
		});

		expect(wrapper.html()).not.toContain(locales.sitemapLabel);
		expect(wrapper.html()).not.toContain(locales.cguLabel);
		expect(wrapper.html()).not.toContain(locales.cookiesLabel);
		expect(wrapper.html()).not.toContain(locales.legalNoticeLabel);
		expect(wrapper.html()).not.toContain(locales[A11yComplianceEnum.NON_COMPLIANT]);
		expect(wrapper.find("logo-stub").exists()).toBe(false);
		expect(wrapper.find("socialmedialinks-stub").exists()).toBe(false);
	});

	it("show all the items", () => {
		const wrapper = mount({
			components: { FooterBar },
			template: `
				<VApp>
					<FooterBar>
						content
					</FooterBar>
				</VApp>`,
		}, {
			global: {
				plugins: [vuetify],
				stubs: ["Logo", "SocialMediaLinks"],
			},
		});

		expect(wrapper.html()).toContain(locales.sitemapLabel);
		expect(wrapper.html()).toContain(locales.cguLabel);
		expect(wrapper.html()).toContain(locales.cookiesLabel);
		expect(wrapper.html()).toContain(locales.legalNoticeLabel);
		expect(wrapper.html()).toContain(locales[A11yComplianceEnum.NON_COMPLIANT]);
		expect(wrapper.find("logo-stub").exists()).toBe(true);
		expect(wrapper.find("social-media-links-stub").exists()).toBe(true);
	});

	it("show the provided list of links", () => {
		const wrapper = mount({
			components: { FooterBar },
			template: `
				<VApp>
					<FooterBar
						:linkItems="[
							{ label: 'link1', href: 'link1' },
							{ label: 'link2', href: 'link2' },
							{ label: 'link3', href: 'link3', openInNewTab: true }
						]"
					>
						content
					</FooterBar>
				</VApp>`,
		}, {
			global: {
				plugins: [vuetify],
				stubs: ["Logo", "SocialMediaLinks"],
			},
		});

		wrapper.vm.$vuetify.display.name = "sm";
		wrapper.vm.$vuetify.display.smAndDown = true;

		expect(wrapper.html()).toContain("link1");
		expect(wrapper.html()).toContain("link2");
		expect(wrapper.html()).toContain("link3");
	});

	it("call window.scrollTo when the button is clicked", () => {
		const scrollTo = vi.fn();
		window.scrollTo = scrollTo;

		const wrapper = mount({
			components: { FooterBar },
			template: `
				<VApp>
					<FooterBar>
						content
					</FooterBar>
				</VApp>`,
		}, {
			global: {
				plugins: [vuetify],
				stubs: ["Logo", "SocialMediaLinks"],
			},
		});

		wrapper.find("button").trigger("click");
		expect(scrollTo).toHaveBeenCalled();
	});

	it("render the version number", () => {
		const wrapper = mount({
			components: { FooterBar },
			template: `
				<VApp>
					<FooterBar
						version="v1.0.0"
					>
						content
					</FooterBar>
				</VApp>`,
		}, {
			global: {
				plugins: [vuetify],
				stubs: ["Logo", "SocialMediaLinks"],
			},
		});

		expect(wrapper.html()).toContain(locales.versionLabel + " v1.0.0");
	});
});
