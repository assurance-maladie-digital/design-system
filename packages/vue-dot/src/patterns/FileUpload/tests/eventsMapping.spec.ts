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
	template: '<input ref="vdInputEl" type="file">'
});

// Test
describe('eventMapping', () => {
	it('check retry event ', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.vm.retry();

		expect(wrapper.vm.$refs.vdInputEl).toBeTruthy();
	});

	it('check self reset function ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.setData({ dragover: true });

		wrapper.vm.selfReset();

		expect(wrapper.vm.dragover).toBe(false);

		expect(wrapper.vm.files).toStrictEqual([]);

		expect(wrapper.vm.error).toBe(false);
	});

	it('check event emitted with no multiple', async() => {
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

	it('check retry event with multiple', async() => {
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

	it('check retry event with error', async() => {
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

	it('check input change with target from event ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = {} as HTMLInputEvent;

		expect(wrapper.vm.inputValueChanged(event)).toBeUndefined();
	});

	it('check input change if no files selected ', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = { target: {} } as HTMLInputEvent;

		expect(wrapper.vm.inputValueChanged(event)).toBeUndefined();
	});

	it('check input change ', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' };

		const event = { target: { files: [file] } } as unknown as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted().change).toBeTruthy();

	});

	it('check input change if multiple files selected ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;
		const file = [
			{
				size: 1000,
				type: 'image/png',
				name: 'avatar.png',
				lastModified: 1586592487740
			}
		];

		const event = { target: { files: [file, file] } } as unknown as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);

		expect(wrapper.emitted().change).toBeFalsy();
	});

	it('check dropHandler event if no data', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = {} as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeFalsy();
	});

	it('check dropHandler with multi mode', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' };

		const fileDropEvent = {
			dataTransfer: {
				files: [file]
			}
		} as unknown as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeTruthy();
	});

	it('check dropHandler  with single mode', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' };

		const fileDropEvent = {
			dataTransfer: {
				files: [file, file]
			}
		} as unknown as DragEvent;

		wrapper.setProps({ multiple: false });

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeFalsy();
	});

	it('check dropHandler with conditions data item', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' } as unknown as File;

		let fileDropEvent = {
			dataTransfer: {
				files: [file]
			}
		} as unknown as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeTruthy();

		fileDropEvent = {
			dataTransfer: {
				items: [
					{
						kind: '',
						getAsFile() {
							return file;
						}
					}
				]
			}
		}as unknown as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeTruthy();

		fileDropEvent = {
			dataTransfer: {
				items: [
					{
						kind: 'file',
						getAsFile() {
							return file;
						}
					}
				]
			}
		}as unknown as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeTruthy();

		fileDropEvent = {
			dataTransfer: {
				items: [
					{
						kind: 'file',
						getAsFile() {
							return null;
						}
					}
				]
			}
		}as unknown as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);

		expect(wrapper.emitted().change).toBeTruthy();
	});
});
