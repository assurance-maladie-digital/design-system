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
	return Vue.component('TestComponent', {
		mixins: [
			GetThemeIcon
		],
		template: '<div />'
	});
}

describe('GetThemeIcon', () => {
	it('returns the icon', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, mountOptions) as unknown as Wrapper<GetThemeIcon>;

		expect(typeof wrapper.vm.getThemeIcon('test')).toBe('string');
	});

	it('returns undefined if the icon does not exists', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent, mountOptions) as unknown as Wrapper<GetThemeIcon>;

		expect(wrapper.vm.getThemeIcon('')).toBeUndefined();
	});

	it('returns undefined if $vd doe not exists', () => {
		const testComponent = createTestComponent();

		const wrapper = mount(testComponent) as Wrapper<GetThemeIcon>;

		expect(wrapper.vm.getThemeIcon('test')).toBeUndefined();
	});
});
