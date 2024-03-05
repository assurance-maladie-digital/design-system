import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import FilterModule from "../";
import DialogBox from "../../../elements/DialogBox";

describe("FilterModule", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FilterModule, {
			global: {
				plugins: [vuetify],
			},
			stubs: {
				DialogBox,
			},
			propsData: {
				filters: [],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
