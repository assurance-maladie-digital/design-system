import { defineComponent } from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import { RatingMixin, RatingMixinInterface } from "../RatingMixin";

/** Create the test component */
function createTestComponent() {
	return defineComponent('TestComponent', {
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

		const wrapper = shallowMount(testComponent, {
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

		const wrapper = shallowMount(testComponent, {
			propsData: {
				label,
				length: 10,
			},
			global: {
				plugins: [vuetify],
			},
		});

		wrapper.vm.emitInputEvent(3);

		await wrapper.vm.$nextTick(); // Wait until $emits have been handled

		expect(wrapper.emitted("input")).toBeTruthy();
		expect(wrapper.emitted("input")?.pop()).toEqual([3]);
	});
});
