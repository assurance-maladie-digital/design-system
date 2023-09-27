import { VueWrapper, shallowMount } from "@vue/test-utils";

import HeaderLoading from "../";

let wrapper: VueWrapper<any>;

describe("HeaderLoading", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(HeaderLoading, {
			propsData: {
				label: "test",
				textToCopy: "test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
