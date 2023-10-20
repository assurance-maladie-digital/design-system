import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { defineComponent } from "vue";

import { Widthable } from "../";

interface TestComponent {
	widthStyles: Record<string, string>;
}

/** Create the test component */
function createTestComponent() {
	defineComponent("TestComponent", {
		mixins: [Widthable],
		template: "<div />",
	});
}

describe("Widthable", () => {
	it("computes the default styles", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent) as unknown as TestComponent;

		expect(wrapper.widthStyles).toMatchSnapshot();
	});

	it("computes the styles when width is null", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent, {
			propsData: {
				width: null,
			},
		});

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});

	it("computes the styles when min-width is defined", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent, {
			propsData: {
				minWidth: "512px",
			},
		}) as unknown as TestComponent;

		expect(wrapper.widthStyles).toMatchSnapshot();
	});

	it("computes the styles when max-width is defined", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent, {
			propsData: {
				maxWidth: "512px",
			},
		}) as unknown as TestComponent;

		expect(wrapper.widthStyles).toMatchSnapshot();
	});
});
