import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { Eventable } from '../';
import { customizable, Options } from '../../customizable';

const DATE = '2019-10-25';
const DATE_WEEK_END = '2019-10-26';

interface TestComponent extends Vue {
	options: Options;
	calendarEvents: (date: string) => boolean | string | string[];
}

/** Create the test component */
function createTestComponent(mixinData = {}) {
	return Vue.component('TestComponent', {
		mixins: [
			Eventable,
			customizable(mixinData) // Necessary since used in eventable
		],
		template: '<div />'
	});
}

describe('Eventable', () => {
	it('does nothing when no options are defined', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe(false);
	});

	it('returns userEvents without modification if it is not a function', () => {
		const userEvents = [DATE];

		const testComponent = createTestComponent({
			datePicker: {
				events: userEvents
			}
		});

		const wrapper = mount(testComponent, {
			propsData: {
				userEvents
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe(userEvents);
	});

	it('returns the result of userEvents is it is a function', () => {
		const userEvents = (date: string) => 'test ' + date;

		const testComponent = createTestComponent({
			datePicker: {
				events: userEvents
			}
		});

		const wrapper = mount(testComponent, {
			propsData: {
				userEvents
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe('test ' + DATE);
	});

	it('returns a CSS class if the selected date is in the defined range', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				startDate: '2019-10-21'
			},
			mocks: {
				date: '2019-10-27'
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe('vd-custom-event accent');
	});

	it('returns false if the the selected date is not in the defined range', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				startDate: '2019-10-21'
			},
			mocks: {
				date: '2019-10-22'
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe(false);
	});

	it('returns false when showWeekends is on and the date is not a weekend', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				showWeekends: true
			},
			mocks: {
				$vuetify: {
					theme: {
						dark: false
					}
				}
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe(false);
	});

	it('returns a CSS class when showWeekends is on and the date is a weekend', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				showWeekends: true
			},
			mocks: {
				$vuetify: {
					theme: {
						dark: false
					}
				}
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE_WEEK_END)).toBe('vd-custom-event grey lighten-1');
	});

	it('returns a CSS class for dark theme when showWeekends is on, the date is a weekend and theme is dark', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				showWeekends: true
			},
			mocks: {
				$vuetify: {
					theme: {
						dark: true
					}
				}
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE_WEEK_END)).toBe('vd-custom-event grey darken-1');
	});
});
