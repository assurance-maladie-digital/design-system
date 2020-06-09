import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { EventsFileFired } from '../mixins/eventsFileFired';

import { FileListItem } from '../types';
import { Refs } from '../../../types';

import FileUpload from '../../FileUpload';

interface TestComponent extends Vue {
	$refs: Refs<{
		fileUpload: FileUpload;
		form: HTMLFormElement;
	}>;

	updateFileModel<T>(id: string, key: string, value: T): void;

	setFileInList: () => void;
	deleteFile: (id: string) => void;
	dialogConfirm: () => void;
	uploadedFile: File | null;
	retry: (id: string) => void;
	fileList: FileListItem[];
	error: boolean;
	dialog: boolean;
	selectedItem: string;
}

/** Create fake VForm for refs */
function createVForm() {
	return Vue.component('v-form', {
		template: '<div />'
	});
}

/** Create the wrapper */
function createWrapper() {
	const component = Vue.component('test', {
		mixins: [
			EventsFileFired
		],
		template: '<div><v-form ref="form" /></div>'
	});

	return mount(component, {
		stubs: {
			form: createVForm()
		}
	}) as Wrapper<TestComponent>;
}

const fileList: FileListItem[] = [
	{
		id: '1',
		title: 'UploadWorkflow',
		name: 'avatar.png',
		file: {} as File
	}
];

// Test
describe('EventsFileFired', () => {

	let wrapper = {} as Wrapper<TestComponent>;

	let spyUpdateFileModel = {};

	beforeEach(() => {
		wrapper = createWrapper();

		wrapper.vm.fileList = fileList;

		wrapper.vm.selectedItem = '1';

		// spy updateFileModel
		spyUpdateFileModel = jest.spyOn(wrapper.vm, 'updateFileModel');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	//setFileInList
	it('if file properties is not set, with no error we should emit change event', () => {

		wrapper.vm.error = false;

		wrapper.vm.setFileInList();

		// should call updateFileModel one time
		expect(spyUpdateFileModel).toBeCalledTimes(1);

		// expect state field of fileList is 'success'
		expect(wrapper.vm.fileList[0].state).toEqual('success');

		// expect to be emitted event change
		expect(wrapper.emitted().change).toBeTruthy();
	});

	// setFileInList
	it('if file properties is not set, with error we should emit change event', () => {

		wrapper.vm.error = true;

		wrapper.vm.setFileInList();

		// If uploadedFile is empty, should call updateFileModel one time
		expect(spyUpdateFileModel).toBeCalledTimes(1);

		// expect state field of fileList is 'success'
		expect(wrapper.vm.fileList[0].state).toEqual('error');

		// expect to be emitted event change
		expect(wrapper.emitted().change).toBeTruthy();
	});

	// setFileInList
	it('if file properties is set we should emit change event then updateFileModel call one three times', () => {

		wrapper.vm.uploadedFile = { name: 'avatar.png', size: 1000, type: 'image/png' } as File;

		wrapper.vm.setFileInList();

		// If uploadedFile is empty, should call updateFileModel three times
		expect(spyUpdateFileModel).toBeCalledTimes(3);

		// expect to be emitted event change
		expect(wrapper.emitted().change).toBeTruthy();
	});

	// deleteFile
	it(' if button is clicked in FileList updateFileModel have to be call three times', () => {

		wrapper.vm.deleteFile('1');

		expect(spyUpdateFileModel).toBeCalledTimes(3);
	});

	// dialogConfirm
	it(' if "confirm" button in the dialog is pressed and form is not validate, setFileInList won\'t be called', () => {

		wrapper = createWrapper();

		// mock $refs function validate
		wrapper.vm.$refs.form.validate = jest.fn().mockReturnValue(false);

		wrapper.vm.dialogConfirm();

		// form not reset
		expect(wrapper.vm.$refs.form.reset).toBeUndefined();
	});

	// dialogConfirm
	it(' if "confirm" button in the dialog is pressed and form is validate, setFileInList should be called one time', () => {

		wrapper = createWrapper();

		// mock $refs function validate
		wrapper.vm.$refs.form.validate = jest.fn().mockReturnValue(true);

		// mock $refs function reset
		wrapper.vm.$refs.form.reset = jest.fn();

		wrapper.vm.dialogConfirm();

		// form to be reset
		expect(wrapper.vm.$refs.form.reset).toHaveBeenCalled();
	});
});
