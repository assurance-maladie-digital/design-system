import { VueWrapper, shallowMount } from "@vue/test-utils";
import { defineComponent } from "vue";
import deepMerge from "deepmerge";

import { customizable, Options } from "../";

interface TestComponent {
	vuetifyOptions: Options;
	options: Options;
}

const DEFAULT_OPTIONS = {
	test: {
		a: "a",
	},
};

const CUSTOM_OPTIONS = {
	test: {
		b: "b",
	},
};

/** Create the test component */
function createTestComponent() {
	return defineComponent({
		mixins: [customizable(DEFAULT_OPTIONS)],
		template: '<div v-bind="options.test" />',
	});
}

describe("customizable", () => {
	it("merges correctly default and custom options into a computed property", () => {
		const testComponent = createTestComponent();

		const wrapper = shallowMount(testComponent, {
			props: {
				vuetifyOptions: CUSTOM_OPTIONS,
			},
		}) as VueWrapper<TestComponent>;

		const merged = deepMerge<Options>(DEFAULT_OPTIONS, CUSTOM_OPTIONS);

		expect(wrapper.vm.options).toEqual(merged);
	});
});
