import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CookiesTable from "../";

import { cookies } from "../../tests/data/cookiesList";

describe("CookiesTable", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(CookiesTable, {
			propsData: {
				items: cookies,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
