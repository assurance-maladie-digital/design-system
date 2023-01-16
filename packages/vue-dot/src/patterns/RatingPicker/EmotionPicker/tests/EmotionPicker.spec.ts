import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import EmotionPicker from '..';

let wrapper: Wrapper<Vue>;

describe('EmotionPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(EmotionPicker,{
			propsData: {
				questionDatas: {
						name: 'first-question',
						type: 'stars',
						question: 'la deuxieme question ?'
					}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
