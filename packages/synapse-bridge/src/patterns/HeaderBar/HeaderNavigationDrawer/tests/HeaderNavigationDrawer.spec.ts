import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderNavigationDrawer from "../";
import { ThemeEnum } from "../../ThemeEnum";

describe("HeaderNavigationDrawer", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderNavigationDrawer, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
