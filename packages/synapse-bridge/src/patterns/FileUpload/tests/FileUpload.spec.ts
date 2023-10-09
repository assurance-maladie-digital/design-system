import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FileUpload from "../";

describe("FileUpload", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FileUpload);

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with only one extension allowed", () => {
		const wrapper = shallowMount(FileUpload, {
			propsData: {
				allowedExtensions: ["pdf"],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
