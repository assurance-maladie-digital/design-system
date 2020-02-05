import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import FileUpload from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('FileUpload', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FileUpload);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
