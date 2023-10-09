import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FileList from "../";

const files = [
	{
		id: "0",
		title: "test",
		state: "success",
	},
];

describe("FileList", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FileList, {
			propsData: {
				files,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
