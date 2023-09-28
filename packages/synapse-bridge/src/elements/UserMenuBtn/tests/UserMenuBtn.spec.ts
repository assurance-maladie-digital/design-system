import { VueWrapper, shallowMount } from "@vue/test-utils";

import UserMenuBtn from "../";

let wrapper: VueWrapper<any>;

describe("UserMenuBtn", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(UserMenuBtn, {
			propsData: {
				fullName: "Firstname Lastname",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
