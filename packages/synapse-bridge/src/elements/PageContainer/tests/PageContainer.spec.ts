import { VueWrapper, shallowMount } from "@vue/test-utils";

import PageContainer from "../";

let wrapper: VueWrapper<any>;

describe("PageContainer", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(PageContainer);

		expect(wrapper).toMatchSnapshot();
	});
});
