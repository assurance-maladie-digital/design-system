import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FileListItem } from '../types';

import { UpdateFileModel } from '../mixins/updateFileModel';

interface TestComponent extends Vue {
	updateFileModel<T>(id: string, key: string, value: T): void;
	fileList: FileListItem[];
}

const component = Vue.component('test', {
	mixins: [
		UpdateFileModel
	],
	template: '<div/>'
});

const fileList: FileListItem[] = [
	{
		id: '1',
		title: 'UploadWorkflow',
		name: 'avatar.png',
		file: {} as File
	}
];

// Test
describe('updateFileModel', () => {
	it('if fileList is empty, it should return undefined', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.vm.fileList = [];

		const spy = jest.spyOn(wrapper.vm, 'updateFileModel');

		wrapper.vm.updateFileModel('1', 'state', 'initial');

		expect(spy).toHaveReturned();
	});

	it('if value is undefined the fileList is set, the current value of the fileList should clear the key: meanning to be : undefined', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.vm.fileList = fileList;

		wrapper.vm.updateFileModel('1', 'name', undefined);

		expect(wrapper.vm.fileList[0].name).toBeUndefined();
	});

	it('if value and  fileList is set , new field should pass to the current fileList with: key and value', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.vm.fileList = fileList;

		wrapper.vm.updateFileModel('1', 'state', 'file');

		expect(wrapper.vm.fileList[0].state).toBeTruthy();

		expect(wrapper.vm.fileList[0].state).toEqual('file');
	});
});
