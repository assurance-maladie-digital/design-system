import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';
import { ValidatorFile } from '../mixins/validatorFile';

interface TestComponent extends Vue {
	selfReset: () => void;
	extensions: () => string;
	maxSizeReadable: () => string;
	computedAccept: () => string;
	validateFile: (file: File) => boolean;
	ifTooManyFiles: (files: FileList | DataTransferItemList) => boolean;
}

const component = Vue.component('test', {
	mixins: [
		ValidatorFile
	],
	template: '<div />'
});

// Tests
describe('ValidatorFile', () => {
	it('check self reset function ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		expect(wrapper.vm.selfReset()).toBe(undefined);
	});

	it('check extension format', () => {
		const wrapper = mount(component, {
			propsData: {
				allowedExtensions: ['pdf']
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.extensions).toBe('PDF');
	});

	it('check sizeof file', () => {
		const wrapper = mount(component, {
			propsData: {
				fileSizeMax: 4096 * 1024,
				fileSizeUnits: [
					'o',
					'Ko',
					'Mo',
					'Go',
					'To'
				]
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.maxSizeReadable).toBe('4 Mo');
	});

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

		let  file = {} as FileList;

		expect(wrapper.vm.ifTooManyFiles(file)).toBe(false);

		//we can stub out the entire event and file
		// @ts-ignore
		file = [{ size: 1000, type: 'image/png', name: 'avatar.png' },{ size: 1000, type: 'image/png', name: 'avatar.png' }];

		wrapper.setProps({ multiple: false });

		expect(wrapper.vm.ifTooManyFiles(file)).toBe(true);
	});
});
