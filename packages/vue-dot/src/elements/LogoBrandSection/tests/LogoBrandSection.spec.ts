import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import LogoBrandSection from '../';
import { ThemeEnum } from '../../../constants/enums/ThemeEnum';

import Logo from '../../../elements/Logo';

Vue.component('Logo', Logo);

let wrapper: Wrapper<Vue>;

describe('LogoBrandSection', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(LogoBrandSection, {
			stubs: ['RouterLink'],
			propsData: {
				theme: ThemeEnum.DEFAULT
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
