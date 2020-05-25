import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FileList from '..';

let wrapper: Wrapper<Vue>;

const files = [{
	id: '0',
	title: 'test',
	state: 'success'
}];

// Tests
describe('FileList', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FileList, {
			propsData: {
				files
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
