import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import RatingPicker from '../';

let wrapper: Wrapper<TestComponent>;

interface TestComponent extends Vue {
	onUpdate: (value: number) => void;
}

/** Create the test component */
function createTestComponent(): Wrapper<TestComponent> {
	return mountComponent(RatingPicker, {
		propsData: {
			label: 'Pouvez-vous nous en dire plus ?',
			type: 'StarsPicker'
		}
	}, true) as Wrapper<TestComponent>;
}

describe('RatingPicker', () => {
	it('renders correctly', () => {
		wrapper = createTestComponent();

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('sets readonly interval value on update', () => {
		wrapper = wrapper = createTestComponent();

		expect(wrapper.vm.$data.readonlyInternal).toBeFalsy();

		wrapper.vm.onUpdate(0);

		expect(wrapper.vm.$data.readonlyInternal).toBeTruthy();
	});
});
