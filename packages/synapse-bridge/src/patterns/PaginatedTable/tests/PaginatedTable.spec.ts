import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import PaginatedTable from "../";

describe("PaginatedTable", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(PaginatedTable, {
			propsData: {
				options: {},
				serverItemsLength: 0
			},
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
