import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import DialogBox from '../DialogBox.vue';

let wrapper: Wrapper<Vue>;

describe('DialogBox', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(DialogBox);

		expect(wrapper).toMatchSnapshot();
	});
});
