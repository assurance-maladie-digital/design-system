import { defineComponent } from "vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import FileValidation from "../fileValidation";

const component = defineComponent( {
	name: "TestComponent",
	mixins: [FileValidation],
	template: "<div />",
});

const file = {
	size: 1000,
	type: "image/png",
	name: "avatar.png",
} as File;

describe("FileValidation", () => {
	// computedAccept
	it("computes the default accept string", () => {
		const wrapper = shallowMount(component);

		expect(wrapper.vm.computedAccept).toBe(".pdf,.jpg,.jpeg,.png");
	});

	it("returns the accept prop value is provided", () => {
		const wrapper = shallowMount(component, {
			propsData: {
				accept: ".pdf",
			},
		});

		expect(wrapper.vm.computedAccept).toBe(".pdf");
	});

	// validateFile
	it("returns true if the file is valid", () => {
		const wrapper = shallowMount(component);

		expect(wrapper.vm.validateFile(file)).toBe(true);
		expect(wrapper.vm.files).toStrictEqual([file]);
	});

	it("returns false if the file is too large", () => {
		const wrapper = shallowMount(component, {
			propsData: {
				fileSizeMax: 500,
			},
		});

		expect(wrapper.vm.validateFile(file)).toBe(false);
		expect(wrapper.emitted("error")).toBeTruthy();
	});

	it("returns false if the extension is not allowed", () => {
		const wrapper = shallowMount(component, {
			propsData: {
				allowedExtensions: ["pdf"],
			},
		});

		expect(wrapper.vm.validateFile(file)).toBe(false);
		expect(wrapper.emitted("error")).toBeTruthy();
	});

	// ifTooManyFiles
	it("returns false if there is only one file", () => {
		const wrapper = shallowMount(component);

		const files = [file] as unknown as FileList;

		expect(wrapper.vm.ifTooManyFiles(files)).toBe(false);
		expect(wrapper.emitted("error")).toBeFalsy();
	});

	it("returns true if there is more than one file", () => {
		const wrapper = shallowMount(component);

		const files = [file, file] as unknown as FileList;

		expect(wrapper.vm.ifTooManyFiles(files)).toBe(true);
		expect(wrapper.emitted("error")).toBeTruthy();
	});
});

