import { describe, it, expect, vi, afterEach } from "vitest";
import { shallowMount } from "@vue/test-utils";

import FileUpload from "../";
import { vuetify } from "@tests/unit/setup";

const file = new File([""], "filename", { type: "text/html" });

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

	it("renders correctly in multiple mode", () => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				multiple: true,
				modelValue: [file, file],
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
				modelValue: file,
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

	it('accepts drag and drop', () => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
		});

		const mockDropHandler= vi.fn();
		const dropHandler = wrapper.vm.dropHandler;
		wrapper.vm.dropHandler = mockDropHandler;

		wrapper.find('input').trigger('drop');
		expect(mockDropHandler).toHaveBeenCalled();

		wrapper.vm.dropHandler = dropHandler;
	});

	it('change the style when dragging', async() => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
		});

		const label = wrapper.find('label');
		const labelClasses = label.classes();

		await wrapper.find('input').trigger('dragover');
		expect(label.classes()).not.toEqual(labelClasses);

		await wrapper.find('input').trigger('dragleave');
		expect(label.classes()).toEqual(labelClasses);
	});

	it('call the mixin when the input value changes', async() => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
		});

		const mockInputValueChanged = vi.fn();
		const inputValueChanged = wrapper.vm.inputValueChanged;
		wrapper.vm.inputValueChanged = mockInputValueChanged;

		await wrapper.find('input').trigger('change');
		expect(mockInputValueChanged).toHaveBeenCalled();

		wrapper.vm.inputValueChanged = inputValueChanged;
	});

	it('retries the upload of a file', () => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
		});

		const mockRetry = vi.fn();
		wrapper.vm.retry = mockRetry;

		wrapper.vm.retry();

		expect(mockRetry).toHaveBeenCalled();
	});

	it('clicks the input', () => {
		const wrapper = shallowMount(FileUpload, {
			global: {
				plugins: [vuetify],
			},
		});

		const mockClick = vi.fn();
		wrapper.vm.$refs.vdInputEl.click = mockClick;

		wrapper.vm.retry();

		expect(mockClick).toHaveBeenCalled();
	});
});

