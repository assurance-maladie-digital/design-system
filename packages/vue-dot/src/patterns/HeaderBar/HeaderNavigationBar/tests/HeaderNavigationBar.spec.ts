import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderNavigationBar from '../';
import { ThemeEnum } from '../../ThemeEnum';

interface TestComponent extends Vue {
	menuBtnActionLabel: string
}

let wrapper: Wrapper<TestComponent>;

// Tests
describe('HeaderNavigationBar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavigationBar, {
			propsData: {
				theme: ThemeEnum.DEFAULT
			}
		}) as Wrapper<TestComponent>;

		expect(wrapper.vm.menuBtnActionLabel).toBe('Ouvrir le menu');
		expect(html(wrapper)).toMatchSnapshot();
	});
});
