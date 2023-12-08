import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import RangeField from "../";

describe("RangeField", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				value: [50, 80],
				min: 0,
				max: 100,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with updateMinValue function", () => {
		const wrapper = shallowMount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateMinValue(50);

		expect(wrapper.vm.rangeValue).toEqual([50, 100]);
	});

	it("renders correctly updateMaxValue function", () => {
		const wrapper = shallowMount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateMaxValue(90);

		expect(wrapper.vm.rangeValue).toEqual([0, 90]);
	});

	it("renders correctly updateRange function", () => {
		const wrapper = shallowMount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.updateRange(0, 90);

		expect(wrapper.vm.rangeValue).toEqual([90, 100]);
	});

	it("renders correctly setRangeValue function", () => {
		const wrapper = shallowMount(RangeField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				min: 0,
				max: 100,
			},
		});

		wrapper.vm.setRangeValue(0, 90);

		expect(wrapper.vm.rangeValue[0]).toEqual(90);
	});
});
