import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FilePreview from "../";
import { vuetify } from "@tests/unit/setup";
import { locales } from "../locales";

const testFileImg = {
	name: "avatar.png",
	size: 1000,
	type: "image/png",
} as File;

const testFilePdf = {
	name: "document.pdf",
	size: 1000,
	type: "application/pdf",
} as File;

describe("FilePreview", () => {
	global.URL.createObjectURL = vi.fn();

	it("renders correctly with an image", () => {
		const wrapper = shallowMount(FilePreview, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				file: testFileImg,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a pdf", () => {
		const wrapper = shallowMount(FilePreview, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				file: testFilePdf,
			},
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("render corectly with a file that is not an image or pdf", () => {
		const wrapper = shallowMount(FilePreview, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				file: {
					name: "document.txt",
					size: 1000,
					type: "text/plain",
				} as File,
			},
		});

		expect(wrapper.text()).toContain(locales.previewTypeNotAvailable);
	});

	it("updates the preveiw when the file changes", async () => {
		const wrapper = shallowMount(FilePreview, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				file: testFileImg,
			},
		});

		expect(wrapper.find("img").exists()).toBe(true);

		await wrapper.setProps({
			file: testFilePdf,
		});

		expect(wrapper.find("img").exists()).toBe(false);
		expect(wrapper.find("object").exists()).toBe(true);

		await wrapper.setProps({
			file: null,
		});

		expect(wrapper.find("img").exists()).toBe(false);
		expect(wrapper.find("object").exists()).toBe(false);
		expect(wrapper.text()).toBe('');
	});
});
