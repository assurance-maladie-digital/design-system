import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import EmotionPicker from '../';

let wrapper: Wrapper<Vue>;

describe('EmotionPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(EmotionPicker, {
			propsData: {
				label: 'Pourriez-vous donner une note ?',
				itemLabels: [
					'Pas du tout',
					'Peut-être',
					'Oui super'
				]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
