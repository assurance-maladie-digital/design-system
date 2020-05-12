import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';
import { html } from '@/tests/html';
import ListButtonAction from '../ListButtonAction.vue';
import { mountComponent } from '@/tests';

let wrapper: Wrapper<Vue>;
const options = {
	computed: {
		listButton() {
			return ['submit', 'cancel'];
		}
	}
};
// Tests
describe('ListButtonAction.vue', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(ListButtonAction, options);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
