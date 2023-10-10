import Vue from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import LogoBrandSection from "../";
import { ThemeEnum } from "../../../constants/enums/ThemeEnum";

describe("LogoBrandSection", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(LogoBrandSection, {
			stubs: ["RouterLink"],
			propsData: {
				theme: ThemeEnum.DEFAULT,
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
