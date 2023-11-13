import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FilePreview from "../";

const testFile = {
	name: "avatar.png",
	size: 1000,
	type: "image/png",
} as File;

describe("FilePreview", () => {
	global.URL.createObjectURL = vi.fn();

	it("renders correctly", () => {
		const wrapper = shallowMount(FilePreview, {
			propsData: {
				file: testFile,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
