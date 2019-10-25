import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import CustomIcon from '../';

let wrapper: Wrapper<Vue>;

const VD_ICONS = {
	icons: {
		test: 'icon-src'
	}
};

const mocks = {
	$vd: VD_ICONS
};

// Tests
describe('CustomIcon', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(CustomIcon, {
			mocks,
			propsData: {
				icon: 'test'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a custom size', () => {
		// Mount component
		wrapper = mountComponent(CustomIcon, {
			mocks,
			propsData: {
				icon: 'test',
				size: '64px'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
