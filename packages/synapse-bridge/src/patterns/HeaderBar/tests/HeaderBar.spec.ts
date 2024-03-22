import {describe, it, expect, vi, afterEach} from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import { ThemeEnum } from "@/constants/enums/ThemeEnum";
import { vuetify } from "@tests/unit/setup";
import HeaderBar from "../";
import HeaderMenuBtn from "@/patterns/HeaderBar/HeaderMenuBtn/HeaderMenuBtn.vue";

const commonMountOptions = {
	global: {
		plugins: [vuetify],
	},
};

describe("HeaderBar render", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});
	const createWrapper = (propsData = {}) => shallowMount(HeaderBar, {
		...commonMountOptions,
		propsData: {
			...propsData
		}
	});

	it("renders correctly", () => {
		const wrapper = createWrapper();
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with mobile-version", () => {
		const wrapper = createWrapper({ mobileVersion: true });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with mini version", () => {
		const wrapper = createWrapper({ miniVersion: true });
		expect(wrapper.vm.isMiniVersion).toBe(true);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with mini version and sticky", () => {
		const wrapper = createWrapper({ sticky: true, miniVersion: false});
		wrapper.vm.scrolled = true;
		expect(wrapper.vm.isMiniVersion).toBe(true);
	});

	it("renders correctly with target", () => {
		const wrapper = createWrapper({ target: "exampleTarget" });
		expect(wrapper).toMatchSnapshot();
	});

	it('contentSheetHeight returns 52 when isMiniVersion', () => {
		const wrapper = createWrapper({ miniVersion: true });
		expect(wrapper.vm.contentSheetHeight).toBe(52);
	});

	it("contentSheetHeight returns 120 when isMiniVersion is false", () => {
		const wrapper = createWrapper({ miniVersion: false });
		expect(wrapper.vm.contentSheetHeight).toBe(120);
	});

	it('contentSheetHeight returns 72 when isMiniVersion is false and isMobileVersion is true', () => {
		const wrapper = createWrapper({ miniVersion: false, mobileVersion: true});
		expect(wrapper.vm.contentSheetHeight).toBe(72);
	});

	it("contentSheetHeight returns 52 when isMiniVersion is true and isMobileVersion is true", () => {
		const wrapper = createWrapper({ miniVersion: true, mobileVersion: true });
		expect(wrapper.vm.contentSheetHeight).toBe(52);
	});

	it("contentSheetHeight returns 72 when isMiniVersion is false and sticky is true", () => {
		const wrapper = createWrapper({ miniVersion: false, sticky: true});
		wrapper.vm.scrolled = true;
		expect(wrapper.vm.contentSheetHeight).toBe(72);
	});

	it("height returns 72 when isMobileVersion is true", () => {
		const wrapper = createWrapper({ mobileVersion: true });
		expect(wrapper.vm.height).toBe(72);
	});

	it("height returns 120 when isMobileVersion is false", () => {
		const wrapper = createWrapper({ mobileVersion: false });
		expect(wrapper.vm.height).toBe(120);
	});

	it("height returns 168 if sticky and scrolled", () => {
		const wrapper = createWrapper();
		wrapper.setData({ scrolled: true, showStickyNavBar: true, showHeaderMenuBtn: false, hasNavigationItems: true });
		expect(wrapper.vm.height).toBe(168);
	});

	it("renders correctly with theme", () => {
		const wrapper = createWrapper({ theme: ThemeEnum.AMELI_PRO });
		expect(wrapper).toMatchSnapshot();
	});

	it("fullHeight returns 72 isMobileVersion is true", () => {
		const wrapper = createWrapper({ mobileVersion: true });
		expect(wrapper.vm.fullHeight).toBe(72);
	});

	it("fullHeight returns 120 isMobileVersion is false", () => {
		const wrapper = createWrapper({ mobileVersion: false });
		expect(wrapper.vm.fullHeight).toBe(120);
	});

	it("fullHeight returns 168 if sticky + nav", () => {
		const wrapper = createWrapper();
		wrapper.setData({ scrolled: true, showStickyNavBar: true, showHeaderMenuBtn: false, hasNavigationItems: true });
		expect(wrapper.vm.fullHeight).toBe(168);
	});

	it("renders correctly with title and subtitle", () => {
		const wrapper = createWrapper({ serviceTitle: "Title", serviceSubTitle: "Subtitle" });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with navigation-items", () => {
		const navigationItems = [
			{ label: "Item 1", href: "#" },
			{ label: "Item 2", href: "#" },
		];
		const wrapper = createWrapper({ navigationItems });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with inner-width", () => {
		const wrapper = createWrapper({ innerWidth: "1000" });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with home-link", () => {
		const homeLink = { href: "#", label: "Home" };
		const wrapper = createWrapper({ homeLink });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with home-href", () => {
		const wrapper = createWrapper({ homeHref: "#" });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with show-nav-bar-menu-btn", () => {
		const wrapper = createWrapper({ showNavBarMenuBtn: true });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with sticky mode and scrolled", () => {
		const wrapper = createWrapper({ sticky: true });
		wrapper.vm.scrolled = true;
		expect(wrapper).toMatchSnapshot();
	});

	it("returns true when scrolled is true, showStickyNavBar is true, showHeaderMenuBtn is false, and hasNavigationItems is true", () => {
		const wrapper = createWrapper();
		wrapper.setData({ scrolled: true, showStickyNavBar: true, showHeaderMenuBtn: false, hasNavigationItems: true });
		expect(wrapper.vm.showNavigationBar).toBe(true);
	});

	it("renders correctly with showNavBarMenuBtn on mobile version", () => {
		const wrapper = createWrapper({ showNavBarMenuBtn: true, mobileVersion: true });
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with custom target", () => {
		const wrapper = createWrapper({ target: "customTarget" });
		expect(wrapper).toMatchSnapshot();
	});

	it("updates drawer correctly", async () => {
		const wrapper = mount(HeaderBar, commonMountOptions);
		wrapper.vm.updateDrawer(true);
		expect(wrapper.vm.drawer).toBe(true);
	});

	it("computes showStickyNavBar correctly before scroll", () => {
		const wrapper = createWrapper();
		expect(wrapper.vm.showStickyNavBar).toBe(false);
	});

	it("computes showHeaderMenuBtn correctly", () => {
		const wrapper = createWrapper({ mobileVersion: true });
		expect(wrapper.vm.showHeaderMenuBtn).toBe(false);
	});

	it('returns margin-top with fullHeight when sticky is true', () => {
		const wrapper = createWrapper({ sticky: true });
		wrapper.setData({ fullHeight: 200 });
		expect(wrapper.vm.mainContentMargin).toBe('margin-top: 200px');
	});

	it('returns empty string when sticky is false', () => {
		const wrapper = createWrapper({ sticky: false });
		expect(wrapper.vm.mainContentMargin).toBe('');
	});

	it('returns true when isMobileVersion is true', () => {
		const wrapper = createWrapper({ mobileVersion: true });
		expect(wrapper.vm.showSpacer).toBe(true);
	});

	it('returns false when default slot is not provided and isMobileVersion is false', () => {
		const wrapper = createWrapper();
		expect(wrapper.vm.showSpacer).toBe(false);
	});

	it('returns false when default slot is provided and isMobileVersion is false', () => {
		const wrapper = createWrapper({ mobileVersion: false });
		expect(wrapper.vm.showSpacer).toBe(false);
	});

	it("renders HeaderMenuBtn when showHeaderMenuBtn is true", () => {
		const wrapper = createWrapper();
		wrapper.setData({  showHeaderMenuBtn: true });
		expect(wrapper.vm.showHeaderMenuBtn).toBe(true);
	});

	it("renders HeaderMenuBtn when showHeaderMenuBtn is false", () => {
		const wrapper = createWrapper();
		wrapper.setData({  showHeaderMenuBtn: false });
		expect(wrapper.vm.showHeaderMenuBtn).toBe(false);
	});

	it('does not render HeaderMenuBtn when showHeaderMenuBtn is false', () => {
		const wrapper = createWrapper();
		wrapper.setData({ showHeaderMenuBtn: false });
		expect(wrapper.findComponent(HeaderMenuBtn).exists()).toBe(false);
	});

	it('updates scrolled property when sticky is true and scroll position is greater than height', () => {
		const wrapper = createWrapper();
		Object.defineProperty(window, 'scrollY', { value: 100 });
		wrapper.setData({ sticky: true, height: 50 });
		wrapper.vm.onScroll({ currentTarget: window } as unknown as MouseEvent);
		expect(wrapper.vm.scrolled).toBe(true);
	});

	it('does not update scrolled property when sticky is false', () => {
		const wrapper = createWrapper();
		Object.defineProperty(window, 'scrollY', { value: 100 });
		wrapper.setData({ sticky: false });
		wrapper.vm.onScroll({ currentTarget: window } as unknown as MouseEvent);
		expect(wrapper.vm.scrolled).toBe(false);
	});

	it('does not update scrolled property when scroll position is less than or equal to height', () => {
		const wrapper = createWrapper();
		Object.defineProperty(window, 'scrollY', { value: 40 });
		wrapper.setData({ sticky: true, height: 50 });
		wrapper.vm.onScroll({ currentTarget: window } as unknown as MouseEvent);
		expect(wrapper.vm.scrolled).toBe(false);
	});

	it('does not update scrolled property when currentTarget is not window', () => {
		const wrapper = createWrapper();
		Object.defineProperty(window, 'scrollY', { value: 100 });
		wrapper.setData({ sticky: true, height: 50 });
		wrapper.vm.onScroll({ currentTarget: document } as unknown as MouseEvent);
		expect(wrapper.vm.scrolled).toBe(false);
	});

	it('returns null when target is not set', () => {
		const wrapper = createWrapper();
		expect(wrapper.vm.targetSelector).toBeNull();
	});

	it('returns the correct target selector when target is set', () => {
		const targetId = 'myTarget';
		const wrapper = createWrapper({ target: targetId });
		expect(wrapper.vm.targetSelector).toBe(`#${targetId}`);
	});

	it("renders correctly with spacingClass computed", () => {
		const wrapper = createWrapper();
		expect(wrapper.vm.spacingClass).toBe("px-14 py-7");
	});

	it("renders correctly with spacingClass computed with sticky", () => {
		const wrapper = createWrapper({ sticky: true });
		wrapper.vm.scrolled = true;
		expect(wrapper.vm.spacingClass).toBe("px-14 py-1");
	});

	it("renders correctly with spacingClass computed with sticky and mobile version", () => {
		const wrapper = createWrapper({ sticky: true, mobileVersion: true });
		wrapper.vm.scrolled = true;
		expect(wrapper.vm.spacingClass).toBe("px-4 py-1");
	});

	it("renders correctly with spacingClass computed with mobile version", () => {
		const wrapper = createWrapper({ mobileVersion: true });
		expect(wrapper.vm.spacingClass).toBe("pa-4");
	});

	it('render correctly with showHeaderMenuBtn computed property', () => {
		const wrapper = createWrapper();
		expect(wrapper.vm.showHeaderMenuBtn).toBe(false);
	});

	it('updateDrawer is called correctly', () => {
		const wrapper = createWrapper();
		wrapper.vm.updateDrawer(true);
		expect(wrapper.vm.drawer).toBe(true);
	});

	it('should update drawer when HeaderMenuBtn is clicked', async () => {
		const wrapper = mount(HeaderBar, {
			global: {
				plugins: [vuetify],
			},
			props: {
				showNavBarMenuBtn: false,
				mobileVersion: true,
				navigationItems: [
					{ label: "Item 1", href: "#" },
					{ label: "Item 2", href: "#" },
				],
				vuetifyOptions: {
					menuBtn: {
						color: "secondary",
					}
				}
			},
		})

		const headerMenuBtn = wrapper.findComponent(HeaderMenuBtn);
		await headerMenuBtn.trigger('click');

		expect(wrapper.vm.showHeaderMenuBtn).toBe(true);
		expect(wrapper.vm.drawer).toBe(true);
	});

	it('watch drawer true correctly and removes overflow-hidden class from html when value is false', async () => {
		const wrapper = createWrapper();
		wrapper.vm.drawer = true;
		await wrapper.vm.$nextTick();
		const htmlContent = document.querySelector('html')?.classList.value;
		expect(htmlContent).toContain('overflow-hidden');
		wrapper.vm.drawer = false;
		await wrapper.vm.$nextTick();
		const htmlContent2 = document.querySelector('html')?.classList.value;
		expect(htmlContent2).not.toContain('overflow-hidden');
	});
});
