import { VueWrapper, shallowMount } from "@vue/test-utils";

import DownloadBtn from "../";

let wrapper: VueWrapper<any>;

describe("DownloadBtn", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(DownloadBtn, {
			propsData: {
				label: "test",
				textToCopy: "test",
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
