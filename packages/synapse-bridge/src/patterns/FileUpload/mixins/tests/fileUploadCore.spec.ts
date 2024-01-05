import { defineComponent } from "vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";

import FileUploadCore from "../fileUploadCore";
import type { HTMLInputEvent } from "../../types";


interface DropEvent {
	files?: File[] | null;
	items?: {
		file: File | null;
	};
	kind?: string;
}

const component = defineComponent( {
	name: 'TestComponent',
	mixins: [FileUploadCore],
	template: '<input ref="vdInputEl" type="file">',
});

const file = {
	size: 1000,
	type: "image/png",
	name: "avatar.png",
} as File;

/** Create a DragEvent with files or items */
function getFileDropEvent({ files, items, kind }: DropEvent): DragEvent {
	if (files) {
		return {
			dataTransfer: {
				files: files,
			},
		} as unknown as DragEvent;
	}

	if (items) {
		return {
			dataTransfer: {
				items: [
					{
						kind,
						getAsFile: () => items.file,
					},
				],
			},
		} as unknown as DragEvent;
	}

	return {
		dataTransfer: {},
	} as DragEvent;
}

describe("FileUploadCore", () => {
	// inputValueChanged
	it("does not emits update event if there is no event target", () => {
		const wrapper = mount(component);

		const event = {} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted("change")).toBeFalsy();
	});

	it("calls self reset function", () => {
		const wrapper = shallowMount(component, {
			mocks: {
				selfReset: vi.fn(),
			},
		});

		const event = {
			target: {},
		} as HTMLInputEvent;

		const selfReset = vi.spyOn(wrapper.vm, "selfReset");

		wrapper.vm.inputValueChanged(event);

		expect(selfReset).toHaveBeenCalled();
	});

	it("does not emits update event if there is no files in event target", () => {
		const wrapper = shallowMount(component);

		const event = {
			target: {},
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted("change")).toBeFalsy();
	});

	it("does not emits update event if files is an empty array", () => {
		const wrapper = shallowMount(component);

		const event = {
			target: {
				files: [] as unknown,
			},
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted("change")).toBeFalsy();
	});

	it("does not emits update event if there are too many files", () => {
		const wrapper = shallowMount(component, {
			mocks: {
				ifTooManyFiles: () => true,
			},
		});

		const event = {
			target: {
				files: [file, file] as unknown,
			},
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted("update:modelValue")).toBeFalsy();
	});

	it("emits update event when the file is valid", () => {
		const wrapper = shallowMount(component);

		const event = {
			target: {
				files: [file] as unknown,
			},
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
	});

	// emitChangeEvent
	it("emits update event when no there is no error", () => {
		const wrapper = shallowMount(component);

		wrapper.setData({
			error: false,
			files: [file],
		});

		wrapper.vm.emitChangeEvent();

		const event = wrapper.emitted("update:modelValue") || [];

		expect(event[0][0]).toEqual(file);
	});

	it("emits update event when no there is no error in multiple mode", () => {
		const wrapper = shallowMount(component, {
			propsData: {
				multiple: true,
			},
		});

		wrapper.setData({
			error: false,
			files: [file, file],
		});

		wrapper.vm.emitChangeEvent();

		const event = wrapper.emitted("update:modelValue");

		expect(event?.[0]?.[0]).toEqual([file, file]);
	});

	it("does not emits update event when there is an error", () => {
		const wrapper = shallowMount(component);

		wrapper.setData({
			error: true,
		});

		wrapper.vm.emitChangeEvent();

		expect(wrapper.emitted("update:modelValue")).toBeFalsy();
		expect(wrapper.vm.$refs.vdInputEl.value).toBe("");
	});

	// dropHandler
	it("does not emits update event when there is no data", async () => {
		const wrapper = shallowMount(component);

		const fileDropEvent = {} as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted("update:modelValue")).toBeFalsy();
	});

	it("validates the files and emits update event if there is files in the event", async () => {
		const wrapper = shallowMount(component);

		const fileDropEvent = getFileDropEvent({
			files: [file],
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
	});

	it("does not emits update event if there are too many files", async () => {
		const wrapper = shallowMount(component, {
			mocks: {
				ifTooManyFiles: () => true,
			},
		});

		const fileDropEvent = getFileDropEvent({
			files: [file, file],
		});

		wrapper.setProps({
			multiple: false,
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted("update:modelValue")).toBeFalsy();
	});

	it("validates the files and emits update event if there are items in the event", () => {
		const wrapper = shallowMount(component);

		const fileDropEvent = getFileDropEvent({
			items: {
				file,
			},
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
	});

	it('emits update event if there are items in the event with the kind "file"', () => {
		const wrapper = shallowMount(component);

		const fileDropEvent = getFileDropEvent({
			items: {
				file,
			},
			kind: "file",
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted("update:modelValue")).toBeTruthy();
	});

	it("does not emits update event if there are items in the event which are not files", () => {
		const wrapper = shallowMount(component);

		const fileDropEvent = getFileDropEvent({
			items: {
				file: null,
			},
			kind: "file",
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted("update:modelValue")).toBeFalsy();
	});

	// selfReset
	it("resets state properly", () => {
		const wrapper = shallowMount(component);

		wrapper.setData({
			dragover: true,
		});

		wrapper.vm.selfReset();

		expect(wrapper.vm.dragover).toBe(false);
		expect(wrapper.vm.files).toStrictEqual([]);
		expect(wrapper.vm.error).toBe(false);
	});
});
