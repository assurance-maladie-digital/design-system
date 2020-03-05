import Vue from 'vue';
import { mount, Wrapper } from '@vue/test-utils';

import { GetThemeIcon } from '../';

const VD_OPTIONS = {
	theme: {
		icons: {
			test: 'icon-src'
		}
	}
};

const mocks = {
	$vd: VD_OPTIONS
};

const mountOptions = {
	mocks
};

/** Create the test component */
function createTestComponent() {
	return Vue.component('test', {
		mixins: [
			GetThemeIcon
		],
		template: '<div />'
	});
}

// Tests
describe('GetThemeIcon', () => {
	it('returns the icon', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, mountOptions) as Wrapper<GetThemeIcon>;

		expect(typeof wrapper.vm.getThemeIcon('test')).toBe('string');
	});

	it('returns undefined if the icon doesn\'t exists', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, mountOptions) as Wrapper<GetThemeIcon>;

		expect(wrapper.vm.getThemeIcon('')).toBe(undefined);
	});

	it('returns undefined if $vd doesn\'t exists', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent) as Wrapper<GetThemeIcon>;

		expect(wrapper.vm.getThemeIcon('test')).toBe(undefined);
	});
});
