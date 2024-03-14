import { defineComponent } from "vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import { RatingMixin } from "../RatingMixin";

/** Create the test component */
function createTestComponent() {
	return defineComponent( {
		mixins: [
			RatingMixin
		],
		template: '<div />'
	});
}

describe("RatingMixin", () => {
	const label = "Pouvez-vous nous en dire plus ?";

	it("verifies props", () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label,
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.props().label).toBe(label);
		expect(wrapper.props().readonly).toBeFalsy();
	});

	it("emits input event", async () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				label,
			},
			global: {
				plugins: [vuetify],
			},
		});

		wrapper.vm.emitInputEvent(3);

		await wrapper.vm.$nextTick(); // Wait until $emits have been handled

		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
		expect(wrapper.emitted("update:modelValue")?.pop()).toEqual([3]);
	});
});
