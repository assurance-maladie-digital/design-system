import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';
import { EventsMapping } from '../mixins/eventsMapping';
import { Refs } from '../../../types';
import { HTMLInputEvent } from '../types';

interface TestComponent extends Vue {
	$refs: Refs<{
		vdInputEl: HTMLInputElement;
	}>;
	selfReset: () => void;
	retry: () => void;
	emitChangeEvent: () => void;
	inputValueChanged: (event: HTMLInputEvent) => void;
	ifTooManyFiles: (files: FileList | DataTransferItemList) => boolean;
	dropHandler: (e: DragEvent) => void;
	dragover: boolean;
	error: boolean;
	files: File;
}

const component = Vue.component('file-upload', {
	mixins: [
		EventsMapping
	],
	template: '<div><input ref="vdInputEl" type="file"></div>'
});

const file = { size: 1000, type: 'image/png', name: 'avatar.png' } as File;

interface FileUpload {
	files?: File[] | null;
	items?: {file:File | null};
	kind?: string;
}

/**
 *
 */
function getFileDropEvent({ files, items, kind }: FileUpload): DragEvent | null{
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
						kind: kind,
						getAsFile() {
							return items.file;
						}
					}
				]
			}
		}  as unknown as DragEvent;
	}
	return null;
}

// Test
describe('eventMapping', () => {
	it('verify if behavior of retry method it\'s called properly', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const spy = jest.spyOn(wrapper.vm, 'retry');

		wrapper.vm.retry();

		expect(spy).toBeCalled();

	});

	it('trigger a self reset then assume that the dragover, files and error data are set to default value ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setData({ dragover: true });

		wrapper.vm.selfReset();

		expect(wrapper.vm.dragover).toBe(false);

		expect(wrapper.vm.files).toStrictEqual([]);

		expect(wrapper.vm.error).toBe(false);
	});

	it('emit event change when no error detected in single mode: multiple = false', async() => {
		const wrapper = mount(component, {
			data() {
				return {
					error: false
				};
			}
		}) as Wrapper<TestComponent>;

		wrapper.setProps({ multiple: false });

		wrapper.vm.emitChangeEvent();

		expect(wrapper.emitted().change).toBeTruthy();
	});

	it('emit event change when no error detected in multiple mode: multiple = true', async() => {
		const wrapper = mount(component, {
			data() {
				return {
					error: false
				};
			}
		}) as Wrapper<TestComponent>;

		wrapper.setProps({ multiple: true });

		wrapper.vm.emitChangeEvent();

		expect(wrapper.emitted().change).toBeTruthy();
	});

	it('verify that the value of the input field is set empty when an error is detected', async() => {
		const wrapper = mount(component, {
			data() {
				return {
					error: true
				};
			}
		}) as Wrapper<TestComponent>;

		wrapper.vm.emitChangeEvent();

		expect(wrapper.vm.$refs.vdInputEl.value).toBe('');

		expect(wrapper.emitted().change).toBeFalsy();
	});

	it('if no event detected to input field, event.target should be null', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = {} as HTMLInputEvent;

		const inputValueChanged = jest.spyOn(wrapper.vm, 'inputValueChanged');

		wrapper.vm.inputValueChanged(event);

		expect(inputValueChanged).toHaveReturned();

		expect(inputValueChanged).toBeCalledWith(event);

	});

	it('when no change detected a self reset have been to call', async() => {
		const wrapper = mount(component, {
			mocks: {
				selfReset: jest.fn()
			}
		}) as Wrapper<TestComponent>;

		const event = { target: {} } as HTMLInputEvent;

		const selfReset = jest.spyOn(wrapper.vm, 'selfReset');

		wrapper.vm.inputValueChanged(event);

		expect(selfReset).toHaveBeenCalled();
	});

	it('if we in single mode with a manual file selection, emitChangeEvent have to be called', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = { target: { files: [file] } } as unknown as HTMLInputEvent;

		const emitChangeEvent = jest.spyOn(wrapper.vm, 'emitChangeEvent');

		wrapper.vm.inputValueChanged(event);

		expect(emitChangeEvent).toHaveBeenCalled();

		expect(wrapper.emitted().change).toBeTruthy();

	});

	it('if we in multiple mode with a manual file selection, verify that: ifTooManyFiles method return true', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = { target: { files: [file, file] } } as unknown as HTMLInputEvent;

		const ifTooManyFiles = jest.spyOn(wrapper.vm, 'ifTooManyFiles');

		wrapper.vm.inputValueChanged(event);

		expect(ifTooManyFiles).toReturnWith(true);
	});

	it('on drop handle if event is null, no change event emitted', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = {} as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeFalsy();
	});

	it('if it is a drop handler with multiple, assume that a change event is emitted', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = getFileDropEvent({ files: file as unknown  as File[] }) ;

		wrapper.vm.dropHandler(fileDropEvent as unknown as DragEvent);

		expect(wrapper.emitted().change).toBeTruthy();
	});

	it('if it\'s a drop handler with single mode no event change is emitted', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = getFileDropEvent({ files: [file,file] as unknown  as File[] });

		wrapper.setProps({ multiple: false });

		wrapper.vm.dropHandler(fileDropEvent as unknown  as DragEvent);

		expect(wrapper.emitted().change).toBeFalsy();
	});

	it('use DataTransferItemList interface to access the file(s)', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

        //if transfer data contains one or more file it should send an event change
        let fileDropEvent = getFileDropEvent({ files: [file] });

		wrapper.vm.dropHandler(fileDropEvent  as unknown  as DragEvent);

		expect(wrapper.emitted().change).toBeTruthy();

		// if transfer data contains one or more file  it should send an event change when kind set empty
		fileDropEvent =getFileDropEvent({ items: { file:file }, kind:'' });

		wrapper.vm.dropHandler(fileDropEvent as unknown  as DragEvent);

		expect(wrapper.emitted().change).toBeTruthy();

		// if data transfer it's a file contain
		fileDropEvent =getFileDropEvent({ items: { file:file }, kind:'file' });

		wrapper.vm.dropHandler(fileDropEvent as unknown  as DragEvent);

		expect(wrapper.emitted().change).toBeTruthy();

		// if data transfer it's a file contain with no file uploaded
		fileDropEvent =getFileDropEvent({ items: { file:null } , kind:'file' });

		wrapper.vm.dropHandler(fileDropEvent as unknown  as DragEvent);

		expect(wrapper.emitted().change).toBeTruthy();
	});
});
