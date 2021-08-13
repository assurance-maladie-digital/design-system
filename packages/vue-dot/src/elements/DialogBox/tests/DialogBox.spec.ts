import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import DialogBox from '../DialogBox.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('DialogBox', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DialogBox);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
