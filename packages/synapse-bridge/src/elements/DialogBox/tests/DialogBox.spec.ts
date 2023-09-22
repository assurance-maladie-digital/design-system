import { VueWrapper, shallowMount } from "@vue/test-utils";

import DialogBox from "../";

let wrapper: VueWrapper<any>;

describe("DialogBox", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(DialogBox);

		expect(wrapper).toMatchSnapshot();
	});
});
