import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

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

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('sets readonly internal value on update', () => {
		wrapper = wrapper = createTestComponent();

		expect(wrapper.vm.$data.hasAnswered).toBeFalsy();

		wrapper.vm.setValue(0);

		expect(wrapper.vm.$data.hasAnswered).toBeTruthy();
	});
});
