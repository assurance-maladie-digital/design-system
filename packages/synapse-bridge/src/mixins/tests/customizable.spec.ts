import { defineComponent } from "vue";
import { shallowMount } from "@vue/test-utils";
import deepMerge from "deepmerge";

import customizable from "../customizable";
import { Options } from "../types";

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

export default defineComponent({
	name: "TestComponent",
	extends: createTestComponent(),
});

describe("customizable", () => {
	it("merges correctly default and custom options into a computed property", () => {
		const testComponent = createTestComponent();

		const wrapper = shallowMount(testComponent, {
			props: {
				vuetifyOptions: CUSTOM_OPTIONS,
			},
		});

		const merged = deepMerge<Options>(DEFAULT_OPTIONS, CUSTOM_OPTIONS);

		expect(wrapper.vm.options).toEqual(merged);
	});
});
