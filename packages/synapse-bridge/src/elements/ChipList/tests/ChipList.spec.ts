import { VueWrapper, shallowMount } from "@vue/test-utils";

import ChipList from "../";

let wrapper: VueWrapper<any>;

describe("ChipList", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(ChipList);

		expect(wrapper).toMatchSnapshot();
	});
});
