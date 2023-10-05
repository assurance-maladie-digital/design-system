import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "../../../../tests/unit/setup";

import ChipList from "../";

describe("ChipList", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(ChipList, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
