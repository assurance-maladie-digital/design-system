import { VueWrapper, shallowMount } from "@vue/test-utils";

import BackBtn from "../";

let wrapper: VueWrapper<any>;

describe("BackBtn", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(BackBtn);

		expect(wrapper).toMatchSnapshot();
	});
});
