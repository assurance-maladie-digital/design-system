import { defineComponent } from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import WarningRules from "../";

interface TestComponent {
	validate: (value: string) => void;
	successMessages: string[];
}

/** Create the wrapper */
function createWrapper() {
	const component = defineComponent("TestComponent", {
		mixins: [WarningRules],
		template: "<div />",
	});

	return shallowMount(component, {
		propsData: {
			warningRules: [
				// Required rule
				(value: string) => Boolean(value) || "error",
			],
		},
	});
}

describe("WarningRules", () => {
	it("validates the value correctly on error", () => {
		const wrapper = createWrapper();

		wrapper.vm.validate("");

		expect(wrapper.vm.successMessages[0]).toBe("error");
	});

	it("validates the value correctly on success", () => {
		const wrapper = createWrapper();

		wrapper.vm.validate("test");

		expect(wrapper.vm.successMessages[0]).toBeUndefined();
	});
});
