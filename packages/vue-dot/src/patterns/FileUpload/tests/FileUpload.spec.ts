import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FileUpload from '../';

let wrapper: Wrapper<Vue>;

describe('FileUpload', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FileUpload);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
