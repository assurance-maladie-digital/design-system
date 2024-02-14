import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import HeaderNavigationBar from "../";
import {ThemeEnum} from "@/constants/enums/ThemeEnum.ts";

describe("HeaderNavigationBar", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(HeaderNavigationBar, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
