import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import StarsPicker from '../';

let wrapper: Wrapper<Vue>;

describe('StarsPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(StarsPicker,{
			propsData: {
				label: 'Pourriez-vous donner une note ?'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
