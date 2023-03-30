import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import EmotionPicker from '../';

let wrapper: Wrapper<Vue>;

describe('EmotionPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(EmotionPicker,{
			propsData: {
				label: 'Label test',
				labels: {
					sad: 'Pas du tout',
					neutral: 'Peut-être',
					happy: 'Oui super'
				},
				emotions: 3,
				readonly: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
