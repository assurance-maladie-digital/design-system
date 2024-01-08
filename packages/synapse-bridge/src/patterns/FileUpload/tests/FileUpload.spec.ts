import { describe, it, expect, vi, afterEach } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FileUpload from "../";
import { vuetify } from "@tests/unit/setup";

describe("FileUpload", () => {
	const consoleMock = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

	afterEach(() => {
		consoleMock.mockReset();
	});

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

	it("do not accept invalid props", () => {
		shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				// @ts-expect-error
				modelValue: [null],
			},
		});

		const mockArg: null | string = consoleMock.mock.calls?.[0]?.[0];
		expect(mockArg).toContain("[Vue warn]: Invalid prop: custom validator check failed for prop \"modelValue\"");
	});
});
