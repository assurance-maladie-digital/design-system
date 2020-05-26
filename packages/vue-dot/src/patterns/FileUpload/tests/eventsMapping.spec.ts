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
}
/* eslint-disable @typescript-eslint/no-explicit-any */
type EventType = any;

const component = Vue.component('file-upload', {
	mixins: [
		EventsMapping
	],
	template: '<input ref="vdInputEl" type="file">'
});

// Tests
describe('eventMapping', () => {
	it('check retry event ', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		wrapper.vm.$refs.vdInputEl.click();

		wrapper.vm.retry();
	});

	it('check self reset function ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		expect(wrapper.vm.selfReset()).toBe(undefined);
	});

	it('check event emitted with no multiple', () => {
		const wrapper = mount(component, {
			data() {
				return {
					error: false
				};
			}
		}) as Wrapper<TestComponent>;

		wrapper.setProps({ multiple: false });

		wrapper.vm.emitChangeEvent();
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
	});

	it('check input change with target from event ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = {} as EventType;

		wrapper.vm.inputValueChanged(event);
	});

	it('check input change ', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' };

		const event = { target: { files: [file] } } as EventType;

		wrapper.vm.inputValueChanged(event);
	});

	it('check input change if no files selected ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const event = { target: {} } as HTMLInputEvent;

		wrapper.vm.inputValueChanged(event);
	});

	it('check input change if multiple files selected ', () => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = [{ size: 1000, type: 'image/png', name: 'avatar.png' }];

		const event = { target: { files: [file, file] } } as EventType;

		wrapper.vm.inputValueChanged(event);
	});

	it('check dropHandler event if no data', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const fileDropEvent = {} as DragEvent;

		wrapper.vm.dropHandler(fileDropEvent);
	});

	it('check dropHandler with multi mode', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' };

		const fileDropEvent = {
			dataTransfer: {
				files: [file]
			}
		} as EventType;

		wrapper.vm.dropHandler(fileDropEvent);
	});

	it('check dropHandler  with single mode', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' };

		const fileDropEvent = {
			dataTransfer: {
				files: [file, file]
			}
		} as EventType;

		wrapper.setProps({ multiple: false });

		wrapper.vm.dropHandler(fileDropEvent);
	});

	it('check dropHandler with conditions data item', async() => {
		const wrapper = mount(component) as Wrapper<TestComponent>;

		const file = { size: 1000, type: 'image/png', name: 'avatar.png' };

		let fileDropEvent = {
			dataTransfer: {
				files: [file]
			}
		} as EventType;

		wrapper.vm.dropHandler(fileDropEvent);

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
		} as EventType;

		wrapper.vm.dropHandler(fileDropEvent);

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
		} as EventType;

		wrapper.vm.dropHandler(fileDropEvent);

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
		} as EventType;

		wrapper.vm.dropHandler(fileDropEvent);
	});
});
