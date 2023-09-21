import { defineComponent } from "vue";
import { VueWrapper, shallowMount } from "@vue/test-utils";

import { GetThemeIcon } from "../";

const VD_OPTIONS = {
	theme: {
		icons: {
			test: "icon-src",
		},
	},
};

const mocks = {
	$vd: VD_OPTIONS,
};

const mountOptions = {
	mocks,
};

/** Create the test component */
function createTestComponent() {
	return defineComponent({
		mixins: [GetThemeIcon],
		template: "<div />",
	});
}

describe("GetThemeIcon", () => {
	it("returns the icon", () => {
		const testComponent = createTestComponent();

		const wrapper = shallowMount(
			testComponent,
			mountOptions
		) as unknown as VueWrapper<any>;

		expect(typeof wrapper.vm.getThemeIcon("test")).toBe("string");
	});

	it("returns undefined if the icon does not exists", () => {
		const testComponent = createTestComponent();

		const wrapper = shallowMount(
			testComponent,
			mountOptions
		) as unknown as VueWrapper<any>;

		expect(wrapper.vm.getThemeIcon("")).toBeUndefined();
	});

	it("returns undefined if $vd doe not exists", () => {
		const testComponent = createTestComponent();

		const wrapper = shallowMount(testComponent) as VueWrapper<any>;

		expect(wrapper.vm.getThemeIcon("test")).toBeUndefined();
	});
});
