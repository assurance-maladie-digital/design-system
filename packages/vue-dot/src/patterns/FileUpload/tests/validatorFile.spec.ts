import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';
import { FileValidator } from '../mixins/fileValidator';

interface TestComponent extends Vue {
	validateFile: (file: File) => boolean;
	ifTooManyFiles: (files: FileList | DataTransferItemList) => boolean;
	computedAccept: () => string;
}

const component = Vue.component('test', {
	mixins: [
		FileValidator
	],
	template: '<div />'
});

// Tests
describe('ValidatorFile', () => {
	it('check file accepted  ', () => {
		const wrapper = mount(component, {
			propsData: {
				allowedExtensions: ['pdf'],
				accept: undefined
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.computedAccept).toBe('.pdf');

		wrapper.setProps({ accept: 'file' });

		expect(wrapper.vm.computedAccept).toBe('file');
	});

	it('check validation of file', () => {
		const wrapper = mount(component, {
			propsData: {
				allowedExtensions: ['pdf', 'jpg', 'png'],
				fileSizeMax: 4096 * 1024
			}
		}) as Wrapper<TestComponent>;

		let file = { size: 1000, type: 'image/png', name: 'avatar.png' } as File;

		expect(wrapper.vm.validateFile(file)).toBe(true);

		file = { size: 5000 * 1024, type: 'image/png', name: 'avatar.png' } as File;

		expect(wrapper.vm.validateFile(file)).toBe(false);

		file = { size: 1000, type: 'image/csv', name: 'avatar.csv' } as File;

		expect(wrapper.vm.validateFile(file)).toBe(false);
	});

	it('check if too many file ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setProps({ multiple: true });

		let  file = {} as FileList | any;

		expect(wrapper.vm.ifTooManyFiles(file)).toBe(false);

		//we can stub out the entire event and file
		file = [{ size: 1000, type: 'image/png', name: 'avatar.png' },{ size: 1000, type: 'image/png', name: 'avatar.png' }];

		wrapper.setProps({ multiple: false });

		expect(wrapper.vm.ifTooManyFiles(file)).toBe(true);
	});
});
