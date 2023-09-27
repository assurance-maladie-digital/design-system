import { VueWrapper, shallowMount } from "@vue/test-utils";

import SkipLink from "../";

let wrapper: VueWrapper<any>;

describe("SkipLink", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(SkipLink);

		expect(wrapper).toMatchSnapshot();
	});
});
