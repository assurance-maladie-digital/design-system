import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FileValidation } from '../fileValidation';

interface TestComponent extends Vue {
	files: File[];
	computedAccept: string;
	validateFile: (file: File) => boolean;
	ifTooManyFiles: (files: FileList | DataTransferItemList) => boolean;
}

const component = Vue.component('test', {
	mixins: [
		FileValidation
	],
	template: '<div />'
});

const file = {
	size: 1000,
	type: 'image/png',
	name: 'avatar.png'
} as File;

// Tests
describe('FileValidation', () => {
	// computedAccept
	it('computes the default accept string', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		expect(wrapper.vm.computedAccept).toBe('.pdf,.jpg,.jpeg,.png');
	});

	it('returns the accept prop value is provided', () => {
		const wrapper = mount(component, {
			propsData: {
				accept: '.pdf'
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.computedAccept).toBe('.pdf');
	});

	// validateFile
	it('returns true if the file is valid', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		expect(wrapper.vm.validateFile(file)).toBe(true);
		expect(wrapper.vm.files).toStrictEqual([file]);
	});

	it('returns false if the file is too large', () => {
		const wrapper = mount(component, {
			propsData: {
				fileSizeMax: 500
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.validateFile(file)).toBe(false);
		expect(wrapper.emitted('error')).toBeTruthy();
	});

	it('returns false if the extension isn\'t allowed', () => {
		const wrapper = mount(component, {
			propsData: {
				allowedExtensions: ['pdf']
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.validateFile(file)).toBe(false);
		expect(wrapper.emitted('error')).toBeTruthy();
	});

	// ifTooManyFiles
	it('returns false if there is only one file', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const files = [file] as unknown as FileList;

		expect(wrapper.vm.ifTooManyFiles(files)).toBe(false);
		expect(wrapper.emitted('error')).toBeFalsy();
	});

	it('returns true if there is more than one file', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const files = [file, file] as unknown as FileList;

		expect(wrapper.vm.ifTooManyFiles(files)).toBe(true);
		expect(wrapper.emitted('error')).toBeTruthy();
	});
});
