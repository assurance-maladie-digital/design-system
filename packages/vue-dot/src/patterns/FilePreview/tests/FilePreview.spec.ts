import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilePreview from '../';

let wrapper: Wrapper<Vue>;

describe('FilePreview', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FilePreview);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
