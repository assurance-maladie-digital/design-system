import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import FilePreview from '../';

let wrapper: Wrapper<Vue>;

const testFile = {
	name: 'avatar.png',
	size: 1000,
	type: 'image/png'
} as File;

describe('FilePreview', () => {
	global.URL.createObjectURL = jest.fn();

	it('renders correctly', () => {
		wrapper = mountComponent(FilePreview, {
			propsData: {
				file: testFile
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
