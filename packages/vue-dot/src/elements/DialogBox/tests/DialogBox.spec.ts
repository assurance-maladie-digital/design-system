import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import DialogBox from '../DialogBox.vue';

let wrapper: Wrapper<Vue>;

describe('DialogBox', () => {
	it('renders correctly', async() => {
		wrapper = mountComponent(DialogBox, {
			propsData: {
				title: 'Test Dialog'
			}
		});

		// test the title
		expect(wrapper.find('h2').text()).toBe('Test Dialog');
	});
});
