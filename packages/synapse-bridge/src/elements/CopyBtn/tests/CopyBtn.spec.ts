import { VueWrapper, shallowMount } from "@vue/test-utils";

import CopyBtn from "../";

let wrapper: VueWrapper<any>;

describe("CopyBtn", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(CopyBtn, {
			propsData: {
				label: "test",
				textToCopy: "test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
