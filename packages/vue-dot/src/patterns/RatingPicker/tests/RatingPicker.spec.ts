import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import RatingPicker from '..';

let wrapper: Wrapper<Vue>;

describe('RatingPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(RatingPicker,{
			propsData: {
				type: 'NumberPicker',
				label: 'la deuxieme question ?'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
