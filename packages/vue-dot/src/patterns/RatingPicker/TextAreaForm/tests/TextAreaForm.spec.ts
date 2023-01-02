import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import TextAreaForm from '..';

let wrapper: Wrapper<Vue>;

describe('TextAreaForm', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(TextAreaForm);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
