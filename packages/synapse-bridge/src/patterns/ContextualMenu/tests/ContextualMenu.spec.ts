import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import ContextualMenu from "../";

describe("ContextualMenu", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(ContextualMenu, {
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
			global: {
				mocks: {
					$route: {
						hash: "",
					},
				},
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
