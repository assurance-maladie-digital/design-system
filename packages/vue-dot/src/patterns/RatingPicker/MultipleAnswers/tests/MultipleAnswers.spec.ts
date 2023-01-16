import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import MultipleAnswers from '..';

let wrapper: Wrapper<Vue>;

describe('MultipleAnswers', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(MultipleAnswers);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
