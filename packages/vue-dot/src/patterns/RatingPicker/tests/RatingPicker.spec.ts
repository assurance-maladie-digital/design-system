import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import RatingPicker from '..';
let wrapper: Wrapper<RatingPicker>;

describe('RatingPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(RatingPicker, {
			propsData: {
				label: 'test',
				type: 'StarsPicker'
			}
		}) as Wrapper<RatingPicker>;

		expect(html(wrapper)).toMatchSnapshot();
	});
});
