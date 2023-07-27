import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import FileUpload from '../../FileUpload';
import DialogBox from '../../../elements/DialogBox';
import FileList from '../../../elements/FileList';

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

describe('UploadWorkflow', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(UploadWorkflow, {
			stubs: {
				FileUpload,
				DialogBox,
				FileList
			},
			propsData: {
				value: files
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a single file', () => {
		wrapper = mountComponent(UploadWorkflow, {
			stubs: {
				FileUpload,
				DialogBox,
				FileList
			},
			propsData: {
				value: [files[0]]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
