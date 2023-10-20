import { defineComponent } from "vue";
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import { FileListItem } from "../../types";

import UpdateFileModel from "../updateFileModel";

const testComponent = defineComponent( {
	name: "TestComponent",
	mixins: [UpdateFileModel],
	template: "<div/>",
});

/** Get list of files */
function getFileList(): FileListItem[] {
	return [
		{
			id: 'file1',
			title: 'UploadWorkflow',
			name: 'avatar.png',
			file: {} as File
		}
	];
}

describe("updateFileModel", () => {
	it("inits the file list", () => {
		const wrapper = shallowMount(testComponent);

		wrapper.vm.initFileList(getFileList());

		expect(wrapper.vm.fileList).toMatchSnapshot();
	});

	it("does not overwrite existing state", () => {
		const wrapper = shallowMount(testComponent);

		const fileListState = getFileList();
		fileListState[0].state = "success";

		wrapper.vm.initFileList(fileListState);

		expect(wrapper.vm.fileList).toMatchSnapshot();
	});

	it("returns undefined if the file does not exists", () => {
		const wrapper = shallowMount(testComponent);

		wrapper.vm.fileList = getFileList();

		expect(
			wrapper.vm.updateFileModel(1, "state", "initial")
		).toBeUndefined();
	});

	it("deletes the key if the value is undefined", () => {
		const wrapper = shallowMount(testComponent);

		wrapper.vm.fileList = getFileList();

		wrapper.vm.updateFileModel(0, "name", undefined);

		expect(wrapper.vm.fileList[0]).toMatchSnapshot();
	});

	it("updates the value of the corresponding key", () => {
		const wrapper = shallowMount(testComponent);

		wrapper.vm.fileList = getFileList();

		wrapper.vm.updateFileModel(0, "state", "updated");

		expect(wrapper.vm.fileList[0].state).toBe("updated");
	});
});
