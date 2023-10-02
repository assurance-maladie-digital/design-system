import { VueWrapper, shallowMount } from "@vue/test-utils";

import ContextualMenu from "../";

let wrapper: VueWrapper<any>;

describe("ContextualMenu", () => {
	it("renders correctly", () => {
		wrapper = shallowMount(ContextualMenu, {
			propsData: {
				items: [
					{
						text: "Titre 1",
						hash: "#example-1",
					},
					{
						text: "Titre 2",
						hash: "#example-2",
					},
				],
			},
			mocks: {
				$route: {
					hash: "",
				},
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
