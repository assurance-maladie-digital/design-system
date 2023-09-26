import { VueWrapper, shallowMount } from "@vue/test-utils";

import ExternalLinks from "../";

let wrapper: VueWrapper<any>;

describe("ExternalLinks", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(ExternalLinks, {
			propsData: {
				position: "top left",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
