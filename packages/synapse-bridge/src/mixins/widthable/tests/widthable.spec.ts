import { defineComponent } from "vue";
import { shallowMount } from "@vue/test-utils";

import { Widthable } from "../";

interface TestComponent extends Vue {
	widthStyles: Record<string, string>;
}

/** Create the test component */
function createTestComponent() {
	return Vue.component('TestComponent', {
		mixins: [
			Widthable
		],
		template: '<div />'
	});
}

describe("Widthable", () => {
	it("computes the default styles", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});

	it("computes the styles when width is null", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent, {
			propsData: {
				width: null,
			},
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});

	it("computes the styles when min-width is defined", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent, {
			propsData: {
				minWidth: "512px",
			},
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});

	it("computes the styles when max-width is defined", () => {
		const testComponent = createTestComponent();
		const wrapper = shallowMount(testComponent, {
			propsData: {
				maxWidth: "512px",
			},
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.widthStyles).toMatchSnapshot();
	});
});
