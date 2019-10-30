import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import eventable from '../';
import customizable, { Options } from '../../customizable';

const DATE = '2019-10-25';
const DATE_WEEK_END = '2019-10-26';

interface TestComponent extends Vue {
	options: Options;
	calendarEvents: (date: string) => boolean | string | string[];
}

/** Create the test component */
function createTestComponent(mixinData = {}) {
	return Vue.component('test', {
		mixins: [
			eventable,
			customizable(mixinData) // Needed because used in eventable
		],
		template: '<div />'
	});
}

// Tests
describe('customizable', () => {
	it('does nothing when no options are defined', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe(false);
	});

	it('returns userEvents without modification if it\'s not a function', () => {
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

	it('returns the result of userEvents is it\'s a function', () => {
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
				date: '2019-10-27' // End date
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe('vd-custom-event accent');
	});

	it('returns false if the the selected date isn\'t in the defined range', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				startDate: '2019-10-21'
			},
			mocks: {
				date: '2019-10-22' // End date
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.calendarEvents(DATE)).toBe(false);
	});

	it('returns false when showWeekEnds is on and the date isn\'t a week-end', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				showWeekEnds: true
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

	it('returns a CSS class when showWeekEnds is on and the date is a week-end', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				showWeekEnds: true
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

	it('returns a CSS class for dark theme when showWeekEnds is on, the date is a week-end and theme is dark', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, {
			propsData: {
				showWeekEnds: true
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
