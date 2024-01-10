
import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";

import DatePicker from "../";
import { vuetify } from "@tests/unit/setup";

describe("DatePicker", () => {
	it("renders correctly", () => {
		const wrapper = mount(
			DatePicker,
			{
				global: {
					plugins: [
						vuetify,
					],
				},
				propsData: {
					modelValue: "2021-01-01",
				},
			},
		);

		expect(wrapper).toMatchSnapshot();
	});
});

