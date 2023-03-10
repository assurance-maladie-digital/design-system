import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import NumberPicker from '..';

let wrapper: Wrapper<Vue>;

describe('NumberPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NumberPicker,{
			propsData: {
				questionDatas: {
						name: 'first-step',
						type: 'numbers',
						labels: ['debut', 'apres'],
						question: 'la premiere question ?'
					}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
