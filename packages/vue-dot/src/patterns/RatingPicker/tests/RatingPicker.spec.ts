import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import RatingPicker from '../';

let wrapper: Wrapper<TestComponent>;

interface TestComponent extends Vue {
	setValue: (value: number) => void;
}

/** Create the test component */
function createTestComponent(): Wrapper<TestComponent> {
	return mountComponent(RatingPicker, {
		propsData: {
			type: 'stars',
			label: 'Pouvez-vous nous en dire plus ?'
		}
	}, true) as Wrapper<TestComponent>;
}

describe('RatingPicker', () => {
	it('renders correctly', () => {
		wrapper = createTestComponent();

		expect(wrapper).toMatchSnapshot();
	});
});
