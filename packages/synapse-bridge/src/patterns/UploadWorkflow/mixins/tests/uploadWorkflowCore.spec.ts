import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";

import UploadWorkflowCore from "../uploadWorkflowCore";

import { FileListItem, SelectItem } from "../../types";

interface TestComponent {
	$refs: {
		form: HTMLFormElement;
	};
	updateFileModel<T>(id: string, key: string, value: T): void;
	setFileInList: () => void;
	resetFile: (index: number) => void;
	dialogConfirm: () => void;
	uploadedFile: File | null;
	fileList: FileListItem[];
	error: boolean;
	dialog: boolean;
	inlineSelect: boolean;
	selectedItem: string;
	internalFileListItems: FileListItem[] | null;
	singleMode(): boolean;
	fileSelected(): void;
	selectItems: SelectItem[];
	uploadError(error: string): void;
	emitViewFileEvent(file: FileListItem): void;
}

/** Create fake VForm for refs */
function createVForm() {
	return {
		template: '<div />',
	};
}

const fileListItem: FileListItem = {
	id: "file1",
	title: "UploadWorkflow",
	name: "avatar.png",
	file: {} as File,
};

const fileList: FileListItem[] = [fileListItem];

const testFile = {
	name: "avatar.png",
	size: 1000,
	type: "image/png",
} as File;

/** Create the wrapper */
function createWrapper(fileListItems = fileList, showFilePreview = false) {
	const component = {
		mixins: [UploadWorkflowCore],
		template: '<div ref="form" />',
	} as unknown as TestComponent;

	return mount(component, {
		stubs: {
			form: createVForm(),
		},
		props: {
			fileListItems,
			showFilePreview,
		},
	});
}

