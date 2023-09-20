import { VueWrapper, shallowMount } from "@vue/test-utils";

import BackToBtn from "../";

let wrapper: VueWrapper<any>;

describe("BackToBtn", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(BackToBtn);

		expect(wrapper).toMatchSnapshot();
	});
});
