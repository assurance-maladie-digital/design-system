import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import NumberPicker from '../';

let wrapper: Wrapper<Vue>;

describe('NumberPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NumberPicker,{
			propsData: {
				label: 'Pourriez-vous donner une note ?'
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});
});
