import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FileListItem } from '../../types';

import { UpdateFileModel } from '../updateFileModel';

interface TestComponent extends Vue {
	updateFileModel<T>(id: string, key: string, value: T): void;
	fileList: FileListItem[];
	initFileList(value: FileListItem[]): void;
}

const testComponent = Vue.component('test', {
	mixins: [
		UpdateFileModel
	],
	template: '<div/>'
});

/**
 *
 */
function getFileList(): FileListItem[] {
	return [
		{
			id: '1',
			title: 'UploadWorkflow',
			name: 'avatar.png',
			file: {} as File
		}
	];
}

// Tests
describe('updateFileModel', () => {
	it('inits the file list', () => {
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.initFileList(getFileList());

		expect(wrapper.vm.fileList).toMatchSnapshot();
	});

	it('doesn\'t overwrite existing state', () => {
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		const fileListState = getFileList();
		fileListState[0].state = 'success';

		wrapper.vm.initFileList(fileListState);

		expect(wrapper.vm.fileList).toMatchSnapshot();
	});

	it('returns undefined if the file doesn\'t exists', () => {
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.fileList = getFileList();

		expect(wrapper.vm.updateFileModel('2', 'state', 'initial')).toBeUndefined();
	});

	it('deletes the key if the value is undefined', () => {
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.fileList = getFileList();

		wrapper.vm.updateFileModel('1', 'name', undefined);

		expect(wrapper.vm.fileList[0]).toMatchSnapshot();
	});

	it('updates the value of the corresponding key', () => {
		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		wrapper.vm.fileList = getFileList();

		wrapper.vm.updateFileModel('1', 'state', 'updated');

		expect(wrapper.vm.fileList[0].state).toBe('updated');
	});
});
