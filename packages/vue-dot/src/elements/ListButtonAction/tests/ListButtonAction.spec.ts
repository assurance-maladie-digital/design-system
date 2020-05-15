import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';
import { html } from '@/tests/html';
import ListButtonAction from '../ListButtonAction.vue';
import { mountComponent } from '@/tests';

let wrapper: Wrapper<Vue>;
const onClick = jest.fn();
const btnAction = {
	label: 'Dialog Text',
	action: onClick
};
// Tests
describe('ListButtonAction.vue', () => {
		it('renders correctly', () => {
			// Mount component
			wrapper = mountComponent(ListButtonAction);
			expect(html(wrapper)).toMatchSnapshot();
		});

		it('check with empty action', () => {
			// Mount component
			wrapper = mountComponent(ListButtonAction, {
				propsData: {
					buttonActions: []
				}
			});
			expect(html(wrapper)).toMatchSnapshot();
		});

	it('check with action', () => {
		// Mount component
		wrapper = mountComponent(ListButtonAction, {
			propsData: {
				buttonActions: [
					btnAction
				]
			}
		});
		expect(html(wrapper)).toMatchSnapshot();
	});
	}
)
;
