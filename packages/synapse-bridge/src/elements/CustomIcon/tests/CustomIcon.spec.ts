import { VueWrapper, shallowMount } from "@vue/test-utils";

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

let wrapper: VueWrapper<any>;

describe("CustomIcon", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(CustomIcon, {
			mocks,
			propsData: {
				icon: "test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a custom size", () => {
		wrapper = shallowMount(CustomIcon, {
			mocks,
			propsData: {
				icon: "test",
				size: "64px",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
