import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FilePreview from "../";
import { vuetify } from "@tests/unit/setup";

const testFile = {
	name: "avatar.png",
	size: 1000,
	type: "image/png",
} as File;

describe("FilePreview", () => {
	global.URL.createObjectURL = vi.fn();

	it("renders correctly", () => {
		const wrapper = shallowMount(FilePreview, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				file: testFile,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
