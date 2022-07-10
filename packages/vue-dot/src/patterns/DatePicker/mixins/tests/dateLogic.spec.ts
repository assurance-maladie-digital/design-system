import Vue, { VueConstructor } from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Refs, IndexedObject } from '../../../../types';

import { customizable, Options } from '../../../../mixins/customizable';

import { DateLogic } from '../dateLogic';

interface VueInstance extends VueConstructor {
	options: {
		components: IndexedObject<VueConstructor[]>;
	};
}

interface TestComponent extends Vue {
	$refs: Refs<{
		input: {
			hasError: boolean;
			hasFocused?: boolean;
		};
	}>;

	options: Options;
	dateFormat: string;
	dateFormatReturn: string;
	value: string;
	date: string;
	textFieldDate: string;
	errorMessages: string[];
	saveFromTextField: () => void;
	saveFromCalendar: () => void;
	saveFromPasted: (event: ClipboardEvent) => void;
	parseTextFieldDate: (date: string) => string;
	textFieldBlur: () => void;
	dateFormatted: string;
}

/** Create fake VMenu for refs */
function createMenu() {
	return Vue.component('VMenu', {
		methods: {
			save() {
				return null;
			}
		},
		template: '<div />'
	});
}

/** Create fake VTextField for refs */
function createTextField() {
	return Vue.component('VTextField', {
		data() {
			return {
				hasError: false,
				hasFocused: true
			};
		},
		methods: {
			validate() {
				return null;
			}
		},
		template: '<div />'
	});
}

/** Create the wrapper */
function createWrapper(propsData?: Record<string, unknown>, mixinData = {}) {
	const component = Vue.component('TestComponent', {
		mixins: [
			DateLogic,
			customizable(mixinData)
		],
		template: '<div><v-menu ref="menu" /><v-text-field ref="input" /></div>'
	});

	return mount(component, {
		propsData,
		mocks: {
			validate: () => null
		},
		stubs: {
			menu: createMenu(),
			textField: createTextField()
		}
	}) as Wrapper<TestComponent>;
}

describe('DateLogic', () => {
	// We need to unregister VTextField between each test
	// because it may change
	afterEach(() => {
		const instance = Vue as VueInstance;
		delete instance.options.components['v-text-field'];
	});

	it('does not set the date when the value is empty', () => {
		const wrapper = createWrapper();

		expect(wrapper.vm.date).toBe('');
	});

	it('parses the date when the value is filled', () => {
		const wrapper = createWrapper({
			value: '2019-10-29'
		});

		expect(wrapper.vm.date).toBe('2019-10-29');
	});

	// saveFromTextField
	it('emits change event when saveFromTextField is called and value is empty', () => {
		const wrapper = createWrapper();

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('emits change event and parses the date when saveFromTextField is called', () => {
		const wrapper = createWrapper({
			value: '2019-10-29'
		});

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.vm.date).toBe('2019-10-29');
	});

	it('emits change event with empty value when saveFromTextField and the date is invalid in initial state', () => {
		const wrapper = createWrapper({
			value: '29-10-2019'
		});

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('does not emit change event when saveFromTextField is called and value is invalid', async() => {
		const wrapper = createWrapper();

		await wrapper.setData({
			textFieldDate: '2019/'
		});

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	// parseTextFieldDate
	it('parses the date when parseTextFieldDate is called with a valid date', () => {
		const wrapper = createWrapper();

		const parsed = wrapper.vm.parseTextFieldDate('29/10/2019');

		expect(parsed).toBe('2019-10-29');
	});

	it('returns null and sets error messages when parseTextFieldDate is called with an invalid date', () => {
		const wrapper = createWrapper();

		const parsed = wrapper.vm.parseTextFieldDate('2019/10/29');

		expect(parsed).toBeNull();
		expect(wrapper.vm.errorMessages.length).toBe(1);
	});

	// saveFromCalendar
	it('emits change event when called', () => {
		const wrapper = createWrapper();

		wrapper.vm.saveFromCalendar();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('validates the VTextField when validateOnBlur is true', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		wrapper.vm.saveFromCalendar();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('does not set hasFocused if it is undefined', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		delete wrapper.vm.$refs.input.hasFocused;

		wrapper.vm.saveFromCalendar();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	// saveFromPasted
	it('parses the date when pasted with display format', () => {
		const wrapper = createWrapper();
		const clipboardEvent = {
			clipboardData: {
				getData: () => '01/01/2021'
			}
		} as unknown as ClipboardEvent;

		wrapper.vm.saveFromPasted(clipboardEvent);

		const event = wrapper.emitted('change') as string[];

		expect(event[0]).toEqual(['2021-01-01']);
	});

	it('parses the date when pasted with return format', () => {
		const wrapper = createWrapper();
		const clipboardEvent = {
			clipboardData: {
				getData: () => '2021-01-01'
			}
		} as unknown as ClipboardEvent;

		wrapper.vm.saveFromPasted(clipboardEvent);

		const event = wrapper.emitted('change') as string[];

		expect(event[0]).toEqual(['2021-01-01']);
	});

	it('does not parses the date when clipboardData is empty', () => {
		const wrapper = createWrapper();
		const clipboardEvent = {} as unknown as ClipboardEvent;

		wrapper.vm.saveFromPasted(clipboardEvent);

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	// textFieldBlur
	it('emits change event when called', () => {
		const wrapper = createWrapper();

		wrapper.vm.textFieldBlur();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('validate warning rules when validateOnBlur is true', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		wrapper.vm.textFieldBlur();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	// Error event
	it('emits error event when VTextField has error', async() => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		wrapper.vm.$refs.input.hasError = true;

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted('error')).toBeTruthy();
	});

	// dateFormatted
	it('sets the date correctly when dateFormatted is called', () => {
		const date = '29/10/2019';
		const wrapper = createWrapper();

		wrapper.vm.dateFormatted = date;

		expect(wrapper.vm.textFieldDate).toBe(date);
	});

	it('returns an empty string when the value is empty', () => {
		const wrapper = createWrapper({
			value: ''
		});

		expect(wrapper.vm.dateFormatted).toBe('');
	});

	it('returns the formatted date when the value is defined', () => {
		const wrapper = createWrapper({
			value: '2019-10-29'
		});

		expect(wrapper.vm.dateFormatted).toBe('29/10/2019');
	});
});
