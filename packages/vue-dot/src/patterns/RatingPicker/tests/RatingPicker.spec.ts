import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import RatingPicker from '../';

let wrapper: Wrapper<Vue>;

/** Create the test component */
function createTestComponent(): Wrapper<Vue> {
	return mountComponent(RatingPicker, {
		propsData: {
			type: 'stars',
			label: 'Pouvez-vous nous en dire plus ?'
		}
	}, true);
}

describe('RatingPicker', () => {
	it('renders correctly', () => {
		wrapper = createTestComponent();

		expect(wrapper).toMatchSnapshot();
	});
});
