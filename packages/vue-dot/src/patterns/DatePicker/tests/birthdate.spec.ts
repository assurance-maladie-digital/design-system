import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import birthdate from '../mixins/birthdate';

import dayjs from 'dayjs';

interface TestComponent extends Vue {
	birthdate?: string | boolean;
	max: string | null;
	min: string | null;
	menu: boolean;
	setActivePicker: () => void;
}

/** Create the wrapper */
function createWrapper(birthdateValue: boolean, spy?: jest.Mock, menu = true) {
	const component = Vue.component('test', {
		mixins: [
			birthdate
		],
		watch: {
			menu: spy ? spy : () => null
		},
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			birthdate: birthdateValue
		},
		data() {
			return {
				menu
			};
		}
	}) as Wrapper<TestComponent>;
}

// Tests
describe('birthdate', () => {
	it('', () => {
		const wrapper = createWrapper(false);

		expect(wrapper.vm.max).toBe(null);
		expect(wrapper.vm.min).toBe(null);
	});

	it('', () => {
		const wrapper = createWrapper(true);

		expect(wrapper.vm.min).toBe('1950-01-01');
	});

	it('', () => {
		const wrapper = createWrapper(true);

		expect(wrapper.vm.max).toBe(dayjs().format('YYYY-MM-DD'));
	});

	it('', () => {
		const spy = jest.fn();
		const wrapper = createWrapper(true, spy, false);

		wrapper.vm.menu = true;

		expect(spy).toHaveBeenCalled();
	});

	it('', () => {
		const spy = jest.fn();
		const wrapper = createWrapper(true, spy, true);

		wrapper.vm.menu = false;

		expect(spy).toHaveBeenCalled();
	});
});
