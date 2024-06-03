import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { vuetify } from "@tests/unit/setup";

import UploadWorkflow from "../";

describe("UploadWorkflow", () => {
	const createWrapper = (props = {}) => shallowMount(UploadWorkflow, {
		props,
		global: { plugins: [vuetify] },
	});

	it("renders correctly when unrestricted is true", () => {
		const wrapper = createWrapper({ unrestricted: true });
		expect(wrapper.vm.showFileUpload).toBe(true);
	});

	it("renders correctly when unrestricted is false and has non validated files", () => {
		const wrapper = createWrapper({ unrestricted: false });
		wrapper.vm.internalFileListItems = [{ id: 'some-id', title: 'some-title', state: 'error' }];
		expect(wrapper.vm.showFileUpload).toBe(true);
	});

	it("returns correct title when sectionTitle is defined", () => {
		const wrapper = createWrapper({ sectionTitle: "Test Title" });
		expect(wrapper.vm.computedTitle).toBe("Test Title");
	});

	it("returns importTitle when internalFileListItems is empty", () => {
		const wrapper = createWrapper();
		wrapper.vm.internalFileListItems = [];
		expect(wrapper.vm.computedTitle).toBe(wrapper.vm.locales.importTitle);
	});

	it("returns title for multiple items when internalFileListItems has more than one item", () => {
		const wrapper = createWrapper();
		wrapper.vm.internalFileListItems = [{ id: 'some-id', title: 'some-title', state: 'error' }, { id: 'some-id2', title: 'some-title2', state: 'error' }];
		expect(wrapper.vm.computedTitle).toBe(wrapper.vm.locales.title(true));
	});

	it("returns title for single item when internalFileListItems has one item", () => {
		const wrapper = createWrapper();
		wrapper.vm.internalFileListItems = [{ id: 'some-id', title: 'some-title', state: 'error' }];
		expect(wrapper.vm.computedTitle).toBe(wrapper.vm.locales.title(false));
	});

	it("returns correct title when sectionTitle is defined", () => {
		const wrapper = createWrapper({ sectionTitle: "Test Title" });
		expect(wrapper.vm.computedTitle).toBe("Test Title");
	});

	it("returns false when unrestricted is true", () => {
		const wrapper = createWrapper({ showViewBtn: true });
		expect(wrapper.vm.displayShowViewBtn).toBe(true);
	});

	it("method uploadInline is called", () => {
		const wrapper = createWrapper();
		const spy = vi.spyOn(wrapper.vm, 'uploadInline');
		wrapper.vm.uploadInline("0");
		expect(spy).toHaveBeenCalled();
	});

	it("showFileList returns false when unrestricted is true", () => {
		const wrapper = createWrapper({ unrestricted: true });
		expect(wrapper.vm.showFileList).toBe(false);
	});

	it("showFileList returns false when internalFileListItems is empty", () => {
		const wrapper = createWrapper();
		wrapper.vm.internalFileListItems = [];
		expect(wrapper.vm.showFileList).toBe(false);
	});

	it("showFileUpload returns true when unrestricted is true", () => {
		const wrapper = createWrapper({ unrestricted: true });
		expect(wrapper.vm.showFileUpload).toBe(true);
	});

	it("updates slotTitleContent when modal-title slot is provided", () => {
		const slotContent = "Test Title";
		const wrapper = shallowMount(UploadWorkflow, {
			global: { plugins: [vuetify] },
			slots: {
				'modal-title': slotContent
			}
		});

		expect(wrapper.vm.slotTitleContent).toEqual(slotContent);
	});
});
