import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import FileUpload from '../../FileUpload';
import FileList from '../../FileList';

import UploadWorkflow from '../';

let wrapper: Wrapper<Vue>;

const files = [
	{
		id: '1',
		title: 'test'
	},
	{
		id: '2',
		title: 'test'
	}
];

// Tests
describe('UploadWorkflow', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(UploadWorkflow, {
			stubs: {
				FileList,
				FileUpload
			},
			propsData: {
				value: files
			},
			sync: false
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a single file', () => {
		// Mount component
		wrapper = mountComponent(UploadWorkflow, {
			stubs: {
				FileList,
				FileUpload
			},
			propsData: {
				value: [files[0]]
			},
			sync: false
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
