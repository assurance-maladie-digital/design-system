import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { UploadWorkflowCore } from '../uploadWorkflowCore';

import { FileListItem, SelectItem } from '../../types';
import { Refs } from '../../../../types';

interface TestComponent extends Vue {
	$refs: Refs<{
		form: HTMLFormElement;
	}>;

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
	return Vue.component('VForm', {
		template: '<div />'
	});
}

const fileListItem: FileListItem = {
	id: 'file1',
	title: 'UploadWorkflow',
	name: 'avatar.png',
	file: {} as File
};

const fileList: FileListItem[] = [
	fileListItem
];

const testFile = {
	name: 'avatar.png',
	size: 1000,
	type: 'image/png'
} as File;

/** Create the wrapper */
function createWrapper(value = fileList) {
	const component = Vue.component('TestComponent', {
		mixins: [
			UploadWorkflowCore
		],
		template: '<v-form ref="form" />'
	});

	return mount(component, {
		stubs: {
			form: createVForm()
		},
		propsData: {
			value
		}
	});
}
/** Create the wrapper */
function createWrapperWithEmptyValue() {
	const component = Vue.component('TestComponent', {
		mixins: [
			UploadWorkflowCore
		],
		template: '<v-form ref="form" />'
	});

	return mount(component, {
		stubs: {
			form: createVForm()
		}
	});
}

describe('EventsFileFired', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('sets list item state to success and emits change event', async() => {
		const wrapper = createWrapperWithEmptyValue() as Wrapper<TestComponent>;
		expect(wrapper.vm.$props.value).toEqual([]);
	});

	// setFileInList
	it('sets list item state to success and emits change event', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.selectedItem = 'file1';

		wrapper.vm.setFileInList();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0].state).toBe('success');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('sets list item state to error and emits change event', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.selectedItem = 'file1';

		wrapper.vm.error = true;

		wrapper.vm.setFileInList();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0].state).toBe('error');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('sets list item name and file and emits change event', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.selectedItem = 'file1';

		wrapper.vm.uploadedFile = testFile;

		wrapper.vm.setFileInList();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0].name).toBe('avatar.png');
		expect(wrapper.vm.fileList[0].file).toEqual(testFile);
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('add empty object in filelist if there is not internalFileListItems', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.internalFileListItems = null;
		wrapper.vm.uploadedFile = testFile;
		wrapper.vm.selectedItem = 'file1';

		wrapper.vm.setFileInList();
		wrapper.vm.internalFileListItems = fileList;

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0].state).toBe('success');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	// resetFile
	it('resets the list item', () => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		wrapper.vm.resetFile(0);

		expect(wrapper.vm.fileList[0]).toEqual({
			id: 'file1',
			title: 'UploadWorkflow',
			state: 'initial'
		});
	});

	it('delete an item in the list', () => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.internalFileListItems = [];
		wrapper.vm.resetFile(0);

		expect(wrapper.vm.fileList).toEqual([]);
	});

	// dialogConfirm
	it('closes and resets the dialog form if valid', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		// Mock validation functions
		wrapper.vm.$refs.form.validate = jest.fn().mockReturnValue(true);
		wrapper.vm.$refs.form.reset = jest.fn();

		wrapper.vm.selectedItem = 'file1';
		wrapper.vm.dialogConfirm();

		// Wait for form validation
		await wrapper.vm.$nextTick();
		// Wait for form reset
		await wrapper.vm.$nextTick();

		expect(wrapper.vm.$refs.form.reset).toHaveBeenCalled();
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('does not closes and resets the dialog form if valid', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		wrapper.vm.$refs.form.validate = jest.fn().mockReturnValue(false);
		wrapper.vm.$refs.form.reset = jest.fn();

		wrapper.vm.dialogConfirm();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.$refs.form.reset).not.toHaveBeenCalled();
		expect(wrapper.emitted('change')).toBeFalsy();
	});

	// selectItems
	it('computes the items for the select', () => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		const computedItem = {
			text: fileListItem.title,
			value: fileListItem.id
		};

		expect(wrapper.vm.selectItems).toEqual([computedItem]);
	});

	// fileSelected
	it('skips the dialog in single mode', () => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		wrapper.vm.fileSelected();

		expect(wrapper.vm.dialog).toBeFalsy();
		expect(wrapper.vm.selectedItem).toEqual(fileListItem.id);
	});

	it('opens the dialog when not in single mode', () => {
		const value = [fileListItem, fileListItem];
		const wrapper = createWrapper(value) as Wrapper<TestComponent>;

		wrapper.vm.fileSelected();

		expect(wrapper.vm.dialog).toBeTruthy();
	});

	it('skips the dialog in inline upload mode', () => {
		const value = [fileListItem, fileListItem];
		const wrapper = createWrapper(value) as Wrapper<TestComponent>;

		wrapper.setData({ inlineSelect: true });
		wrapper.vm.fileSelected();

		expect(wrapper.vm.selectedItem).toBe('');
		expect(wrapper.vm.inlineSelect).toBeFalsy();
	});

	it('skip dialog and add upload file in list in unrestricted mode', () => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.internalFileListItems = [];
		wrapper.vm.uploadedFile = testFile;
		wrapper.vm.fileSelected();

		expect(wrapper.vm.dialog).toBeFalsy();
		expect(wrapper.vm.fileList[1]).toEqual(testFile);
	});

	// uploadError
	it('emits error event and reset uploaded file', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		wrapper.vm.uploadedFile = testFile;

		wrapper.vm.uploadError('error');

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.uploadedFile).toBeNull();
		expect(wrapper.emitted('error')).toBeTruthy();
	});

	// viewFile
	it('emits view-file event', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		wrapper.vm.emitViewFileEvent(fileListItem);

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('view-file')).toBeTruthy();
	});
});
