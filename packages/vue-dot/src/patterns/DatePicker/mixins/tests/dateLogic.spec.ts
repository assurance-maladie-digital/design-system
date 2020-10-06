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
	// Extend $refs
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
	saveFromTextField: () => void;
	saveFromCalendar: () => void;
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
	const component = Vue.component('Test', {
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

// Tests
describe('DateLogic', () => {
	// We need to unregister VTextField between each test
	// because it may change
	afterEach(() => {
		const instance = Vue as VueInstance;

		delete instance.options.components['v-text-field'];
	});

	it('doesn\'t set the date when the value is empty', () => {
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

	it('emits change event with empty value when the date is invalid', () => {
		const wrapper = createWrapper({
			value: '29-10-2019'
		});

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toEqual([['']]);
	});

	// parseTextFieldDate
	it('parses the date when parseTextFieldDate is called with a valid date', () => {
		const wrapper = createWrapper();

		const parsed = wrapper.vm.parseTextFieldDate('29/10/2019');

		expect(parsed).toBe('2019-10-29');
	});

	it('returns an empty string when parseTextFieldDate is called with an invalid date', () => {
		const wrapper = createWrapper();

		const parsed = wrapper.vm.parseTextFieldDate('2019/10/29');

		expect(parsed).toBe('');
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

	it('doesn\'t set hasFocused if it\'s undefined', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		delete wrapper.vm.$refs.input.hasFocused;

		wrapper.vm.saveFromCalendar();

		expect(wrapper.emitted('change')).toBeTruthy();
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
