import Vue, { VueConstructor } from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import customizable, { Options } from '../../../mixins/customizable';

import dateLogic from '../mixins/dateLogic';

interface VueInstance extends VueConstructor {
	options: {
		components: {
			[key: string]: VueConstructor[];
		};
	};
}

interface TestComponent extends Vue {
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
}

/** Create fake VMenu for refs */
function createMenu() {
	return Vue.component('v-menu', {
		methods: {
			save() {
				return null;
			}
		},
		template: '<div />'
	});
}

/** Create fake VTextField for refs */
function createTextField(disableHasFocused: boolean) {
	return Vue.component('v-text-field', {
		data() {
			return {
				hasError: false,
				hasFocused: disableHasFocused ? undefined : true
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
function createWrapper(propsData?: object, mixinData = {}, disableHasFocused: boolean = false) {
	const component = Vue.component('test', {
		mixins: [
			dateLogic,
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
			textField: createTextField(disableHasFocused)
		}
	}) as Wrapper<TestComponent>;
}

// Tests
describe('dateLogic', () => {
	// We need to unregister VTextField between each test
	// because it may change
	afterEach(() => {
		const instance = Vue as VueInstance;

		delete instance.options.components['v-text-field'];
	});

	it('', () => {
		const wrapper = createWrapper();

		expect(wrapper.vm.date).toBe('');
	});

	it('', () => {
		const wrapper = createWrapper({
			value: '29/10/2019'
		});

		expect(wrapper.vm.date).toBe('2019-10-29');
	});

	it('', () => {
		const wrapper = createWrapper();

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('', () => {
		const wrapper = createWrapper({
			value: '29/10/2019'
		});

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.vm.date).toBe('2019-10-29');
	});

	it('', () => {
		const wrapper = createWrapper({
			value: '2019/10/29'
		});

		wrapper.vm.saveFromTextField();

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	it('', () => {
		const wrapper = createWrapper();

		const parsed = wrapper.vm.parseTextFieldDate('29/10/2019');

		expect(parsed).toBe('2019-10-29');
	});

	it('', () => {
		const wrapper = createWrapper();

		const parsed = wrapper.vm.parseTextFieldDate('2019/10/29');

		expect(parsed).toBe('');
	});

	it('', () => {
		const wrapper = createWrapper();

		wrapper.vm.saveFromCalendar();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		wrapper.vm.saveFromCalendar();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		}, true);

		wrapper.vm.saveFromCalendar();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('', () => {
		const wrapper = createWrapper();

		wrapper.vm.textFieldBlur();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		wrapper.vm.textFieldBlur();

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('', () => {
		const wrapper = createWrapper(undefined, {
			textField: {
				validateOnBlur: true
			}
		});

		(wrapper.vm.$refs.input as any).hasError = true;

		expect(wrapper.emitted('error')).toBeTruthy();
	});
});
