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
	template: '<input ref="vdInputEl" type="file">'
});
// Test
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

        // check the size limit of file
		file = { size: 5000 * 1024, type: 'image/png', name: 'avatar.png' } as File;

		expect(wrapper.vm.validateFile(file)).toBe(false);

		expect(wrapper.emitted().error).toBeTruthy();

		// check if the format it's not correct
		file = { size: 1000, type: 'image/csv', name: 'avatar.csv' } as File;

		expect(wrapper.vm.validateFile(file)).toBe(false);

		expect(wrapper.emitted().error).toBeTruthy();
	});

	it('check if too many file ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setProps({ multiple: true });

		const fileList = {} as FileList;

		expect(wrapper.vm.ifTooManyFiles(fileList)).toBe(false);

		wrapper.setProps({ multiple: false });

		const event = {
			target: {
				files: [
					{
						name: 'image.png',
						size: 50000,
						type: 'image/png'
					},
					{
						name: 'image.png',
						size: 50000,
						type: 'image/png'
					}
				]
			}
		};

		const files = event.target.files as unknown as FileList;

		expect(wrapper.vm.ifTooManyFiles(files)).toBe(true);
	});
});
