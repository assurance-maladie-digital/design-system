import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FileUpload from "../";
import { vuetify } from "@tests/unit/setup";

describe("FileUpload", () => {
	it("renders correctly", () => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with only one extension allowed", () => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				allowedExtensions: ["pdf"],
			},
		});

		expect(wrapper).toMatchSnapshot();
	});
});
