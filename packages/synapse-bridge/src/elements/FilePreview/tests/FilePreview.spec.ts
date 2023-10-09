import { describe, it, expect, vi, beforeEach } from "vitest";
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

describe("FilePreview", async () => {
	let wrapper: any;
	global.URL.createObjectURL = vi.fn();

	beforeEach(() => {
		wrapper = shallowMount(FilePreview, {
			global: {
				plugins: [vuetify],
			}
		});
	});

	it("renders correctly with an image", async () => {
		await wrapper.setProps({ file: testFileImg });

		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly with a pdf", async () => {
		await wrapper.setProps({ file: testFilePdf });

		expect(wrapper).toMatchSnapshot();
	});

	it("render corectly with a file that is not an image or pdf", async () => {
		await wrapper.setProps({
			file: {
				name: "document.txt",
				size: 1000,
				type: "text/plain",
			} as File
		});

		expect(wrapper.text()).toContain(locales.previewTypeNotAvailable);
	});

	it("updates the preveiw when the file changes", async () => {
		await wrapper.setProps({ file: testFileImg, });

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
		expect(wrapper.text()).toBe("");
	});

	it("returns true when the file is a pdf", async () => {
		await wrapper.setProps({ file: testFilePdf });

		expect(wrapper.vm.isPdf).toBe(true);
	});

	it("returns false when the file is not a pdf", async () => {
		await wrapper.setProps({ file: testFileImg });

		expect(wrapper.vm.isPdf).toBe(false);
	});

	it("returns true when the file is an image", async () => {
		await wrapper.setProps({ file: testFileImg });

		expect(wrapper.vm.isImage).toBe(true);
	});

	it("returns false when the file is not an image", async () => {
		await wrapper.setProps({ file: testFilePdf });

		expect(wrapper.vm.isImage).toBe(false);
	});

	it("returns false when the file is undefined", async () => {
		await wrapper.setProps({ file: undefined });

		expect(wrapper.vm.isImage).toBe(false);
		expect(wrapper.vm.isPdf).toBe(false);
	});

	it("with options", async () => {
		await wrapper.setProps({
			file: testFileImg,
			options: {
				image: {
					alt: 'Photo de paysage montagneux du site Picsum.'
				}
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it("filePreviewOptions returns", async () => {
		await wrapper.setProps({
			file: testFileImg,
			options: {
				image: {
					alt: 'Photo de paysage montagneux du site Picsum.'
				}
			}
		});

		expect(wrapper.vm.filePreviewOptions).toStrictEqual({
			image: {
				alt: 'Photo de paysage montagneux du site Picsum.',
				style: 'width: 100%;'
			},
			pdf: {
				height: '556px',
				width: '100%'
			},

		});
	});

	it("getFileURL is called when the file changes", async () => {
		const getFileURL = vi.spyOn(wrapper.vm, "getFileURL");

		await wrapper.setProps({ file: testFileImg });

		expect(getFileURL).toHaveBeenCalled();
		expect(getFileURL).toHaveReturnedWith(undefined);
	});

	it("getFileURL return false when the file is undefined", async () => {
		const getFileURL = vi.spyOn(wrapper.vm, "getFileURL");

		await wrapper.setProps({ file: undefined });
		wrapper.vm.getFileURL();

		expect(getFileURL).toHaveBeenCalled();
		expect(getFileURL).toHaveReturnedWith(undefined);
	});

	it("revokes the file URL when the component is destroyed", async () => {
		const revokeFileURL = vi.spyOn(wrapper.vm, "revokeFileURL");
		await wrapper.setProps({ file: testFileImg });

		const mockRevokeObjectURL = vi.fn();
		const originalRevokeObjectURL = URL.revokeObjectURL;

		URL.revokeObjectURL = mockRevokeObjectURL;

		wrapper.vm.revokeFileURL();
		wrapper.unmount();

		expect(mockRevokeObjectURL).toHaveBeenCalled();
		expect(revokeFileURL).toHaveBeenCalled();
		expect(revokeFileURL).toHaveReturnedWith(undefined);


		// Restore the original implementation after the test
		URL.revokeObjectURL = originalRevokeObjectURL;
	});
});
