import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';
import { FileValidator } from '../mixins/fileValidator';

interface TestComponent extends Vue {
	validateFile: (file: File) => boolean;
	ifTooManyFiles: (files: FileList | DataTransferItemList) => boolean;
}

const component = Vue.component('test', {
	mixins: [
		FileValidator
	],
	template: '<input ref="vdInputEl" type="file">'
});

const file = { size: 1000, type: 'image/png', name: 'avatar.png' } as File;

// Test
describe('ValidatorFile', () => {
	it('assume that extension, size limit and format should be expected', () => {
		const wrapper = mount(component, {
			propsData: {
				allowedExtensions: ['pdf', 'jpg', 'png'],
				fileSizeMax: 4096 * 1024
			}
		}) as Wrapper<TestComponent>;

		// be sure that file validation expect format entry
		expect(wrapper.vm.validateFile(file)).toBe(true);

        // check the size limit of the file, if limit is exceed an error should triggered
		const fileLimit = { size: 5000 * 1024, type: 'image/png', name: 'avatar.png' } as File;

		expect(wrapper.vm.validateFile(fileLimit)).toBe(false);

		expect(wrapper.emitted().error).toBeTruthy();

		// check if the format it's not correct an error is triggered,
		const fileCsv = { size: 1000, type: 'image/csv', name: 'avatar.csv' } as File;

		expect(wrapper.vm.validateFile(fileCsv)).toBe(false);

		expect(wrapper.emitted().error).toBeTruthy();
	});

	it('when select many files it should be true or false', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setProps({ multiple: true });

		const fileList = {} as FileList;

        // should be false if no event detected
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

		// should be false if it contain one or more files
		expect(wrapper.vm.ifTooManyFiles(files)).toBe(true);
	});
});