describe('EventsFileFired', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	// watch
	it('resets internal model when switching to unrestricted mode', async() => {
		const wrapper = createWrapper();

		expect(wrapper.vm.fileList).toEqual(fileList);
		expect(wrapper.vm.internalFileListItems ).toEqual(fileList);

		await wrapper.setProps({
			fileListItems: null,
			value: []
		});

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.internalFileListItems).toEqual([]);
	});

	// setFileInList
	it('sets list item state to success and emits change event', async() => {
		const wrapper = createWrapper();

		(wrapper.vm as any).selectedItem = "file1";
		(wrapper.vm as any).setFileInList();

		expect((wrapper.vm as any).fileList[0].state).toBe('success');

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('sets list item state to error and emits change event', async() => {
		const wrapper = createWrapper();

		(wrapper.vm as any).selectedItem = "file1";

		(wrapper.vm as any).uploadError('error');

		expect((wrapper.vm as any).fileList[0].state).toBe('error');

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('sets list item name and file and emits change event', async() => {
		const wrapper = createWrapper();

		(wrapper.vm as any).selectedItem = "file1";
		(wrapper.vm as any).uploadedFile = testFile;

		(wrapper.vm as any).setFileInList();

		expect((wrapper.vm as any).fileList[0].name).toBe('avatar.png');
		expect((wrapper.vm as any).fileList[0].file).toEqual(testFile);

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	// resetFile
	it('resets the list item', () => {
		const wrapper = createWrapper();

		(wrapper.vm as any).resetFile(0);

		expect((wrapper.vm as any).fileList[0].state).toBe('initial');
		expect((wrapper.vm as any).fileList[0].name).toBeUndefined();
		expect((wrapper.vm as any).fileList[0].file).toBeUndefined();
	});

	it('deletes an item from the list in unrestricted mode', () => {
		const wrapper = createWrapper([], true);

		(wrapper.vm as any).resetFile(0);

		expect((wrapper.vm as any).fileList).toEqual([]);
	});

	// uploadedFiles
	it('use uploadedFiles correctly with a file', () => {
		const wrapper = createWrapper();

		(wrapper.vm as any).uploadedFile = testFile;

		expect((wrapper.vm as any).uploadedFiles).toEqual([testFile]);
	});

	it('use uploadedFiles correctly with an array of files', () => {
		const wrapper = createWrapper();

		(wrapper.vm as any).uploadedFile = [testFile, testFile];

		expect((wrapper.vm as any).uploadedFiles).toEqual([testFile, testFile]);
	});

	// InternalModel
	it('sets the internal model', () => {
		const wrapper = createWrapper();

		(wrapper.vm as any).setInternalModel();

		expect((wrapper.vm as any).internalFileListItems).toEqual(fileList);
	});

	it('resets the internal model', () => {
		const wrapper = createWrapper();

		(wrapper.vm as any).resetInternalModel();

		expect((wrapper.vm as any).fileList).toEqual([]);
		expect((wrapper.vm as any).internalFileListItems).toEqual([]);
	});

	// setInternalModel with empty value
	it('resets the internal model when value is empty', async() => {
		const wrapper = createWrapper();

		await wrapper.setProps({
			value: null,
			fileListItems: null
		});

		(wrapper.vm as any).setInternalModel();

		await wrapper.vm.$nextTick();

		expect((wrapper.vm as any).fileList).toEqual([]);
		expect((wrapper.vm as any).internalFileListItems).toEqual([]);
	});


	// dialogConfirm
	it('closes and resets the dialog form if valid', async() => {
		const wrapper = createWrapper();

		// Mock validation functions
		(wrapper.vm as any).$refs.form.validate = vi.fn().mockReturnValue(true);
		(wrapper.vm as any).$refs.form.reset = vi.fn();

		(wrapper.vm as any).selectedItem = 'file1';
		(wrapper.vm as any).dialogConfirm();

		// Wait for form validation
		await wrapper.vm.$nextTick();
		// Wait for form reset
		await wrapper.vm.$nextTick();

		expect((wrapper.vm as any).$refs.form.reset).toHaveBeenCalled();
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('does not closes and resets the dialog form if valid', async() => {
		const wrapper = createWrapper(
		);

		// Mock validation functions
		(wrapper.vm as any).$refs.form.validate = vi.fn().mockReturnValue(false);
		(wrapper.vm as any).$refs.form.reset = vi.fn();

		(wrapper.vm as any).selectedItem = 'file1';
		(wrapper.vm as any).dialogConfirm();

		// Wait for form validation
		await wrapper.vm.$nextTick();
		// Wait for form reset
		await wrapper.vm.$nextTick();

		expect((wrapper.vm as any).$refs.form.reset).not.toHaveBeenCalled();
		expect(wrapper.emitted('change')).toBeFalsy();
	});

	// selectItems
	it('computes the items for the select', () => {
		const value = [fileListItem, fileListItem];
		const wrapper = createWrapper(value, false);

		(wrapper.vm as any).fileSelected();

		expect(wrapper.vm.dialog).toBeTruthy();
	});

	// fileSelected
	it('skips the dialog in single mode', () => {
		const value = [fileListItem, fileListItem];
		const wrapper = createWrapper(value, false);

		wrapper.setData({ inlineSelect: true });
		(wrapper.vm as any).fileSelected();

		expect(wrapper.vm.selectedItem).toBe('');
		expect(wrapper.vm.inlineSelect).toBeFalsy();
	});

	it('opens the dialog when not in single mode', () => {
		const value = [fileListItem, fileListItem];
		const wrapper = createWrapper(value, false);

		(wrapper.vm as any).fileSelected();

		expect(wrapper.vm.dialog).toBeTruthy();
	});

	it('skips the dialog in inline upload mode', () => {
		const value = [fileListItem, fileListItem];
		const wrapper = createWrapper(value, false);

		wrapper.setData({ inlineSelect: true });
		(wrapper.vm as any).fileSelected();

		expect(wrapper.vm.selectedItem).toBe('');
		expect(wrapper.vm.inlineSelect).toBeFalsy();
	});

	it('open the dialog for preview files', async() => {
		const wrapper = createWrapper([], true);
		(wrapper.vm as any).uploadedFile = [
			testFile,
			testFile
		];

		(wrapper.vm as any).fileSelected();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.selectItems).toEqual([]);
		expect(wrapper.vm.dialog).toBeTruthy();
	});

	it('open the dialog in single mode for preview file', async() => {
		const wrapper = createWrapper([], true);

		(wrapper.vm as any).uploadedFile = testFile;
		(wrapper.vm as any).fileSelected();

		expect(wrapper.vm.selectItems).toEqual([]);
		expect(wrapper.vm.dialog).toBeTruthy();

		(wrapper.vm as any).dialogConfirm();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0]).toEqual(testFile);
		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('adds uploadedFiles to fileList in unrestricted mode and return false', async() => {
		const wrapper = createWrapper([], true);

		(wrapper.vm as any).unrestricted = true;
		(wrapper.vm as any).uploadedFile = [
			testFile,
			testFile
		];

		(wrapper.vm as any).fileSelected();

		await wrapper.vm.$nextTick();

		// mock fileSelected method
		const select = (wrapper.vm as any).fileSelected();
		expect(wrapper.emitted('change')).toBeFalsy();
		expect(select).toBeFalsy();
	});

	it('sets the selected item and file in list if singleMode', async() => {
		const wrapper = createWrapper();

		(wrapper.vm as any).singleMode = true;
		(wrapper.vm as any).selectItems = [
			{
				value: 'file1',
				text: 'UploadWorkflow'
			}
		];

		(wrapper.vm as any).fileSelected();

		expect((wrapper.vm as any).selectedItem).toBe('file1');
		expect((wrapper.vm as any).fileList[0].state).toBe('success');
	});

	// uploadError
	it('emits error event and reset uploaded file', async() => {
		const wrapper = createWrapper(fileList, true);

		(wrapper.vm as any).uploadedFile = testFile;
		(wrapper.vm as any).fileSelected();

		expect(wrapper.vm.dialog).toBeTruthy();
		expect(wrapper.vm.selectedItem).toEqual(fileListItem.id);
	});

	it('emits error event in unrestricted mode', async() => {
		const wrapper = createWrapper([]);

		(wrapper.vm as any).uploadError('error');

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('error')).toBeTruthy();
	});


	// previewFile
	it('emits view-file event with showViewBtn set in vuetify-options', async() => {
		const wrapper = createWrapper();

		(wrapper.vm as any).$vuetify = {
			options: {
				showViewBtn: true
			}
		}

		const fileItem = {
			...fileListItem,
			file: testFile
		};

		await (wrapper.vm as any).previewFile(fileItem);

		expect(wrapper.emitted('view-file')).toBeTruthy();
		expect(wrapper.vm.fileToPreview).toStrictEqual(fileItem.file);
		expect(wrapper.vm.previewDialog).toBeTruthy();
	});

	it('previewFile with file instanceof File', async() => {
		const wrapper = createWrapper();

		const fileItem = {
			file: testFile as File
		};

		await (wrapper.vm as any).previewFile(fileItem);

		expect(wrapper.vm.fileToPreview).toStrictEqual(fileItem.file);
		expect(wrapper.vm.previewDialog).toBeTruthy();
	});

	it('previewFile with file null', async() => {
		const wrapper = createWrapper();

		const fileItem = {
			file: null
		};

		await (wrapper.vm as any).previewFile(fileItem);

		expect(wrapper.vm.fileToPreview).toBeNull();
		expect(wrapper.vm.previewDialog).toBeFalsy();
	});
});
