import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FileUpload from '../../FileUpload';
import DialogBox from '../../../elements/DialogBox';

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
			stubs: ['FileUpload', 'DialogBox'],
			propsData: {
				value: files
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a single file', () => {
		wrapper = mountComponent(UploadWorkflow, {
			stubs: {
				FileUpload,
				DialogBox
			},
			propsData: {
				value: [files[0]]
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
