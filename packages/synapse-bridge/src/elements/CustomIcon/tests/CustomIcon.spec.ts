import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CustomIcon from "../";

const VD_OPTIONS = {
	theme: {
		icons: {
			test: "icon-src",
		},
	},
};

const mocks = {
	$vd: VD_OPTIONS,
};

describe("CustomIcon", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(CustomIcon, {
			mocks,
			propsData: {
				icon: "test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a custom size", () => {
		const wrapper = shallowMount(CustomIcon, {
			mocks,
			propsData: {
				icon: "test",
				size: "64px",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
