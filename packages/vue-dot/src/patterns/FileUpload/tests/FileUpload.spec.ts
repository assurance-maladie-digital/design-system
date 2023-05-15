import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import FileUpload from '../';

let wrapper: Wrapper<Vue>;

describe('FileUpload', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FileUpload);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with only one extension allowed', () => {
		wrapper = mountComponent(FileUpload, {
			propsData: {
				allowedExtensions: ['pdf']
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
