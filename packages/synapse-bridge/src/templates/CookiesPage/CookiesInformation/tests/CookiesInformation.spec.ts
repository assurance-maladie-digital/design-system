import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CookiesInformation from "../";

import { cookies } from "../../tests/data/cookiesList";
import { TypeEnum } from "../TypeEnum";

describe("CookiesInformation", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(CookiesInformation, {
			propsData: {
				tableItems: cookies,
				type: TypeEnum.FUNCTIONAL,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
