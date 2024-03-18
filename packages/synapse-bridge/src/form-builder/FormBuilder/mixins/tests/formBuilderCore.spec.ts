import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import { FormBuilderCore } from "../formBuilderCore";
import { Field } from "../../../FormField/types";
import { Form } from "../../types";

const testField: Field = {
	type: "text",
	value: null,
	fieldOptions: {
		label: "Test",
	},
};

const testForm: Form = {
	section1: {
		questions: {
			field1: testField,
		},
	},
};

const updatedTestForm: Form = {
	section1: {
		questions: {
			field1: {
				...testField,
				value: "test",
			},
		},
	},
};

const updatedField = updatedTestForm.section1.questions;

/** Create the wrapper */
function createWrapper(form: Form) {
	const component = defineComponent({
		mixins: [
			FormBuilderCore
		],
		template: '<div />'
	});

	return shallowMount(component, {
		propsData: {
			form,
		},
	});
}

describe("formBuilderCore", () => {
	it("emits change event", async () => {
		const wrapper = createWrapper(testForm);

		wrapper.vm.sectionUpdated(updatedField, "section1");

		await wrapper.vm.$nextTick();

		const event = wrapper.emitted("change") || [];

		expect(event[0][0]).toEqual(updatedTestForm);
	});
});
