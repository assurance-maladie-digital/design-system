import { test, snapshot } from "vitest";
import { createApp, h, mergeProps } from "vue";
import { mount } from "@vue/test-utils";
import deepMerge from "deepmerge";

import { customizable, Options } from "../";

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
	return createApp({
		mixins: [customizable(DEFAULT_OPTIONS)],
		render() {
			return h("div", mergeProps(this.options.test));
		},
	}).mount("#app");
}

test("customizable - merges correctly default and custom options into a computed property", () => {
	const testComponent = createTestComponent();

	const wrapper = mount(testComponent, {
		props: {
			vuetifyOptions: CUSTOM_OPTIONS,
		},
	});

	const merged = deepMerge<Options>(DEFAULT_OPTIONS, CUSTOM_OPTIONS);

	snapshot(wrapper);
	expect(wrapper.vm.options).toStrictEqual(merged);
});
