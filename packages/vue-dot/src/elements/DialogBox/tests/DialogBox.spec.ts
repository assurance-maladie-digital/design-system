import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

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
