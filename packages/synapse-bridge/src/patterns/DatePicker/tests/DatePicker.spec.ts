import Vue from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import DatePicker from "../";

/** Create fake VTextField for refs */
function createTextField() {
	return Vue.component('VTextField', {
		data() {
			return {
				hasError: false,
				hasFocused: false
			};
		},
		methods: {
			validate() {
				return null;
			}
		},
		template: '<div />'
	});
}

describe("DatePicker", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(
			DatePicker,
			{
				stubs: {
					textField: createTextField(),
				},
			},
		);

		expect(wrapper).toMatchSnapshot();
	});
});
