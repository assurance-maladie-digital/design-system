import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import { defineComponent } from "vue";

import { Field } from "../../types";

import { FieldComponent } from "../fieldComponent";

const testField = {
	type: "text",
	value: null,
	fieldOptions: {
		label: "Field",
		outlined: true,
	},
};

/** Create the wrapper */
function createWrapper(field: Field) {
	const component = defineComponent("TestComponent", {
		mixins: [FieldComponent],
		template: "<div />",
	});

	return shallowMount(component, {
		propsData: {
			field,
		},
	}) as Wrapper<FieldComponent>;
}

describe("fieldComponent", () => {
	it("emits change event", async () => {
		const wrapper = createWrapper(testField);

		wrapper.vm.emitChangeEvent(testField.value);

		await Vue.nextTick();

		expect(wrapper.emitted("change")).toBeTruthy();
	});

	it("emits change event without fieldOptions", async () => {
		const wrapper = createWrapper({
			...testField,
			fieldOptions: undefined,
		});

		wrapper.vm.emitChangeEvent(testField.value);

		await Vue.nextTick();

		expect(wrapper.emitted("change")).toBeTruthy();
	});
});
