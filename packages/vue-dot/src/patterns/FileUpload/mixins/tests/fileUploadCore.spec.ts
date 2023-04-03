import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { FileUploadCore } from '../fileUploadCore';
import { locales } from '../../locales';
import { Refs } from '../../../../types';
import { HTMLInputEvent } from '../../types';

interface TestComponent extends Vue {
	infoText: (max: string, ext: string, length: number) => string;
	$refs: Refs<{
		vdInputEl: HTMLInputElement;
	}>;
	selfReset: () => void;
	emitChangeEvent: () => void;
	inputValueChanged: (event: HTMLInputEvent) => void;
	ifTooManyFiles: (files: FileList | DataTransferItemList) => boolean;
	dropHandler: (e: DragEvent) => void;
	dragover: boolean;
	error: boolean;
	files: File[];
}

interface DropEvent {
	files?: File[] | null;
	items?: {
		file: File | null;
	};
	kind?: string;
}

const component = Vue.component('TestComponent', {
	mixins: [
		FileUploadCore
	],
	template: '<input ref="vdInputEl" type="file">'
});

const file = {
	size: 1000,
	type: 'image/png',
	name: 'avatar.png'
} as File;

/** Create a DragEvent with files or items */
function getFileDropEvent({ files, items, kind }: DropEvent): DragEvent {
	if (files) {
		return {
			dataTransfer: {
				files: files
			}
		} as unknown as DragEvent;
	}

	if (items) {
		return {
			dataTransfer: {
				items: [
					{
						kind,
						getAsFile: () => items.file
					}
				]
			}
		}  as unknown as DragEvent;
	}

	return {
		dataTransfer: {}
	} as DragEvent;
}

describe('FileUploadCore', () => {
	// inputValueChanged
	it('does not emits change event if there is no event target', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = {} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('calls self reset function', () => {
		const wrapper = mount(component, {
			mocks: {
				selfReset: jest.fn()
			}
		}) as unknown as Wrapper<TestComponent>;

		const event = {
			target: {}
		} as HTMLInputEvent;

		const selfReset = jest.spyOn(wrapper.vm, 'selfReset');

		wrapper.vm.inputValueChanged(event);

		expect(selfReset).toHaveBeenCalled();
	});

	it('does not emits change event if there is no files in event target', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = {
			target: {}
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('does not emits change event if files is an empty array', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = {
			target: {
				files: [] as unknown
			}
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('does not emits change event if there are too many files', () => {
		const wrapper = mount(component, {
			mocks: {
				ifTooManyFiles: () => true
			}
		}) as unknown as Wrapper<TestComponent>;

		const event = {
			target: {
				files: [file, file] as unknown
			}
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('emits change event when the file is valid', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = {
			target: {
				files: [file] as unknown
			}
		} as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	// emitChangeEvent
	it('emits change event when no there is no error', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setData({
			error: false,
			files: [file]
		});

		wrapper.vm.emitChangeEvent();

		const event = wrapper.emitted('change') || [];

		expect(event[0][0]).toEqual(file);
	});

	it('emits change event when no there is no error in multiple mode', () => {
		const wrapper = mount(component, {
			propsData: {
				multiple: true
			}
		}) as Wrapper<TestComponent>;

		wrapper.setData({
			error: false,
			files: [file, file]
		});

		wrapper.vm.emitChangeEvent();

		const event = wrapper.emitted('change') || [];

		expect(event[0][0]).toEqual([file, file]);
	});

	it('does not emits change event when there is an error', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setData({
			error: true
		});

		wrapper.vm.emitChangeEvent();

		expect(wrapper.emitted('change')).toBeFalsy();
		expect(wrapper.vm.$refs.vdInputEl.value).toBe('');
	});

	// dropHandler
	it('does not emits change event when there is no data', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = {} as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('validates the files and emits change event if there is files in the event', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = getFileDropEvent({
			files: [file]
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('does not emits change event if there are too many files', async() => {
		const wrapper = mount(component, {
			mocks: {
				ifTooManyFiles: () => true
			}
		}) as unknown as Wrapper<TestComponent>;

		const fileDropEvent = getFileDropEvent({
			files: [file, file]
		});

		wrapper.setProps({
			multiple: false
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('validates the files and emits change event if there are items in the event', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = getFileDropEvent({
			items: {
				file
			}
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('emits change event if there are items in the event with the kind "file"', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = getFileDropEvent({
			items: {
				file
			},
			kind: 'file'
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('does not emits change event if there are items in the event which are not files', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = getFileDropEvent({
			items: {
				file: null
			},
			kind: 'file'
		});

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	// selfReset
	it('resets state properly', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setData({
			dragover: true
		});

		wrapper.vm.selfReset();

		expect(wrapper.vm.dragover).toBe(false);
		expect(wrapper.vm.files).toStrictEqual([]);
		expect(wrapper.vm.error).toBe(false);
	});
});
