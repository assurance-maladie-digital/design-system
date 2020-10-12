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
	resetFile: (id: string) => void;
	dialogConfirm: () => void;
	uploadedFile: File | null;
	fileList: FileListItem[];
	error: boolean;
	dialog: boolean;
	selectedItem: string;
	singleMode(): boolean;
	fileSelected(): void;
	selectItems: SelectItem[];
	uploadError(error: string): void;
}

/** Create fake VForm for refs */
function createVForm() {
	return Vue.component('v-form', {
		template: '<div />'
	});
}

const fileListItem: FileListItem = {
	id: '1',
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
	const component = Vue.component('test', {
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

// Tests
describe('EventsFileFired', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	// setFileInList
	it('sets list item state to success and emits change event', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.selectedItem = '1';

		wrapper.vm.setFileInList();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0].state).toBe('success');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('sets list item state to error and emits change event', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.selectedItem = '1';

		wrapper.vm.error = true;

		wrapper.vm.setFileInList();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0].state).toBe('error');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('sets list item name and file and emits change event', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;
		wrapper.vm.selectedItem = '1';

		wrapper.vm.uploadedFile = testFile;

		wrapper.vm.setFileInList();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.fileList[0].name).toBe('avatar.png');
		expect(wrapper.vm.fileList[0].file).toEqual(testFile);
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	// resetFile
	it('resets the list item', () => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		wrapper.vm.resetFile('1');

		expect(wrapper.vm.fileList[0]).toEqual({
			id: '1',
			title: 'UploadWorkflow',
			state: 'initial'
		});
	});

	// dialogConfirm
	it('closes and resets the dialog form if valid', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		// Mock validation functions
		wrapper.vm.$refs.form.validate = jest.fn().mockReturnValue(true);
		wrapper.vm.$refs.form.reset = jest.fn();

		wrapper.vm.dialogConfirm();

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.$refs.form.reset).toHaveBeenCalled();
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('doesn\'t closes and resets the dialog form if valid', async() => {
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

		expect(wrapper.vm.dialog).toBe(false);
		expect(wrapper.vm.selectedItem).toEqual(fileListItem.id);
	});

	it('opens the dialog when not in single mode', () => {
		const value = [fileListItem, fileListItem];
		const wrapper = createWrapper(value) as Wrapper<TestComponent>;

		wrapper.vm.fileSelected();

		expect(wrapper.vm.dialog).toBe(true);
	});

	// uploadError
	it('emits error event and reset uploaded file', async() => {
		const wrapper = createWrapper() as Wrapper<TestComponent>;

		wrapper.vm.uploadedFile = testFile;

		wrapper.vm.uploadError('error');

		await wrapper.vm.$nextTick();

		expect(wrapper.vm.uploadedFile).toBe(null);
		expect(wrapper.emitted('error')).toBeTruthy();
	});
});
