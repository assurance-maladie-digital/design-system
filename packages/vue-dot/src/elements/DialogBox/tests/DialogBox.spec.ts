import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import DialogBox from '../DialogBox.vue';
import ListButtonAction from '../../ListButtonAction/ListButtonAction.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('DialogBox.vue', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DialogBox, {
			components: { ListButtonAction }
		});
		expect(html(wrapper)).toMatchSnapshot();
	});

	it('trigger event mousedown', () => {

	});

	it('verify size', () => {
		wrapper = mountComponent(DialogBox, {
			propsData: {
				size: 'small'
			}
		});
	});
});
