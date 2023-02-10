import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FileUpload from '../';

let wrapper: Wrapper<Vue>;

const file = [
	{
		id: '1',
		title: 'test'
	}
];

describe('FileUpload', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FileUpload, {
			stubs: ['VFileInput'],
			propsData: {
				value: file
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
