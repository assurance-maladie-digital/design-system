import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import RangeField from "../";

describe("RangeField", () => {
	it("renders correctly", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [50, 80],
				min: 0,
				max: 100,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with outlined prop", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [50, 80],
				outlined: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with value null", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: null,
			},
		});

		expect(wrapper.vm.rangeValue).toStrictEqual([0, 0]);
	});

	it("renders correctly with value NaN", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [NaN, NaN],
				min: 0,
				max: 100,
			},
		});

		expect(wrapper.vm.rangeValue).toStrictEqual([]);
	});

	it("renders correctly minValue computed", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [50, 80],
				min: 0,
				max: 100,
			},
		});

		expect(wrapper.vm.minValue).toEqual(50);
	});

	it("renders correctly with value < min", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [0, 100],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateRange(0, -10);

		expect(wrapper.vm.rangeValue[0]).toEqual(0);
	});

	it("renders correctly with value > max", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [0, 100],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateRange(1, 110);

		expect(wrapper.vm.rangeValue[1]).toEqual(100);
	});

	it("renders correctly with min value > max", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [50, 80],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateRange(0, 110);

		expect(wrapper.vm.rangeValue[0]).toEqual(80);
	});

	it("renders correctly with max value < min", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [50, 80],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateRange(1, -10);

		expect(wrapper.vm.rangeValue[1]).toEqual(50);
	});

	it("renders correctly maxValue computed", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [50, 80],
				min: 0,
				max: 100,
			},
		});

		expect(wrapper.vm.maxValue).toEqual(80);
	});

	it("renders correctly mobileVersion computed", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [50, 80],
				min: 0,
				max: 100,
			},
		});

		expect(wrapper.vm.mobileVersion).toEqual(false);
	});

	it("renders correctly with updateMinValue function", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [0, 100],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateMinValue('50');

		expect(wrapper.vm.rangeValue).toEqual([50, 100]);
	});

	it("renders correctly updateMaxValue function", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [0, 100],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateMaxValue('90');

		expect(wrapper.vm.rangeValue).toEqual([0, 90]);
	});

	it("renders correctly updateRange function", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [0, 100],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateRange(0, 90);

		expect(wrapper.vm.rangeValue).toEqual([90, 100]);
	});

	it("renders correctly setRangeValue function", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [0, 100],
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.setRangeValue(0, 90);
		wrapper.vm.setRangeValue(1, 95);

		expect(wrapper.vm.rangeValue[0]).toEqual(90);
		expect(wrapper.vm.rangeValue[1]).toEqual(95);
	});

	it("renders correctly with change event", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [0, 100],
			},
		});

		wrapper.vm.updateRange(0, 50);

		expect(wrapper.emitted()).toHaveProperty("update:modelValue");
	});

	it("renders correctly with emitChangeEvent function", () => {
		const wrapper = mount(RangeField, {
			global: {
				plugins: [vuetify],
			},
		});

		wrapper.vm.emitChangeEvent();

		expect(wrapper.emitted()).toHaveProperty("update:modelValue");
	});
});
