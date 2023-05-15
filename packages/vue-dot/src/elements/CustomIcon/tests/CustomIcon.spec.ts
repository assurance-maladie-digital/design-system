import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CustomIcon from '../';

let wrapper: Wrapper<Vue>;

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

describe('CustomIcon', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CustomIcon, {
			mocks,
			propsData: {
				icon: 'test'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a custom size', () => {
		wrapper = mountComponent(CustomIcon, {
			mocks,
			propsData: {
				icon: 'test',
				size: '64px'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
