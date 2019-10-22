import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import localVue, { mountComponent } from '@/tests';
import html from '@/tests/html';

// Register global components
import FileUpload from '../../FileUpload';
import FileList from '../../FileList';

localVue.component('FileUpload', FileUpload);
localVue.component('FileList', FileList);

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
			propsData: {
				value: files
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
