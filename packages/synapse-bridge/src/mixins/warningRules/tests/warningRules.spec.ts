import { defineComponent } from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { WarningRules } from "../";

/** Create the wrapper */
function createWrapper() {
	const component = defineComponent( {
		name: "TestComponent",
		mixins: [WarningRules],
		template: "<div />",
	});

	return shallowMount(component, {
		propsData: {
			warningRules: [
				// Required rule
				(value) => Boolean(value) || "error",
			],
		},
	});
}

describe("WarningRules", () => {
	it("validates the value correctly on error", () => {
		const wrapper = createWrapper();

		wrapper.vm.validate("");

		expect(wrapper.vm.messages[0]).toBe("error");
	});

	it("validates the value correctly on success", () => {
		const wrapper = createWrapper();

		wrapper.vm.validate("test");

		expect(wrapper.vm.messages[0]).toBeUndefined();
	});
});
